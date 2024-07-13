import { ItemRarity } from "shared/items/types";
import { commonRarity } from "./common";
import { epicRarity } from "./epic";
import { legendaryRarity } from "./legendary";
import { rareRarity } from "./rare";
import { uncommonRarity } from "./uncommon";

export interface RarityDefinition<I extends ItemRarity> {
	id: I;
	name: string;
	desc: string;

	weight: { min: number; max: number };
	color: Color3;
}

export type AnyRarityDefinition = (typeof rarityDefinitions)[ItemRarity];

export const rarityDefinitions: { [I in ItemRarity]: RarityDefinition<I> } = {
	[ItemRarity.Common]: commonRarity,
	[ItemRarity.Uncommon]: uncommonRarity,
	[ItemRarity.Epic]: epicRarity,
	[ItemRarity.Rare]: rareRarity,
	[ItemRarity.Legendary]: legendaryRarity,
} as const;
