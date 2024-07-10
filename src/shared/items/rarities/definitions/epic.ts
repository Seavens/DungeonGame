import { ItemRarity } from "shared/items/types";
import type { RarityDefinition } from ".";
import { RARITY_RANGE } from "../constants";

export const epicRarity: RarityDefinition<ItemRarity.Epic> = {
	id: ItemRarity.Epic,
	name: "Epic",
	desc: "An epic rarity.",
	weight: RARITY_RANGE[ItemRarity.Epic],
	color: Color3.fromRGB(106, 13, 173),
};
