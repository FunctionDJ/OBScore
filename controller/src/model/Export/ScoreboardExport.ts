import Player from "../Player";
import Commentator from "../Commentator";
import LevelExport from "./LevelExport";
import CommonScoreboard from "../Common/CommonScoreboard";
import SetExport from "./SetExport";

export default class ScoreboardExport implements CommonScoreboard {
  players: Player[]
  commentators: Commentator[]
  level: LevelExport
  set: SetExport

  constructor (
    players: Player[],
    commentators: Commentator[],
    level: LevelExport,
    set: SetExport,
    public title: string,
    public bracketURL: string
  ) {
    this.players = players;
    this.commentators = commentators;
    this.level = level;
    this.set = set;
  }
}