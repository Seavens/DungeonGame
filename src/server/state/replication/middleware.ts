import type { BroadcastAction, ProducerMiddleware } from "@rbxts/reflex";
import { createBroadcaster } from "@rbxts/reflex";
import { Events } from "server/network";
import type { ServerSlices } from "server/state/slices";
import type { BroadcastMetadata, ReplicationMetadata, UserMetadata } from "shared/state/replication";
import { isBroadcastMetadata, isUserMetadata } from "shared/state/replication";
import type { SharedSlices } from "shared/state/slices";
import type { ServerState } from "../store";
import { selectStateByUser } from "./selectors";

type AnyMetadata = Partial<UserMetadata> & Partial<BroadcastMetadata> & Partial<ReplicationMetadata>;

function getMetadata(args: Array<unknown>): AnyMetadata | undefined {
	for (const arg of args) {
		if (isUserMetadata(arg) || isBroadcastMetadata(arg)) {
			return arg;
		}
	}
	return undefined;
}

function getActions(producers: ServerSlices): Set<string> {
	const filtered = new Set<string>();
	for (const [, producer] of pairs(producers)) {
		const actions = producer.getActions();
		for (const [name] of pairs(actions)) {
			filtered.add(name as string);
		}
	}
	return filtered;
}

export function broadcastMiddleware(slices: ServerSlices & SharedSlices, filtered: ServerSlices): ProducerMiddleware {
	const actions = getActions(filtered);
	const broadcaster = createBroadcaster({
		producers: slices,
		beforeDispatch: (player: Player, action: BroadcastAction): BroadcastAction | undefined => {
			const { name, arguments: args } = action;
			if (!actions.has(name)) {
				return action;
			}
			const metadata = getMetadata(args);
			if (metadata === undefined) {
				return action;
			}
			const { user, replicate, broadcast } = metadata;
			if (replicate !== undefined && !replicate) {
				return undefined;
			}
			if (broadcast !== undefined && broadcast) {
				return action;
			}
			if (user === player.Name) {
				return action;
			}
			return undefined;
		},
		beforeHydrate: (player: Player, state: ServerState): Partial<ServerState> => {
			const user = player.Name;
			const selector = selectStateByUser(user);
			const selected = selector(state);
			const hydration: Writable<Partial<ServerState>> = {
				...state,
				...selected,
			};
			hydration.data = undefined;
			return hydration;
		},
		dispatch: (player: Player, actions: Array<BroadcastAction>): void => {
			Events.state.dispatch(player, actions);
		},
		hydrate: (player: Player, state: ServerState): void => {
			Events.state.hydrate(player, state);
		},
	});
	Events.state.ready.connect((player: Player): void => {
		broadcaster.start(player);
	});
	const { middleware } = broadcaster;
	return middleware;
}
