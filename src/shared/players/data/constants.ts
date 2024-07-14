import { Data } from "./types";

export const DEFAULT_DATA: Data = {
	profile: {
		coins: 100,
		gems: 10,
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
			spells: [undefined, undefined],
		},
		stored: new Map(),
	},
};
