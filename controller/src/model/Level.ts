import {sprintf} from "sprintf-js"
import {class as Bracket} from "./Bracket"
import Round from "./Round"

export default class Level {
  bracket: Bracket
  round: Round
  template: string
  custom?: string
  number = 1

  toString() {
    try {
      return sprintf(this.template, {
        bracket: this.bracket,
        round: this.round
      })
    } catch (error) {
      return "Invalid template"
    }
  }
}