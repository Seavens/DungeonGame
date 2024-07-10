import { ItemRarity } from "shared/items/types";
import type { RarityDefinition } from ".";
import { RARITY_RANGE } from "../constants";

export const commonRarity: RarityDefinition<ItemRarity.Common> = {
	id: ItemRarity.Common,
	name: "Common",
	desc: "A common rarity.",
	weight: RARITY_RANGE[ItemRarity.Common],
	color: Color3.fromRGB(163, 163, 163),
};
