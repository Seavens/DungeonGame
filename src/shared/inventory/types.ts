import { t } from "@rbxts/t";
import { isItem, Item } from "shared/items/types";

export interface EquippedInventory {
	helmet: Option<Item>;
	armor: Option<Item>;
	weapon: Option<Item>;
	spells: [Option<Item>, Option<Item>];
}

export const isEquippedInventory = t.strictInterface({
	helmet: t.optional(isItem),
	armor: t.optional(isItem),
	weapon: t.optional(isItem),
	spells: t.strictArray(t.optional(isItem), t.optional(isItem)),
});
