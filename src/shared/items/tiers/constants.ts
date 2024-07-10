import { ItemTier } from "../types";

export const TIER_WEIGHTS: { [I in ItemTier]: number } = {
	[ItemTier.Basic]: 0.45,
	[ItemTier.Advanced]: 0.35,
	[ItemTier.Expert]: 0.18,
	[ItemTier.Master]: 0.02,
};
