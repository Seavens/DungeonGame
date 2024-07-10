import { ItemId } from "shared/items/types";
import { fireball } from "./fireball";
import { lightning } from "./lightning";
import { heal } from "./heal";

export const spells = {
	// Physical Spells
	[ItemId.Fireball]: fireball,

	// Magic Spells
	[ItemId.Lightning]: lightning,

	// Tank Spells
	[ItemId.Heal]: heal,
};
