import { ItemId, ItemKind, ItemTier } from "shared/items/types";
import { ItemDefinition } from "..";

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
