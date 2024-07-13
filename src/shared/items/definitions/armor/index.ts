import { ItemId } from "shared/items/types";
import {
	basicPhysicalArmor,
	advancedPhysicalArmor,
	expertPhysicalArmor,
	masterPhysicalArmor,
	basicMagicArmor,
	advancedMagicArmor,
	expertMagicArmor,
	masterMagicArmor,
	basicTankArmor,
	advancedTankArmor,
	expertTankArmor,
	masterTankArmor,
} from "./body";
import {
	basicPhysicalHelmet,
	advancedPhysicalHelmet,
	expertPhysicalHelmet,
	masterPhysicalHelmet,
	basicMagicHelmet,
	advancedMagicHelmet,
	expertMagicHelmet,
	masterMagicHelmet,
	basicTankHelmet,
	advancedTankHelmet,
	expertTankHelmet,
	masterTankHelmet,
} from "./head";

export const armors = {
	// == Armor ==
	// Physical
	[ItemId.BasicPhysicalArmor]: basicPhysicalArmor,
	[ItemId.AdvancedPhysicalArmor]: advancedPhysicalArmor,
	[ItemId.ExpertPhysicalArmor]: expertPhysicalArmor,
	[ItemId.MasterPhysicalArmor]: masterPhysicalArmor,

	// Magic
	[ItemId.BasicMagicArmor]: basicMagicArmor,
	[ItemId.AdvancedMagicArmor]: advancedMagicArmor,
	[ItemId.ExpertMagicArmor]: expertMagicArmor,
	[ItemId.MasterMagicArmor]: masterMagicArmor,

	// == Tank ==
	[ItemId.BasicTankArmor]: basicTankArmor,
	[ItemId.AdvancedTankArmor]: advancedTankArmor,
	[ItemId.ExpertTankArmor]: expertTankArmor,
	[ItemId.MasterTankArmor]: masterTankArmor,

	// Helmets
	// Physical
	[ItemId.BasicPhysicalHelmet]: basicPhysicalHelmet,
	[ItemId.AdvancedPhysicalHelmet]: advancedPhysicalHelmet,
	[ItemId.ExpertPhysicalHelmet]: expertPhysicalHelmet,
	[ItemId.MasterPhysicalHelmet]: masterPhysicalHelmet,

	// Magic
	[ItemId.BasicMagicHelmet]: basicMagicHelmet,
	[ItemId.AdvancedMagicHelmet]: advancedMagicHelmet,
	[ItemId.ExpertMagicHelmet]: expertMagicHelmet,
	[ItemId.MasterMagicHelmet]: masterMagicHelmet,

	// Tank
	[ItemId.BasicTankHelmet]: basicTankHelmet,
	[ItemId.AdvancedTankHelmet]: advancedTankHelmet,
	[ItemId.ExpertTankHelmet]: expertTankHelmet,
	[ItemId.MasterTankHelmet]: masterTankHelmet,
};
