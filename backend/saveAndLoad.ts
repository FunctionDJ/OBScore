import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { scoreboardSchema, type Scoreboard } from "./schemas/scoreboardSchema";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const saveFile = path.resolve(dirname, "obscore-save.json");

export const loadSave = async () => {
	const jsonString = await fs.readFile(saveFile, {
		encoding: "utf-8",
	});

	return scoreboardSchema.parse(JSON.parse(jsonString));
};

export const writeSave = async (scoreboard: Scoreboard) => {
	const jsonString = JSON.stringify(scoreboard, null, 2);
	await fs.writeFile(saveFile, jsonString);
};
