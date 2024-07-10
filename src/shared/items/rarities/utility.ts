import { ItemRarity } from "../types";
import { RARITY_RANGE } from "./constants";

export class RarityUtility {
	public static calculateRarity(scaleMultiplier: number): ItemRarity {
		for (const [rarity, range] of pairs(RARITY_RANGE)) {
			if (scaleMultiplier >= range.min && scaleMultiplier <= range.max) {
				return rarity as ItemRarity;
			}
		}
		throw error("Invalid scaleMultiplier value");
	}
}
