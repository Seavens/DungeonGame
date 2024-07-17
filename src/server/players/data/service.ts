import { Service } from "@flamework/core";
import { createCollection, Document } from "@rbxts/lapis";
import { IS_STUDIO, IS_MOCK_DATA, CLEAR_MOCK_DATA } from "shared/core";
import { DEFAULT_DATA, isData, Data } from "shared/players/data";
import { createListener } from "shared/utility";
import { OnPlayerAdded, OnPlayerRemoving } from "../service";
import { COLLECTION_NAME, COLLECTION_KEY } from "./constants";
import { attemptDataWipe } from "./utility";
import { store } from "server/state/store";
import { Events } from "server/network";
import { selectDataByUser } from "./selectors";

export interface OnDataLoaded {
	/** @hideinherited */
	onDataLoaded(player: Player): void;
}

export interface OnPlayerReady {
	/** @hideinherited */
	onPlayerReady(player: Player): void;
}

const dataLoaded = createListener<OnDataLoaded>();
const onPlayerReady = createListener<OnPlayerReady>();

@Service({})
export class DataService implements OnPlayerAdded, OnPlayerRemoving {
	protected static readonly collection = createCollection(COLLECTION_NAME, {
		defaultData: DEFAULT_DATA,
		validate: isData,
	});
	protected static readonly documents = new Map<Player, Document<Data, true>>();
	protected static readonly subscriptions = new Map<Player, () => void>();
	protected static readonly loaded = new Set<Player>();

	public static isPlayerLoaded(player: Player): boolean {
		const { loaded } = this;
		return loaded.has(player);
	}

	public async onPlayerAdded(player: Player): Promise<void> {
		const { collection, documents, subscriptions, loaded } = DataService;
		if (IS_STUDIO && IS_MOCK_DATA && CLEAR_MOCK_DATA) {
			await attemptDataWipe(player);
		}
		const user = player.Name;
		const id = player.UserId;
		const index = `${COLLECTION_KEY}${id}`;
		try {
			const document = await collection.load(index, [id]);
			const data = document.read();
			const unsubscribe = store.subscribe(selectDataByUser(user), (data: Data): void => {
				document.write(data);
			});
			subscriptions.set(player, unsubscribe);
			store.addData({ data }, { user, replicate: true });
			onPlayerReady.fire(player);

			documents.set(player, document);
		} catch (err) {
			warn(`${user} encountered an error while loading data! Error:`, err);
			const data = DEFAULT_DATA;
			store.addData({ data }, { user, replicate: true });
		}
		loaded.add(player);
		dataLoaded.fire(player);
		Events.data.loaded(player);
	}

	public async onPlayerRemoving(player: Player): Promise<void> {
		const { documents, subscriptions, loaded } = DataService;
		const unsubscribe = subscriptions.get(player);
		const document = documents.get(player);
		const user = player.Name;
		store.removeData({}, { user, replicate: true });
		unsubscribe?.();
		await document
			?.close()
			.catch(warn)
			.finally((): void => {
				loaded.delete(player);
				documents.delete(player);
			});
	}
}
