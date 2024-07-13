import { ItemRarity, ItemTier } from "./types";

export const RARITY_RANGE = {
	[ItemRarity.Common]: { min: 0, max: 0.38 }, // 0.38
	[ItemRarity.Uncommon]: { min: 0.38, max: 0.66 }, // 0.28 - 0.66
	[ItemRarity.Rare]: { min: 0.66, max: 0.87 }, // 0.21 - 0.87
	[ItemRarity.Epic]: { min: 0.87, max: 1 }, // 0.13 - 1
	[ItemRarity.Legendary]: { min: -1, max: -1 },
} as const;

export const TIER_WEIGHTS: { [I in ItemTier]: number } = {
	[ItemTier.Basic]: 0.45,
	[ItemTier.Advanced]: 0.35,
	[ItemTier.Expert]: 0.18,
	[ItemTier.Master]: 0.02,
};
