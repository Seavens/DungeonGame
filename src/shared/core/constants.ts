import { RunService } from "@rbxts/services";

export const IS_STUDIO = RunService.IsStudio();

export const COLLECTION_NAME = IS_STUDIO ? "Data-Mock|#1" : "Data|#1";
export const COLLECTION_KEY = "Player|#";

export const IS_MOCK_DATA = true;
export const CLEAR_MOCK_DATA = true;
