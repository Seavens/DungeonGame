import { ItemRarity } from "shared/items/types";
import type { RarityDefinition } from ".";
import { RARITY_RANGE } from "../constants";

export const legendaryRarity: RarityDefinition<ItemRarity.Legendary> = {
	id: ItemRarity.Legendary,
	name: "Legendary",
	desc: "A legendary rarity.",
	// weight: RARITY_RANGE[ItemRarity.Legendary],
	weight: { min: -1, max: -1 },
	color: Color3.fromRGB(255, 202, 75),
};
