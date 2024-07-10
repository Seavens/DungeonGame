import { ItemTier } from "shared/items/types";
import { advancedTier } from "./advanced";
import { basicTier } from "./basic";
import { expertTier } from "./expert";
import { masterTier } from "./master";

export interface TierDefinition<I extends ItemTier> {
	id: I;
	name: string;
	desc: string;

	weight: number;
}

export type AnyTierDefinition = (typeof tierDefinitions)[ItemTier];

export const tierDefinitions: { [I in ItemTier]: TierDefinition<I> } = {
	[ItemTier.Basic]: basicTier,
	[ItemTier.Advanced]: advancedTier,
	[ItemTier.Expert]: expertTier,
	[ItemTier.Master]: masterTier,
} as const;
