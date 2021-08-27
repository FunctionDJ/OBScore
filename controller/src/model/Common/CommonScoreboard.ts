import Commentator from "../Commentator";
import Player from "../Player";
import LevelExport from "../Export/LevelExport";
import Level from "../Level";
import { class as Set } from "../Set";
import SetExport from "../Export/SetExport";

interface CommonScoreboard {
  title: string
  bracketURL: string
  players: Player[]
  commentators: Commentator[]
  level: LevelExport|Level
  set: SetExport|Set
}

export default CommonScoreboard;