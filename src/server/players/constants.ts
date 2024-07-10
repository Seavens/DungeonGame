import { Data } from "./types";

export const DATA_TEMPLATE: Data = {
	profile: {
		coins: 1000,
		gems: 100,
		dailies: {
			lastCollected: 0,
			currentStreak: 0,
			cumulativeCollected: 0,
		},
	},
	inventory: {
		equipped: {
			helmet: undefined,
			armor: undefined,
			weapon: undefined,
			spellA: undefined,
			spellB: undefined,
		},
		stored: [],
	},
};
