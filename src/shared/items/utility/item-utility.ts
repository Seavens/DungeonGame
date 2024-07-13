import { Item, ItemId, ItemIdOfKind, ItemKind, ItemRarity, ItemTier } from "../types";
import { TierUtility } from "./tier-utility";
import { ArmorUtility } from "./armor-utility";
import { WeaponUtility } from "./weapon-utility";
import { SpellUtility } from "./spell-utility";
import { generateUUID } from "shared/utility/functions/create-uuid";
import { itemDefinitions } from "..";
import Object from "@rbxts/object-utils";

export class ItemUtility {
	private static getItemsByKindAndTier(tier: ItemTier, kind: ItemKind): Array<ItemId> {
		return Object.values(itemDefinitions)
			.filter((itemDef) => itemDef.kind.kind === kind && itemDef.kind.tier === tier)
			.map((itemDef) => itemDef.id);
	}

	public static generateItem<T extends ItemKind>(owner: number, kind?: T, id?: ItemId): Item {
		if (!kind) {
			kind = this.generateKind() as T;
		}
		const tier = kind === ItemKind.Spell ? this.generateSpellTier() : TierUtility.generateTier();
		const itemId =
			id ??
			this.getItemsByKindAndTier(tier, kind)[
				math.floor(math.random() * this.getItemsByKindAndTier(tier, kind).size())
			];

		const uniqueItem = this.generateUniqueItem(owner, kind, itemId);
		const itemDef = itemDefinitions[itemId];

		if (itemDef.kind.tier === ItemTier.Master) {
			uniqueItem.rarity = ItemRarity.Legendary;
		}

		return {
			id: itemId,
			uuid: generateUUID(),
			unique: uniqueItem,
		};
	}

	private static generateUniqueItem(owner: number, kind: ItemKind, id: ItemId) {
		switch (kind) {
			case ItemKind.Armor: {
				const unique = ArmorUtility.generateUnique(id as ItemIdOfKind<ItemKind.Armor>, owner);
				return unique;
			}
			case ItemKind.Weapon: {
				const unique = WeaponUtility.generateUnique(id as ItemIdOfKind<ItemKind.Weapon>, owner);
				return unique;
			}
			case ItemKind.Spell: {
				const unique = SpellUtility.generateUnique(id as ItemIdOfKind<ItemKind.Spell>, owner);
				return unique;
			}
			default:
				throw error(`Unknown item kind: ${kind}`);
		}
	}

	private static generateKind() {
		const keys = Object.keys(itemDefinitions);
		const key = keys[math.floor(math.random() * keys.size())];
		return itemDefinitions[key as ItemId].kind.kind;
	}

	private static generateSpellTier(): ItemTier {
		const tiers = [ItemTier.Advanced];
		return tiers[math.floor(math.random() * tiers.size())];
	}
}
