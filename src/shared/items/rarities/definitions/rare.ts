import { ItemRarity } from "shared/items/types";
import type { RarityDefinition } from ".";
import { RARITY_RANGE } from "../constants";

export const rareRarity: RarityDefinition<ItemRarity.Rare> = {
	id: ItemRarity.Rare,
	name: "Rare",
	desc: "A rare rarity.",
	weight: RARITY_RANGE[ItemRarity.Rare],
	color: Color3.fromRGB(69, 110, 194),
};
