import { createContext } from "react";
import { Scoreboard } from "../backend/schemas/scoreboardSchema";
import { useContext } from "react";

export const scoreboardClientContext = createContext<Scoreboard | null>(null);

export const useScoreboard = () => {
	const value = useContext(scoreboardClientContext);

	if (value === null) {
		throw new Error("useScoreboard must be used within a ScoreboardProvider");
	}

	return value;
};
