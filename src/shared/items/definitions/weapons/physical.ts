import { ItemDefinition } from "shared/items";
import { ItemId, ItemKind, ItemTier } from "shared/items/types";

export const basicSword: ItemDefinition<ItemId.BasicSword, ItemKind.Weapon> = {
	id: ItemId.BasicSword,
	name: "Basic Sword",
	desc: "A basic sword for beginners.",
	value: 1000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Basic,
		base: 10,
		upgrades: 15,
	},
};

export const advancedSword: ItemDefinition<ItemId.AdvancedSword, ItemKind.Weapon> = {
	id: ItemId.AdvancedSword,
	name: "Advanced Sword",
	desc: "An advanced sword for experienced warriors.",
	value: 3000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Advanced,
		base: 20,
		upgrades: 20,
	},
};

export const expertSword: ItemDefinition<ItemId.ExpertSword, ItemKind.Weapon> = {
	id: ItemId.ExpertSword,
	name: "Expert Sword",
	desc: "An expert sword for skilled fighters.",
	value: 6000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Expert,
		base: 40,
		upgrades: 25,
	},
};

export const masterSword: ItemDefinition<ItemId.MasterSword, ItemKind.Weapon> = {
	id: ItemId.MasterSword,
	name: "Master Sword",
	desc: "A master sword for the greatest heroes.",
	value: 12000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Master,
		base: 80,
		upgrades: 30,
	},
};
