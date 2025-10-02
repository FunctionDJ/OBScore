import { produce } from "immer";
import { createContext, Dispatch, SetStateAction, useContext } from "react";
import type { Scoreboard } from "../backend/schemas/scoreboardSchema";

export const createScoreboard = (): Scoreboard => ({
	state: "blank",
	players: [
		{
			tag: "Player 1",
			score: 0,
			sponsor: "",
			character: null,
			side: null,
		},
		{
			tag: "Player 2",
			score: 0,
			sponsor: "",
			character: null,
			side: null,
		},
	],
	commentators: [
		{ tag: "Commentator 1", sponsor: "" },
		{ tag: "Commentator 2", sponsor: "" },
	],
	level: {
		bracket: "Pools",
		custom: "",
		round: "Round",
		number: 1,
	},
	bracketURL: "",
	title: "",
	set: "BO3",
	setCustom: "",
});

export interface ScoreboardContextInt {
	scoreboard: Scoreboard;
	setScoreboard: Dispatch<SetStateAction<Scoreboard>>;
}

export const ScoreboardContext = createContext<ScoreboardContextInt | null>(
	null,
);

export const useScoreboard = () => {
	const value = useContext(ScoreboardContext);

	if (value === null) {
		throw new Error("useScoreboard must be used within a ScoreboardProvider");
	}

	const { scoreboard, setScoreboard: setInternal } = value;

	const setScoreboard = (draftFunction: Dispatch<Scoreboard>) => {
		const newState = produce(scoreboard, (draft) => {
			// any edit sets state to "dirty"
			draft.state = "dirty";
			draftFunction(draft);
		});

		setInternal(newState);
	};

	return {
		scoreboard,
		setScoreboard,
		/** returns callback for shorter onClick etc */
		setSBClick(draftFunction: Dispatch<Scoreboard>) {
			return () => setScoreboard(draftFunction);
		},
	};
};
