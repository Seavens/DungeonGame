import { ItemId } from "shared/items/types";
import { advancedPhysicalArmor, basicPhysicalArmor, expertPhysicalArmor, masterPhysicalArmor } from "./body/physical";
import { advancedMagicArmor, basicMagicArmor, expertMagicArmor, masterMagicArmor } from "./body/magic";
import { basicTankArmor, advancedTankArmor, expertTankArmor, masterTankArmor } from "./body/tank";
import { advancedMagicHelmet, basicMagicHelmet, expertMagicHelmet, masterMagicHelmet } from "./head/magic";
import {
	advancedPhysicalHelmet,
	basicPhysicalHelmet,
	expertPhysicalHelmet,
	masterPhysicalHelmet,
} from "./head/physical";
import { advancedTankHelmet, basicTankHelmet, expertTankHelmet, masterTankHelmet } from "./head/tank";

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
