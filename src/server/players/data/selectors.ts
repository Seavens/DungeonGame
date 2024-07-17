import { createSelector } from "@rbxts/reflex";
import { selectInventoryByUser } from "server/inventory";
import { ServerState } from "server/state/store";
import { Data, DEFAULT_DATA, InventoryData } from "shared/players/data";

export function selectDataByUser(user: string): (state: ServerState) => Data {
	return createSelector([selectInventoryByUser(user)], (inventory: InventoryData): Data => {
		return { inventory, profile: DEFAULT_DATA.profile };
	});
}
