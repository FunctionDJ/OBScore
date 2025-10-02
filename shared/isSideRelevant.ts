import type { Bracket } from "../backend/schemas/bracketSchema";
import type { Scoreboard } from "../backend/schemas/scoreboardSchema";

const bracketsWithSideShown: Bracket[] = [
	"Grand Finals",
	"Grand Finals Reset",
	"Custom",
];

export const isSideRelevant = (scoreboard: Scoreboard) =>
	bracketsWithSideShown.includes(scoreboard.level.bracket);
