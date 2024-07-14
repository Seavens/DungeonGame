import { Item } from "shared/items/types";
import { DataActions } from "shared/players/data";
import type { ReplicationMetadata, UserMetadata } from "shared/state/replication";

export type InventoryActions<S> = {
	addItems: (state: S, payload: InventoryAddItems, metadata: UserMetadata & ReplicationMetadata) => S;
	removeItems: (state: S, payload: InventoryRemoveItems, metadata: UserMetadata & ReplicationMetadata) => S;
} & DataActions<S>;

export interface InventoryAddItems {
	items: Array<Item>;
}

export interface InventoryRemoveItems {
	slots: Array<Slot>;
}
