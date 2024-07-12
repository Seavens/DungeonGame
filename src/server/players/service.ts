import { OnStart, Service } from "@flamework/core";
import { DEFAULT_DATA } from "./constants";
import { COLLECTION_KEY, IS_STUDIO } from "shared/core/constants";
import { createCollection, Document } from "@rbxts/lapis";
import { Data } from "./types";
import { Players } from "@rbxts/services";
import { reuseThread } from "shared/utility/functions/reuse-thread";
import { attemptDataWipe } from "./utility";

@Service({})
export class PlayerService implements OnStart {
	private readonly collection = createCollection(COLLECTION_KEY, {
		defaultData: DEFAULT_DATA,
	});

	private readonly documents = new Map<number, Document<Data, boolean>>();

	onStart(): void {
		Players.PlayerAdded.Connect((player: Player): Promise<void> => this.onPlayerAdded(player));
		Players.PlayerRemoving.Connect((player: Player): Promise<void> => this.onPlayerRemoved(player));
		const players = Players.GetPlayers();
		for (const player of players) {
			this.onPlayerAdded(player);
		}
	}

	private async onPlayerAdded(player: Player): Promise<void> {
		if (IS_STUDIO) {
			await attemptDataWipe(player);
		}

		const userId = player.UserId;
		const index = `${COLLECTION_KEY}${userId}`;

		this.loadDocument(index)
			.then((document) => {
				if (player.Parent === undefined) {
					document.close().catch(warn);
					return;
				}

				this.documents.set(userId, document);
			})
			.catch((err) => {
				warn(err);
				player.Kick("Failed to load player data");
			});
	}

	private async onPlayerRemoved(player: Player): Promise<void> {
		const userId = player.UserId;
		const document = this.documents.get(userId);

		await document
			?.close()
			.catch(warn)
			.finally((): void => {
				this.documents.delete(userId);
			});
	}

	private async loadDocument(index: string): Promise<Document<Data, boolean>> {
		return this.collection.load(index);
	}
}
