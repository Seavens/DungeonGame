import { t } from "@rbxts/t";
import { EquippedInventory, isEquippedInventory } from "shared/inventory";
import { isItem, Item } from "shared/items/types";

export interface DailiesData {
	lastCollected: number;
	currentStreak: number;
	cumulativeCollected: number;
}

export interface InventoryData {
	equipped: EquippedInventory;
	stored: Array<Item>;
}

export interface ProfileData {
	coins: number;
	gems: number;
	dailies: DailiesData;
}

export interface Data {
	profile: ProfileData;
	inventory: InventoryData;
}

export const isDailiesData: t.check<DailiesData> = t.strictInterface({
	lastCollected: t.number,
	currentStreak: t.number,
	cumulativeCollected: t.number,
});

export const isInventoryData: t.check<InventoryData> = t.strictInterface({
	equipped: isEquippedInventory,
	stored: t.array(isItem),
});

export const isProfileData: t.check<ProfileData> = t.strictInterface({
	coins: t.number,
	gems: t.number,
	dailies: isDailiesData,
});

export const isData: t.check<Data> = t.strictInterface({
	profile: isProfileData,
	inventory: isInventoryData,
});
