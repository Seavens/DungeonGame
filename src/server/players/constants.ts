import { Data } from "./types";

export const DEFAULT_DATA: Data = {
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
