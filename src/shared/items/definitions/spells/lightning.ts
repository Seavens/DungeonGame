import { ItemDefinition } from "shared/items";
import { ItemId, ItemKind, ItemTier } from "shared/items/types";

export const lightning: ItemDefinition<ItemId.Lightning, ItemKind.Spell> = {
	id: ItemId.Lightning,
	name: "Lighting",
	desc: "A lightning spell.",
	value: 100,

	kind: {
		kind: ItemKind.Spell,
		tier: ItemTier.Advanced,
		base: 10,
		cooldown: 5,
	},
};
