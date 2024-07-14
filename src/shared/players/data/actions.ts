import type { ReplicationMetadata, UserMetadata } from "shared/state/replication";
import type { Data } from "./types";

export type DataActions<S> = {
	addData: (state: S, payload: DataAdded, metadata: UserMetadata & ReplicationMetadata) => S;
	removeData: (state: S, payload: DataRemoved, metadata: UserMetadata & ReplicationMetadata) => S;
};

export interface DataAdded {
	data: Data;
}

export interface DataRemoved {}
