import { ItemId, ItemKind, ItemTier } from "shared/items/types";
import { ItemDefinition } from "..";

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
