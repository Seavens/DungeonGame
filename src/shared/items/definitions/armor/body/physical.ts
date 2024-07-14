import { ItemId, ItemKind, ItemTier } from "shared/items/types";
import { ItemDefinition } from "../..";

export const basicPhysicalArmor: ItemDefinition<ItemId.BasicPhysicalArmor, ItemKind.Armor> = {
	id: ItemId.BasicPhysicalArmor,
	name: "Basic Physical Armor",
	desc: "A basic armor for beginners.",
	value: 500,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Basic,
		base: 10,
		upgrades: 5,
	},
};

export const advancedPhysicalArmor: ItemDefinition<ItemId.AdvancedPhysicalArmor, ItemKind.Armor> = {
	id: ItemId.AdvancedPhysicalArmor,
	name: "Advanced Physical Armor",
	desc: "An advanced armor for experienced warriors.",
	value: 1500,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Advanced,
		base: 20,
		upgrades: 10,
	},
};

export const expertPhysicalArmor: ItemDefinition<ItemId.ExpertPhysicalArmor, ItemKind.Armor> = {
	id: ItemId.ExpertPhysicalArmor,
	name: "Elite Physical Armor",
	desc: "An elite armor for seasoned fighters.",
	value: 3000,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Expert,
		base: 40,
		upgrades: 15,
	},
};

export const masterPhysicalArmor: ItemDefinition<ItemId.MasterPhysicalArmor, ItemKind.Armor> = {
	id: ItemId.MasterPhysicalArmor,
	name: "Legendary Physical Armor",
	desc: "A legendary armor for the greatest heroes.",
	value: 6000,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Master,
		base: 80,
		upgrades: 20,
	},
};
