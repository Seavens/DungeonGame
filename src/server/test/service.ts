import { Service, OnStart } from "@flamework/core";

@Service({})
export class TestService implements OnStart {
	onStart() {
		warn("Test service started!");
	}
}
