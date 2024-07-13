import { ItemTier } from "shared/items/types";
import { TierDefinition } from ".";
import { TIER_WEIGHTS } from "shared/items/constants";

export const basicTier: TierDefinition<ItemTier.Basic> = {
	id: ItemTier.Basic,
	name: "Basic",
	desc: "The most basic tier of items.",

	weight: TIER_WEIGHTS[ItemTier.Basic],
};
