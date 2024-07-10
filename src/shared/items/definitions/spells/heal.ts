import { ItemDefinition } from "shared/items";
import { ItemId, ItemKind, ItemTier } from "shared/items/types";

export const heal: ItemDefinition<ItemId.Heal, ItemKind.Spell> = {
	id: ItemId.Heal,
	name: "Heal",
	desc: "A healing spell.",
	value: 100,

	kind: {
		kind: ItemKind.Spell,
		tier: ItemTier.Advanced,
		base: 10,
		cooldown: 5,
	},
};
