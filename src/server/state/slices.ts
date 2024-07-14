import { dataSlice } from "server/players";

export type ServerSlices = typeof serverSlices;

export const serverSlices = {
	data: dataSlice,
} as const;
