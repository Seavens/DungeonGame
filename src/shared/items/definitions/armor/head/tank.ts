import { ItemDefinition } from "shared/items";
import { ItemId, ItemKind, ItemTier } from "shared/items/types";

export const basicTankHelmet: ItemDefinition<ItemId.BasicTankHelmet, ItemKind.Armor> = {
	id: ItemId.BasicTankHelmet,
	name: "Basic Tank Helmet",
	desc: "A basic helmet for beginners.",
	value: 250,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Basic,
		base: 8,
		upgrades: 5,
	},
};

export const advancedTankHelmet: ItemDefinition<ItemId.AdvancedTankHelmet, ItemKind.Armor> = {
	id: ItemId.AdvancedTankHelmet,
	name: "Advanced Tank Helmet",
	desc: "An advanced helmet for experienced tanks.",
	value: 750,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Advanced,
		base: 16,
		upgrades: 10,
	},
};

export const expertTankHelmet: ItemDefinition<ItemId.ExpertTankHelmet, ItemKind.Armor> = {
	id: ItemId.ExpertTankHelmet,
	name: "Expert Tank Helmet",
	desc: "An expert helmet for skilled tanks.",
	value: 1500,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Expert,
		base: 32,
		upgrades: 15,
	},
};

export const masterTankHelmet: ItemDefinition<ItemId.MasterTankHelmet, ItemKind.Armor> = {
	id: ItemId.MasterTankHelmet,
	name: "Master Tank Helmet",
	desc: "A master helmet for the greatest tanks.",
	value: 3000,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Master,
		base: 64,
		upgrades: 20,
	},
};
