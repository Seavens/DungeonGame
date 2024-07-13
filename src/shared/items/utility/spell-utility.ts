import { itemDefinitions } from "shared/items";
import { ItemUnique, ItemKind, ItemIdOfKind } from "shared/items/types";
import { RarityUtility } from "./rarity-utility";

export class SpellUtility {
	public static generateUnique(id: ItemIdOfKind<ItemKind.Spell>, owner: number) {
		const randomValue = math.random();
		const multiplier = randomValue;
		const base = itemDefinitions[id].kind.base;

		const unique: ItemUnique<ItemKind.Spell> = {
			kind: ItemKind.Spell,
			owner: owner,
			locked: false,
			scaleMultiplier: multiplier,
			rarity: RarityUtility.calculateRarity(multiplier),
			calculatedDamage: base * multiplier,
		};
		return unique;
	}
}
