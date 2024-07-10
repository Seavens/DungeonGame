import { ItemDefinition } from "shared/items";
import { ItemId, ItemKind, ItemTier } from "shared/items/types";

export const basicMagicHelmet: ItemDefinition<ItemId.BasicMagicHelmet, ItemKind.Armor> = {
	id: ItemId.BasicMagicHelmet,
	name: "Basic Magic Helmet",
	desc: "A basic helmet for beginners.",
	value: 250,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Basic,
		base: 5,
		upgrades: 5,
	},
};

export const advancedMagicHelmet: ItemDefinition<ItemId.AdvancedMagicHelmet, ItemKind.Armor> = {
	id: ItemId.AdvancedMagicHelmet,
	name: "Advanced Magic Helmet",
	desc: "An advanced helmet for experienced mages.",
	value: 750,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Advanced,
		base: 10,
		upgrades: 10,
	},
};

export const expertMagicHelmet: ItemDefinition<ItemId.ExpertMagicHelmet, ItemKind.Armor> = {
	id: ItemId.ExpertMagicHelmet,
	name: "Expert Magic Helmet",
	desc: "An expert helmet for skilled sorcerers.",
	value: 1500,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Expert,
		base: 20,
		upgrades: 15,
	},
};

export const masterMagicHelmet: ItemDefinition<ItemId.MasterMagicHelmet, ItemKind.Armor> = {
	id: ItemId.MasterMagicHelmet,
	name: "Master Magic Helmet",
	desc: "A master helmet for the greatest wizards.",
	value: 3000,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Master,
		base: 40,
		upgrades: 20,
	},
};
