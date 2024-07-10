import { t } from "@rbxts/t";
import { isItem, Item } from "shared/items/types";

export interface EquippedStructure {
	helmet: Item | undefined;
	armor: Item | undefined;
	weapon: Item | undefined;
	spellA: Item | undefined;
	spellB: Item | undefined;
}

export const isEquippedStructure = t.strictInterface({
	helmet: isItem,
	armor: isItem,
	weapon: isItem,
	spellA: isItem,
	spellB: isItem,
});
