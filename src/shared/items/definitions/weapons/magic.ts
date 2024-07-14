import { ItemId, ItemKind, ItemTier } from "shared/items/types";
import { ItemDefinition } from "..";

export const basicWand: ItemDefinition<ItemId.BasicWand, ItemKind.Weapon> = {
	id: ItemId.BasicWand,
	name: "Basic Wand",
	desc: "A basic wand for beginners.",
	value: 1000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Basic,
		base: 10,
		upgrades: 15,
	},
};

export const advancedWand: ItemDefinition<ItemId.AdvancedWand, ItemKind.Weapon> = {
	id: ItemId.AdvancedWand,
	name: "Advanced Wand",
	desc: "An advanced wand for experienced mages.",
	value: 3000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Advanced,
		base: 20,
		upgrades: 20,
	},
};

export const expertWand: ItemDefinition<ItemId.ExpertWand, ItemKind.Weapon> = {
	id: ItemId.ExpertWand,
	name: "Expert Wand",
	desc: "An expert wand for skilled sorcerers.",
	value: 6000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Expert,
		base: 40,
		upgrades: 25,
	},
};

export const masterWand: ItemDefinition<ItemId.MasterWand, ItemKind.Weapon> = {
	id: ItemId.MasterWand,
	name: "Master Wand",
	desc: "A master wand for the greatest wizards.",
	value: 12000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Master,
		base: 80,
		upgrades: 30,
	},
};
