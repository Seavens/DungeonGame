import { ItemRarity } from "shared/items/types";
import type { RarityDefinition } from ".";
import { RARITY_RANGE } from "shared/items/constants";

export const legendaryRarity: RarityDefinition<ItemRarity.Legendary> = {
	id: ItemRarity.Legendary,
	name: "Legendary",
	desc: "A legendary rarity.",

	weight: RARITY_RANGE[ItemRarity.Legendary],
	color: Color3.fromRGB(255, 202, 75),
};
