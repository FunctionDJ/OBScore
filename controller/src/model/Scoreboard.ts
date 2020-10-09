import Player from "./Player"
import Commentator from "./Commentator"
import Level from "./Level"
import SetTypes, {class as Set} from "./Set"
import CommonScoreboard from "./Common/CommonScoreboard"
import ScoreboardExport from "./Export/ScoreboardExport"
import LevelExport from "./Export/LevelExport"
import SetExport from "./Export/SetExport"

export default class Scoreboard implements CommonScoreboard {
  players: Player[]
  commentators: Commentator[]
  level: Level
  set: Set
  customSet?: string
  bracketURL = ""
  title = ""

  public static getExport(scoreboard: Scoreboard) {
    console.log(scoreboard)

    return new ScoreboardExport(
      scoreboard.players,
      scoreboard.commentators,
      this.getLevelExport(scoreboard),
      this.getSetExport(scoreboard),
      scoreboard.title,
      scoreboard.bracketURL
    )
  }

  private static getLevelExport(scoreboard: Scoreboard) {
    const levelExport = new LevelExport(
      scoreboard.level.bracket,
      scoreboard.level.round
    )

    levelExport.custom = scoreboard.level.custom

    if (Level.shouldShowNumber(scoreboard.level)) {
      levelExport.number = scoreboard.level.number
    }

    return levelExport
  }

  private static getSetExport(scoreboard: Scoreboard) {
    const setExport = new SetExport()

    if (scoreboard.set === SetTypes.custom) {
      setExport.isCustom = true
      setExport.text = scoreboard.customSet
    } else {
      setExport.text = scoreboard.set.long
    }

    return setExport
  }
}