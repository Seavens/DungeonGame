import { Flamework } from "@flamework/core";
import { t } from "@rbxts/t";
import type { ItemDefinition, itemDefinitions } from ".";
import { isUUID } from "shared/utility/guards";

export const enum ItemRarity {
	Common = "rarity_id:common",
	Uncommon = "rarity_id:uncommon",
	Epic = "rarity_id:epic",
	Rare = "rarity_id:rare",
	Legendary = "rarity_id:legendary",
}

export const enum ItemTier {
	Basic = "tier_id:basic",
	Advanced = "tier_id:advanced",
	Expert = "tier_id:expert",
	Master = "tier_id:master",
}

export const enum ItemKind {
	Weapon = "item_kind:weapon",
	Armor = "item_kind:armor",
	Spell = "item_kind:spell",
}

export const enum ItemId {
	// == Weapons ==
	// Physical Weapons
	BasicSword = "item_id:basic_sword",
	AdvancedSword = "item_id:advanced_sword",
	ExpertSword = "item_id:expert_sword",
	MasterSword = "item_id:master_sword",

	// Magic Weapons
	BasicWand = "item_id:basic_wand",
	AdvancedWand = "item_id:advanced_wand",
	ExpertWand = "item_id:expert_wand",
	MasterWand = "item_id:master_wand",

	// Shields
	BasicShield = "item_id:basic_shield",
	AdvancedShield = "item_id:advanced_shield",
	ExpertShield = "item_id:expert_shield",
	MasterShield = "item_id:master_shield",

	// == Armor ==
	// Physical Armor
	BasicPhysicalArmor = "item_id:basic_physical_armor",
	AdvancedPhysicalArmor = "item_id:advanced_physical_armor",
	ExpertPhysicalArmor = "item_id:expert_physical_armor",
	MasterPhysicalArmor = "item_id:master_physical_armor",

	// Magic Armor
	BasicMagicArmor = "item_id:basic_magic_armor",
	AdvancedMagicArmor = "item_id:advanced_magic_armor",
	ExpertMagicArmor = "item_id:expert_magic_armor",
	MasterMagicArmor = "item_id:master_magic_armor",

	// Tank Armor
	BasicTankArmor = "item_id:basic_tank_armor",
	AdvancedTankArmor = "item_id:advanced_tank_armor",
	ExpertTankArmor = "item_id:expert_tank_armor",
	MasterTankArmor = "item_id:master_tank_armor",

	// == Helmets ==
	// Physical Helmets
	BasicPhysicalHelmet = "item_id:basic_physical_helmet",
	AdvancedPhysicalHelmet = "item_id:advanced_physical_helmet",
	ExpertPhysicalHelmet = "item_id:expert_physical_helmet",
	MasterPhysicalHelmet = "item_id:master_physical_helmet",

	// Magic Helmets
	BasicMagicHelmet = "item_id:basic_magic_helmet",
	AdvancedMagicHelmet = "item_id:advanced_magic_helmet",
	ExpertMagicHelmet = "item_id:expert_magic_helmet",
	MasterMagicHelmet = "item_id:master_magic_helmet",

	// Tank Helmets
	BasicTankHelmet = "item_id:basic_tank_helmet",
	AdvancedTankHelmet = "item_id:advanced_tank_helmet",
	ExpertTankHelmet = "item_id:expert_tank_helmet",
	MasterTankHelmet = "item_id:master_tank_helmet",
	// == Spells ==
	// Physical Spells
	Fireball = "item_id:fireball",

	// Magic Spells
	Lightning = "item_id:lightning",

	// Tank Spells
	Heal = "item_id:heal",
}

export type ItemIdOfKind<K extends ItemKind> = {
	[I in keyof typeof itemDefinitions]: (typeof itemDefinitions)[I] extends ItemDefinition<I, K> ? I : never;
}[ItemId];

export type WeaponItemId = ItemIdOfKind<ItemKind.Weapon>;
export type ArmorItemId = ItemIdOfKind<ItemKind.Armor>;
export type SpellItemId = ItemIdOfKind<ItemKind.Spell>;

export interface ItemWeaponUnique {
	kind: ItemKind.Weapon;
	owner: number;

	scaleMultiplier: number;
	calculatedDamage: number;

	upgrades: number;

	rarity: ItemRarity;
	locked: boolean;
}

export interface ItemArmorUnique {
	kind: ItemKind.Armor;
	owner: number;

	scaleMultiplier: number;
	calculatedDefense: number;

	upgrades: number;

	rarity: ItemRarity;
	locked: boolean;
}

export interface ItemSpellUnique {
	kind: ItemKind.Spell;
	owner: number;

	scaleMultiplier: number;
	calculatedDamage: number;

	rarity: ItemRarity;
	locked: boolean;
}

export type ItemUnique<T extends ItemKind = ItemKind> = {
	[ItemKind.Weapon]: ItemWeaponUnique;
	[ItemKind.Armor]: ItemArmorUnique;
	[ItemKind.Spell]: ItemSpellUnique;
}[T];

export interface Item {
	id: ItemId;
	uuid: UUID;
	unique: ItemUnique;
}

export const isItemRarity = Flamework.createGuard<ItemRarity>();
export const isItemWeaponUnique = Flamework.createGuard<ItemWeaponUnique>();
export const isItemArmorUnique = Flamework.createGuard<ItemArmorUnique>();
export const isItemSpellUnique = Flamework.createGuard<ItemSpellUnique>();

export const isItemClass = Flamework.createGuard<ItemKind>();
export const isItemId = Flamework.createGuard<ItemId>();

export const isItem: t.check<Item> = t.strictInterface({
	id: isItemId,
	uuid: isUUID,
	unique: t.union(isItemWeaponUnique, isItemArmorUnique, isItemSpellUnique),
});
