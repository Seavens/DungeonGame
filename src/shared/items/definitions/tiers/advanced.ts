import { ItemTier } from "shared/items/types";
import { TierDefinition } from ".";
import { TIER_WEIGHTS } from "shared/items/constants";

export const advancedTier: TierDefinition<ItemTier.Advanced> = {
	id: ItemTier.Advanced,
	name: "Advanced",
	desc: "A tier for more experienced players.",

	weight: TIER_WEIGHTS[ItemTier.Advanced],
};
