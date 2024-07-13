import { ItemTier } from "shared/items/types";
import { TierDefinition } from ".";
import { TIER_WEIGHTS } from "shared/items/constants";

export const expertTier: TierDefinition<ItemTier.Expert> = {
	id: ItemTier.Expert,
	name: "Expert",
	desc: "A tier for expert players.",

	weight: TIER_WEIGHTS[ItemTier.Expert],
};
