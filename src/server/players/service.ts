import { Service, OnStart } from "@flamework/core";
import ProfileService from "@rbxts/profileservice";
import { Players } from "@rbxts/services";
import { DATA_TEMPLATE } from "./constants";
import { Profile } from "@rbxts/profileservice/globals";
import { IS_STUDIO, STORE_KEY, STORE_NAME } from "shared/core/constants";
import { Data } from "./types";

export interface OnPlayerAdded {
	/** @hideinherited */
	onPlayerAdded(player: Player): void;
}

export interface OnPlayerRemoved {
	/** @hideinherited */
	onPlayerRemoved(player: Player): void;
}

@Service({})
export class PlayerService implements OnStart, OnPlayerAdded, OnPlayerRemoved {
	private profiles: { [key: number]: Option<Profile<Data>> } = {};
	private store;

	constructor() {
		this.store = IS_STUDIO
			? ProfileService.GetProfileStore(STORE_NAME, DATA_TEMPLATE).Mock
			: ProfileService.GetProfileStore(STORE_NAME, DATA_TEMPLATE);
	}

	onStart() {
		Players.PlayerAdded.Connect((player) => this.onPlayerAdded(player));
		Players.PlayerRemoving.Connect((player) => this.onPlayerRemoved(player));
		const players = Players.GetPlayers();
		for (const player of players) {
			task.spawn(() => this.onPlayerAdded(player));
		}
	}

	public onPlayerAdded(player: Player): void {
		if (this.profiles[player.UserId]) {
			warn(`Profile for player ${player.Name} is already loaded.`);
			return;
		}

		const index = this.getStoreIndex(player);

		const profile = this.store.LoadProfileAsync(index);

		if (profile) {
			profile.AddUserId(player.UserId);
			profile.Reconcile();
			profile.ListenToRelease(() => {
				this.profiles[player.UserId] = undefined;
				player.Kick();
			});
			this.profiles[player.UserId] = profile;
			warn(`Loaded profile for player ${player.Name} on ${index}!`);
		}
	}

	public onPlayerRemoved(player: Player): void {
		const index = this.getStoreIndex(player);
		const profile = this.profiles[player.UserId];

		if (profile) {
			profile.Release();
			this.profiles[player.UserId] = undefined;
			warn(`Released profile for ${player.Name} on ${index}!`);
		}
	}

	private getStoreIndex(player: Player): string {
		return IS_STUDIO ? `${STORE_NAME}${player.UserId}` : `${STORE_KEY}${player.UserId}`;
	}
}
