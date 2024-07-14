import { armors } from "./armor";
import { spells } from "./spells";
import { weapons } from "./weapons";
import { ItemId, ItemKind, ItemTier } from "../types";

export interface WeaponDefinition {
	kind: ItemKind.Weapon;
	tier: ItemTier;
	base: number;
	upgrades: number;
}

export interface ArmorDefinition {
	kind: ItemKind.Armor;
	tier: ItemTier;
	base: number;
	upgrades: number;
}

export interface SpellDefinition {
	kind: ItemKind.Spell;
	tier: ItemTier;
	base: number;
	cooldown: number;
}

export interface DefinitionKinds {
	[ItemKind.Weapon]: WeaponDefinition;
	[ItemKind.Armor]: ArmorDefinition;
	[ItemKind.Spell]: SpellDefinition;
}

export interface ItemDefinition<I extends ItemId, C extends ItemKind> {
	id: I;
	name: string;
	desc: string;

	value: number;

	kind: DefinitionKinds[C];
}

type InferClass<T> = T extends ItemDefinition<ItemId, infer C> ? C : never;
export type AnyItemDefinition = (typeof itemDefinitions)[ItemId];
export type KindItemDefinition<K extends ItemKind> = {
	[I in keyof typeof itemDefinitions]: (typeof itemDefinitions)[I] extends ItemDefinition<I, K>
		? ItemDefinition<I, K>
		: never;
}[ItemId];

export const itemDefinitions = {
	...weapons,
	...armors,
	...spells,
} as const;

itemDefinitions satisfies { [I in ItemId]: ItemDefinition<I, InferClass<(typeof itemDefinitions)[I]>> };
