import type { InferActions, InferState } from "@rbxts/reflex";
import { combineProducers } from "@rbxts/reflex";
import type { SharedSlices } from "shared/state/slices";
import { sharedSlices } from "shared/state/slices";
import { broadcastMiddleware } from "./replication";
import type { ServerSlices } from "./slices";
import { serverSlices } from "./slices";
import { DataState } from "server/players";

export type ServerStore = typeof store;
export type ServerState = InferState<ServerStore>;
export type ServerActions = InferActions<ServerStore>;
export type ServerPlayerState = {
	[K in keyof DataState]: DataState[K] extends { [user: string]: infer S } ? S : never;
};

const slices: SharedSlices & ServerSlices = {
	...sharedSlices,
	...serverSlices,
};

export const store = combineProducers(slices).applyMiddleware(broadcastMiddleware(slices, serverSlices));
