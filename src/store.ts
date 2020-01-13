import {Store} from "laco"

const init = {
  players: [
    {sponsor: "NVIDIA", name: "Spieler 1", character: "Mario"},
    {sponsor: "MLG", name: "Spieler 2", character: "Luigi"}
  ],
  meta: {
    commentators: ["Commentator 1", "Commentator 2"],
    level: {
      bracket: "winners",
      round: "midRound",
      number: 0
    }
  }
}

const emptyState = {
  players: [
    {sponsor: "", name: "", character: "No Character"},
    {sponsor: "", name: "", character: "No Character"}
  ],
  meta: {
    commentators: ["", ""],
    level: {
      bracket: "",
      round: "",
      number: 0
    }
  }
}

const emptySerialized = JSON.stringify(emptyState)

const PlayerStore = new Store(init)

PlayerStore.reset = () => PlayerStore.set(() => JSON.parse(emptySerialized))

export default PlayerStore
