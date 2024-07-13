import { itemDefinitions } from "..";
import { ItemIdOfKind, ItemKind, ItemUnique } from "../types";
import { RarityUtility } from "./rarity-utility";

export class ArmorUtility {
	public static generateUnique(id: ItemIdOfKind<ItemKind.Armor>, owner: number) {
		const randomValue = math.random();
		const multiplier = randomValue;
		const base = itemDefinitions[id].kind.base;
		const upgrades = 0;

		const unique: ItemUnique<ItemKind.Armor> = {
			kind: ItemKind.Armor,
			owner: owner,
			locked: false,
			scaleMultiplier: multiplier,
			upgrades: upgrades,
			rarity: RarityUtility.calculateRarity(multiplier),
			calculatedDefense: base + base * multiplier + upgrades,
		};
		return unique;
	}
}
