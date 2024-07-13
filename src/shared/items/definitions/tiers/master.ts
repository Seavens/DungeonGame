import { ItemTier } from "shared/items/types";
import { TierDefinition } from ".";
import { TIER_WEIGHTS } from "shared/items/constants";

export const masterTier: TierDefinition<ItemTier.Master> = {
	id: ItemTier.Master,
	name: "Master",
	desc: "The highest tier of items.",

	weight: TIER_WEIGHTS[ItemTier.Master],
};
