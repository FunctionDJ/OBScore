import {sprintf} from "sprintf-js"

enum Bracket {
  pools,
  winners,
  losers,
  grandFinals,
  roundRobin,
  custom
}

enum Round {
  midRound,
  quarters,
  semis,
  finals
}

export default class Level {
  bracket: Bracket
  round: Round
  template: string

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