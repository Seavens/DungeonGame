import Object from "@rbxts/object-utils";
import { ItemTier } from "../types";
import { TIER_WEIGHTS } from "../constants";

export class TierUtility {
	public static generateTier(): ItemTier {
		const tiers = Object.keys(TIER_WEIGHTS) as ItemTier[];
		const totalWeight = tiers.reduce((acc, tier) => acc + TIER_WEIGHTS[tier], 0);
		const random = math.random() * totalWeight;

		let weight = 0;
		for (const tier of tiers) {
			weight += TIER_WEIGHTS[tier];
			if (random <= weight) {
				return tier;
			}
		}
		return ItemTier.Basic;
	}
}
