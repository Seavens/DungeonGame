import { original, produce } from "@rbxts/immut";
import type { Draft } from "@rbxts/immut/src/types-external";
import { createProducer } from "@rbxts/reflex";
import { InventoryActions, InventoryAddItems, InventoryRemoveItems } from "shared/inventory";
import type { UserMetadata } from "shared/state/replication";
import { InventoryImplement } from "./implement";
import { DataAdded, DEFAULT_DATA, InventoryData } from "shared/players/data";

export interface InventoryState {
	readonly [user: string]: InventoryData;
}

const inventoryState: InventoryState = {};

export const inventorySlice = createProducer<InventoryState, InventoryActions<InventoryState>>(inventoryState, {
	addData: (state: InventoryState, { data }: DataAdded, { user }: UserMetadata): InventoryState =>
		produce(state, (draft: Draft<InventoryState>): void => {
			const { inventory } = data;
			warn("Adding data");
			draft[user] = inventory;
		}),
	removeData: (state: InventoryState, _, { user }: UserMetadata): InventoryState =>
		produce(state, (draft: Draft<InventoryState>): void => {
			warn("Removing data");
			draft[user] = DEFAULT_DATA.inventory;
		}),
	addItems: (state: InventoryState, { items }: InventoryAddItems, { user }: UserMetadata): InventoryState =>
		produce(state, (draft: Draft<InventoryState>): InventoryState => {
			const inventory = draft[user];

			// if (inventory === undefined) {
			// 	return draft;
			// }
			const success = InventoryImplement.addItems(inventory, items);
			if (!success) {
				warn("Failed to add items");
				return original(draft);
			}
			warn("Added items");
			return draft;
		}),
	removeItems: (state: InventoryState, { slots }: InventoryRemoveItems, { user }: UserMetadata): InventoryState =>
		produce(state, (draft: Draft<InventoryState>): InventoryState => {
			const inventory = draft[user];
			if (inventory === undefined) {
				return draft;
			}
			const success = InventoryImplement.removeItems(inventory, slots);
			if (!success) {
				return original(draft);
			}
			return draft;
		}),
});
