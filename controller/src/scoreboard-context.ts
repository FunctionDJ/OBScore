import { createContext, Dispatch, SetStateAction, useContext } from "react";
import Brackets from "./model/Bracket";
import { createCommentator } from "./model/Commentator";
import { createLevel } from "./model/Level";
import { createPlayer } from "./model/Player";
import Rounds from "./model/Round";
import Scoreboard from "./model/Scoreboard";
import SetTypes from "./model/Set";

export const createScoreboard = (): Scoreboard => ({
  players: [
    createPlayer("Player 1"),
    createPlayer("Player 2")
  ],
  commentators: [
    createCommentator("Commentator 1"),
    createCommentator("Commentator 2")
  ],
  level: createLevel(Brackets.pools, Rounds.midRound),
  bracketURL: "",
  title: "",
  set: {
    code: "",
    long: "",
    short: "",
    type: SetTypes.bo3.type
  }
});

export interface ScoreboardContextInt {
  scoreboard: Scoreboard
  setScoreboard: Dispatch<SetStateAction<Scoreboard>>
}

export const ScoreboardContext = createContext<ScoreboardContextInt>({
  scoreboard: createScoreboard(),
  setScoreboard: createScoreboard
});

export const useScoreboard = (): [Scoreboard, Dispatch<SetStateAction<Scoreboard>>] => {
  const { scoreboard, setScoreboard } = useContext(ScoreboardContext);
  return [scoreboard, setScoreboard];
};