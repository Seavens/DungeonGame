import { RunService } from "@rbxts/services";

export const IS_STUDIO = RunService.IsStudio();

export const STORE_NAME = IS_STUDIO ? "Data-Mock|#1" : "Data|#1";
export const STORE_KEY = "Player|#";
