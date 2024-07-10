import { ItemDefinition } from "shared/items";
import { ItemId, ItemKind, ItemTier } from "shared/items/types";

export const basicTankArmor: ItemDefinition<ItemId.BasicTankArmor, ItemKind.Armor> = {
	id: ItemId.BasicTankArmor,
	name: "Basic Tank Armor",
	desc: "A basic armor for beginners.",
	value: 500,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Basic,
		base: 15,
		upgrades: 5,
	},
};

export const advancedTankArmor: ItemDefinition<ItemId.AdvancedTankArmor, ItemKind.Armor> = {
	id: ItemId.AdvancedTankArmor,
	name: "Advanced Tank Armor",
	desc: "An advanced armor for experienced tanks.",
	value: 1500,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Advanced,
		base: 30,
		upgrades: 10,
	},
};

export const expertTankArmor: ItemDefinition<ItemId.ExpertTankArmor, ItemKind.Armor> = {
	id: ItemId.ExpertTankArmor,
	name: "Expert Tank Armor",
	desc: "An expert armor for skilled tanks.",
	value: 3000,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Expert,
		base: 60,
		upgrades: 15,
	},
};

export const masterTankArmor: ItemDefinition<ItemId.MasterTankArmor, ItemKind.Armor> = {
	id: ItemId.MasterTankArmor,
	name: "Master Tank Armor",
	desc: "A master armor for the greatest tanks.",
	value: 6000,

	kind: {
		kind: ItemKind.Armor,
		tier: ItemTier.Master,
		base: 120,
		upgrades: 20,
	},
};
