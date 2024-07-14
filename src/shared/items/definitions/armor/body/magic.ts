import { ItemId, ItemKind, ItemTier } from "shared/items/types";
import { ItemDefinition } from "../..";

export const basicMagicArmor: ItemDefinition<ItemId.BasicMagicArmor, ItemKind.Armor> = {
	id: ItemId.BasicMagicArmor,
	name: "Basic Magic Armor",
	desc: "A basic armor for beginners.",
	value: 500,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Basic,
		base: 10,
		upgrades: 5,
	},
};

export const advancedMagicArmor: ItemDefinition<ItemId.AdvancedMagicArmor, ItemKind.Armor> = {
	id: ItemId.AdvancedMagicArmor,
	name: "Advanced Magic Armor",
	desc: "An advanced armor for experienced mages.",
	value: 1500,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Advanced,
		base: 20,
		upgrades: 10,
	},
};

export const expertMagicArmor: ItemDefinition<ItemId.ExpertMagicArmor, ItemKind.Armor> = {
	id: ItemId.ExpertMagicArmor,
	name: "Expert Magic Armor",
	desc: "An expert armor for skilled sorcerers.",
	value: 3000,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Expert,
		base: 40,
		upgrades: 15,
	},
};

export const masterMagicArmor: ItemDefinition<ItemId.MasterMagicArmor, ItemKind.Armor> = {
	id: ItemId.MasterMagicArmor,
	name: "Master Magic Armor",
	desc: "A master armor for the greatest wizards.",
	value: 6000,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Master,
		base: 80,
		upgrades: 20,
	},
};
