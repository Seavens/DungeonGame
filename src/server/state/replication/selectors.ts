import { createSelector } from "@rbxts/reflex";
import type { ServerPlayerState, ServerState } from "../store";
import { selectInventoryByUser } from "server/inventory/selectors";
import { InventoryData } from "shared/players/data";

export function selectStateByUser(user: string): (state: ServerState) => ServerPlayerState {
	return createSelector([selectInventoryByUser(user)], (inventory: InventoryData): ServerPlayerState => {
		return {
			inventory,
		};
	});
}
