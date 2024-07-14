import { InventoryState } from "server/players";
import type { ServerState } from "server/state/store";
import { DEFAULT_DATA, InventoryData } from "shared/players/data";

const fallback: InventoryData = DEFAULT_DATA.inventory;

export function selectInventoryState(state: ServerState): InventoryState {
	const { data } = state;
	const { inventory } = data;
	return inventory;
}

export function selectInventoryByUser(user: string): (state: ServerState) => InventoryData {
	return function (state: ServerState): InventoryData {
		const inventories = selectInventoryState(state);
		// eslint-disable-next-line roblox-ts/no-any
		return inventories[user] ?? fallback; // Not sure why it needs eslint disable // FIXME
	};
}
