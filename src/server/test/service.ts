import { Service } from "@flamework/core";
import { OnPlayerAdded } from "server/players";
import { store } from "server/state/store";
import { Item } from "shared/items/types";
import { ItemUtility } from "shared/items/utility";

@Service({})
export class TestService implements OnPlayerAdded {
	onPlayerAdded(player: Player) {
		warn("Test service started!");

		const user = player.Name;
		const items: Array<Item> = [];

		for (const i of $range(1, 10)) {
			const item = ItemUtility.generateItem(1);
			items.push(item);
		}
		warn(store.addItems({ items }, { user: user, replicate: false }));
		warn(store.getState().data.inventory);
	}
}
