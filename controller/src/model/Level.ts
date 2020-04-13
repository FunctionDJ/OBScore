import Brackets, {class as Bracket} from "./Bracket"
import Rounds, {class as Round} from "./Round"
import CommonLevel from "./Common/CommonLevel"

export default class Level extends CommonLevel {
  bracket: Bracket
  round: Round
  template: string
  custom?: string
  number = 1

  public static isGrandFinals(level: Level) {
    return level.bracket === Brackets.grandFinals
  }

  public static isCustom(level: Level) {
    return level.bracket === Brackets.custom
  }

  public static isMidRound(level: Level) {
    return level.round === Rounds.midRound
  }

  public static shouldShowRound(level: Level) {
    return !this.isGrandFinals(level) && !this.isCustom(level)
  }

  public static shouldShowNumber(level: Level) {
    return (this.isGrandFinals(level) || this.isMidRound(level)) && !this.isCustom(level)
  }
}