import { DataStoreService } from "@rbxts/services";
import { COLLECTION_NAME, COLLECTION_KEY } from "shared/core/constants";

const store = DataStoreService.GetDataStore(COLLECTION_NAME);

export async function attemptDataWipe(player: Player): Promise<void> {
	const user = player.Name;
	const id = player.UserId;
	const key = `${COLLECTION_KEY}${id}`;
	const [success] = pcall((): LuaTuple<[unknown, DataStoreKeyInfo | undefined]> => store.RemoveAsync(key));
	if (success) {
		warn(`Wiped ${user}'s data.`);
		return;
	}
	warn(`Failed to wipe ${user}'s data.`);
}
