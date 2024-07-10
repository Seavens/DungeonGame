import { ItemDefinition } from "shared/items";
import { ItemId, ItemKind, ItemTier } from "shared/items/types";

export const basicShield: ItemDefinition<ItemId.BasicShield, ItemKind.Weapon> = {
	id: ItemId.BasicShield,
	name: "Basic Shield",
	desc: "A basic shield for beginners.",
	value: 1000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Basic,
		base: 20,
		upgrades: 20,
	},
};

export const advancedShield: ItemDefinition<ItemId.AdvancedShield, ItemKind.Weapon> = {
	id: ItemId.AdvancedShield,
	name: "Advanced Shield",
	desc: "An advanced shield for experienced knights.",
	value: 3000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Advanced,
		base: 40,
		upgrades: 25,
	},
};

export const expertShield: ItemDefinition<ItemId.ExpertShield, ItemKind.Weapon> = {
	id: ItemId.ExpertShield,
	name: "Expert Shield",
	desc: "An expert shield for skilled warriors.",
	value: 6000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Expert,
		base: 80,
		upgrades: 30,
	},
};

export const masterShield: ItemDefinition<ItemId.MasterShield, ItemKind.Weapon> = {
	id: ItemId.MasterShield,
	name: "Master Shield",
	desc: "A master shield for the greatest paladins.",
	value: 12000,

	kind: {
		kind: ItemKind.Weapon,
		tier: ItemTier.Master,
		base: 160,
		upgrades: 35,
	},
};
