import { ItemDefinition } from "shared/items";
import { ItemId, ItemKind, ItemTier } from "shared/items/types";

export const basicPhysicalHelmet: ItemDefinition<ItemId.BasicPhysicalHelmet, ItemKind.Armor> = {
	id: ItemId.BasicPhysicalHelmet,
	name: "Basic Physical Helmet",
	desc: "A basic helmet for beginners.",
	value: 250,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Basic,
		base: 5,
		upgrades: 5,
	},
};

export const advancedPhysicalHelmet: ItemDefinition<ItemId.AdvancedPhysicalHelmet, ItemKind.Armor> = {
	id: ItemId.AdvancedPhysicalHelmet,
	name: "Advanced Physical Helmet",
	desc: "An advanced helmet for experienced warriors.",
	value: 750,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Advanced,
		base: 10,
		upgrades: 10,
	},
};

export const expertPhysicalHelmet: ItemDefinition<ItemId.ExpertPhysicalHelmet, ItemKind.Armor> = {
	id: ItemId.ExpertPhysicalHelmet,
	name: "Elite Physical Helmet",
	desc: "An elite helmet for seasoned fighters.",
	value: 1500,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Expert,
		base: 20,
		upgrades: 15,
	},
};

export const masterPhysicalHelmet: ItemDefinition<ItemId.MasterPhysicalHelmet, ItemKind.Armor> = {
	id: ItemId.MasterPhysicalHelmet,
	name: "Legendary Physical Helmet",
	desc: "A legendary helmet for the greatest heroes.",
	value: 3000,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Master,
		base: 40,
		upgrades: 20,
	},
};
