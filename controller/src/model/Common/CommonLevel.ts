import {class as Bracket} from "../Bracket"
import {class as Round} from "../Round"

export default abstract class CommonLevel {
  bracket: Bracket
  round: Round

  // @TODO use protected getter / setter to restrict
  // write access in some child classes

  constructor(
    bracket: Bracket,
    round: Round,
  ) {
    this.bracket = bracket
    this.round = round
  }
}