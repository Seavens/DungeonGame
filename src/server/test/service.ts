import { Service, OnStart } from "@flamework/core";

@Service({})
export class TestService implements OnStart {
	onStart() {}

	// == Test Items ==
	// task.wait(2);
	// for (const player of Players.GetPlayers()) {
	// 	const store = ProfileService.GetProfileStore(STORE_NAME, DATA_TEMPLATE);
	// 	const profile = store.LoadProfileAsync(STORE_KEY + player.UserId);
	// 	if (!profile) return;
	// 	const helmet = ItemUtility.generateItem(player.UserId, ItemKind.Armor, ItemId.BasicMagicHelmet);
	// 	const armor = ItemUtility.generateItem(player.UserId, ItemKind.Armor, ItemId.BasicMagicArmor);
	// 	const weapon = ItemUtility.generateItem(player.UserId, ItemKind.Weapon, ItemId.BasicWand);
	// 	const spellA = ItemUtility.generateItem(player.UserId, ItemKind.Spell, ItemId.Fireball);
	// 	const spellB = ItemUtility.generateItem(player.UserId, ItemKind.Spell, ItemId.Heal);
	// 	profile.Data.inventory.equipped.helmet = helmet;
	// 	profile.Data.inventory.equipped.armor = armor;
	// 	profile.Data.inventory.equipped.weapon = weapon;
	// 	profile.Data.inventory.equipped.spellA = spellA;
	// 	profile.Data.inventory.equipped.spellB = spellB;
	// 	for (let i = 0; i < 10; i++) {
	// 		const item = ItemUtility.generateItem(player.UserId);
	// 		profile.Data.inventory.stored.push(item);
	// 	}
	// }

	// == Test Tiers ==
	// for (let i = 0; i < 100; i++) {
	// 	const item = ItemUtility.generateItem(1);
	// 	const itemDef = itemDefinitions[item.id];
	// 	if (itemDef.kind.tier === ItemTier.Master) {
	// 		warn("Master tier item generated");
	// 		warn(item);
	// 	}
	// 	if (itemDef.kind.tier === ItemTier.Expert) {
	// 		warn("Expert tier item generated");
	// 		warn(item);
	// 	}
	// }

	// == Test Rarities ==
	// for (let i = 0; i < 10000; i++) {
	// 	// const item = ItemUtility.generateItem(1);
	// 	// const itemDef = itemDefinitions[item.id];
	// 	// if (item.unique.scaleMultiplier >= 0.95) {
	// 	// 	warn("High scale multiplier item generated");
	// 	// 	print(item.unique.rarity);
	// 	// 	if (itemDef.kind.tier === ItemTier.Master) {
	// 	// 		warn(item);
	// 	// 	}
	// 	// }
	// 	// if (itemDef.kind.tier === ItemTier.Master) {
	// 	// 	warn("Master tier item generated");
	// 	// 	print(item);
	// 	// }
	// }
}
