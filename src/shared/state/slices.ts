import type { CombineStates } from "@rbxts/reflex";

export type SharedSlices = typeof sharedSlices;
export type SharedState = CombineStates<SharedSlices>;

export const sharedSlices = {} as const;
