import type { InferState } from "@rbxts/reflex";
import { combineProducers } from "@rbxts/reflex";
import { inventorySlice, InventoryState } from "server/inventory/slice";

export type DataState = InferState<typeof dataSlice>;

export const dataSlice = combineProducers({
	inventory: inventorySlice,
});

export type { InventoryState };
