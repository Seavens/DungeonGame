import { ItemRarity } from "shared/items/types";
import type { RarityDefinition } from ".";
import { RARITY_RANGE } from "../constants";

export const uncommonRarity: RarityDefinition<ItemRarity.Uncommon> = {
	id: ItemRarity.Uncommon,
	name: "UnCommon",
	desc: "A Uncommon rarity.",
	weight: RARITY_RANGE[ItemRarity.Uncommon],
	color: Color3.fromRGB(105, 214, 94),
};
