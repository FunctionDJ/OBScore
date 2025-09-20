import RadioItem from "./RadioItem";

enum BracketType {
  pools,
  winners,
  losers,
  grandFinals,
  roundRobin,
  custom
}

class Bracket extends RadioItem<BracketType> {}

const Brackets = {
  pools: new Bracket("pools", "P", "Pools", BracketType.pools),
  winners: new Bracket("winners", "W", "Winners", BracketType.winners),
  losers: new Bracket("losers", "L", "Losers", BracketType.losers),
  grandFinals: new Bracket("grandFinals", "GF", "Grand-Finals", BracketType.grandFinals),
  roundRobin: new Bracket("roundRobin", "RR", "Round Robin", BracketType.roundRobin),
  custom: new Bracket("custom", "C", "Custom", BracketType.custom)
} as const;

export default Brackets;

export {
  BracketType as type,
  Bracket as class
};