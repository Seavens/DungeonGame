import { Networking } from "@flamework/networking";
import { BroadcastAction } from "@rbxts/reflex";

interface ClientToServerEvents {
	state: {
		ready(): void;
	};
}

interface ServerToClientEvents {
	state: {
		dispatch(actions: Array<BroadcastAction>): void;
		hydrate(state: defined): void;
	};
	data: {
		loaded(): void;
	};
}

interface ClientToServerFunctions {}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
