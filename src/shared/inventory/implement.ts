import { isDraft, original, produce } from "@rbxts/immut";
import type { Draft } from "@rbxts/immut/src/types-external";
import { ItemKind, Item } from "shared/items/types";
import { InventoryData } from "shared/players/data";
import { INVENTORY_ITEMS_MAXIMUM } from "./constants";

export class InventoryImplement {
	public static getEmptySlot<K extends ItemKind = ItemKind>(slots: Map<Slot, Item>, max: number): Option<Slot> {
		// Changed to `Map<Slot, Item>` from `Map<Slot, Item<K>>` // FIXME
		let empty: Option<Slot>;
		for (const index of $range(1, max)) {
			const slot: Slot = `${index}`;
			if (slots.has(slot)) {
				continue;
			}
			empty = slot;
			break;
		}
		return empty;
	}

	public static canAddItems(inventory: InventoryData, adding: Array<Item>): boolean {
		let result = false;
		produce(inventory, (draft: Draft<InventoryData>): InventoryData => {
			result = this.addItems(draft, adding);
			return original(draft);
		});
		return result;
	}

	public static canRemoveItems(inventory: InventoryData, removing: Array<Slot>): boolean {
		let result = false;
		produce(inventory, (draft: Draft<InventoryData>): InventoryData => {
			result = this.removeItems(draft, removing);
			return original(draft);
		});
		return result;
	}

	public static addItems({ stored }: InventoryData, adding: Array<Item>): boolean {
		warn("Adding items to inventory...");
		if (!isDraft(stored)) {
			warn("Inventory is not a draft!");
			return false;
		}
		let size = stored.size();
		// eslint-disable-next-line roblox-ts/no-any
		if (size > INVENTORY_ITEMS_MAXIMUM) {
			// Not sure why it needs eslint disable // FIXME
			warn("Inventory is full!");
			return false;
		}
		for (const item of adding) {
			const empty = this.getEmptySlot(stored, INVENTORY_ITEMS_MAXIMUM);
			if (empty === undefined) {
				warn("No empty slots!");
				return false;
			}
			// eslint-disable-next-line roblox-ts/no-any
			stored.set(empty, item); // Not sure why it needs eslint disable // FIXME
			size += 1;
			warn(`Added item to slot ${empty}`);
		}
		if (size > INVENTORY_ITEMS_MAXIMUM) {
			warn("Inventory is full!");
			return false;
		}
		return true;
	}

	public static removeItems({ stored }: InventoryData, removing: Array<Slot>): boolean {
		if (!isDraft(stored)) {
			return false;
		}
		for (const slot of removing) {
			// eslint-disable-next-line roblox-ts/no-any
			const item = stored.get(slot); // Not sure why it needs eslint disable // FIXME
			// eslint-disable-next-line roblox-ts/no-any
			if (item === undefined) {
				// Not sure why it needs eslint disable // FIXME
				return false;
			}
			// eslint-disable-next-line roblox-ts/no-any
			stored.delete(slot); // Not sure why it needs eslint disable // FIXME
		}
		return true;
	}
}
