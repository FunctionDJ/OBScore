import Commentator from "../Commentator"
import Player from "../Player"
import LevelExport from "../Export/LevelExport"
import Level from "../Level"
import {class as Set} from "../Set"
import SetExport from "../Export/SetExport"

export default interface CommonScoreboard {
  players: Player[]
  commentators: Commentator[]
  level: LevelExport|Level
  set: SetExport|Set
}