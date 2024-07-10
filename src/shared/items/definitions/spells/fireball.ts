import { ItemDefinition } from "shared/items";
import { ItemId, ItemKind, ItemTier } from "shared/items/types";

export const fireball: ItemDefinition<ItemId.Fireball, ItemKind.Spell> = {
	id: ItemId.Fireball,
	name: "Fireball",
	desc: "A fireball spell.",
	value: 100,

	kind: {
		kind: ItemKind.Spell,
		tier: ItemTier.Advanced,
		base: 10,
		cooldown: 5,
	},
};
