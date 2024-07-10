import { ItemId } from "shared/items/types";
import { advancedShield, basicShield, expertShield, masterShield } from "./shield";
import { advancedSword, basicSword, expertSword, masterSword } from "./physical";
import { advancedWand, basicWand, expertWand, masterWand } from "./magic";

export const weapons = {
	// Physical
	[ItemId.BasicSword]: basicSword,
	[ItemId.AdvancedSword]: advancedSword,
	[ItemId.ExpertSword]: expertSword,
	[ItemId.MasterSword]: masterSword,

	// Magic
	[ItemId.BasicWand]: basicWand,
	[ItemId.AdvancedWand]: advancedWand,
	[ItemId.ExpertWand]: expertWand,
	[ItemId.MasterWand]: masterWand,

	// Shield
	[ItemId.BasicShield]: basicShield,
	[ItemId.AdvancedShield]: advancedShield,
	[ItemId.ExpertShield]: expertShield,
	[ItemId.MasterShield]: masterShield,
};
