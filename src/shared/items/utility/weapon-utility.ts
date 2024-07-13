import { itemDefinitions } from "shared/items";
import { ItemUnique, ItemKind, ItemIdOfKind } from "shared/items/types";
import { RarityUtility } from "./rarity-utility";

export class WeaponUtility {
	public static generateUnique(id: ItemIdOfKind<ItemKind.Weapon>, owner: number) {
		const randomValue = math.random();
		const multiplier = randomValue;
		const base = itemDefinitions[id].kind.base;
		const upgrades = 0;

		const unique: ItemUnique<ItemKind.Weapon> = {
			kind: ItemKind.Weapon,
			owner: owner,
			locked: false,
			scaleMultiplier: multiplier,
			upgrades: upgrades,
			rarity: RarityUtility.calculateRarity(multiplier),
			calculatedDamage: base + base * multiplier + upgrades,
		};
		return unique;
	}
}
