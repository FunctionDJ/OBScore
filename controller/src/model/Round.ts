import RadioItem from "./RadioItem"

enum RoundType {
  midRound = "Round",
  quarters = "Quarters",
  semis = "Semis",
  finals = "Finals"
}

class Round extends RadioItem<RoundType> {}

const Rounds = {
  midRound: new Round("midRound", "R", "Round", RoundType.midRound),
  quarters: new Round("quarters", "Q", "Quarters", RoundType.quarters),
  semis: new Round("semis", "S", "Semis", RoundType.semis),
  finals: new Round("finals", "F", "Finals", RoundType.finals)
} as const

export default Rounds

export {
  RoundType as type,
  Round as class
}