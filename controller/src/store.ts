import {Store} from "laco"

const init = {
  players: [
    {
      sponsor: "NVIDIA",
      name: "Spieler 1",
      character: "Mario",
      score: 0,
      side: "winners"
    },
    {
      sponsor: "MLG",
      name: "Spieler 2",
      character: "Luigi",
      score: 0,
      side: "losers"
    }
  ],
  commentators: [
    {
      sponsor: "",
      name: "",
      twitter: "",
      twitch: ""
    },
    {
      sponsor: "",
      name: "",
      twitter: "",
      twitch: ""
    }
  ],
  level: {
    bracket: "winners",
    round: "midRound",
    number: 1
  },
  bestOf: 3
}

const emptyState = {
  players: [
    {
      sponsor: "",
      name: "",
      character: "No Character",
      score: 0,
      side: ""
    },
    {
      sponsor: "",
      name: "",
      character: "No Character",
      score: 0,
      side: ""
    }
  ],
  commentators: [
    {
      sponsor: "",
      name: "",
      twitter: "",
      twitch: ""
    },
    {
      sponsor: "",
      name: "",
      twitter: "",
      twitch: ""
    }
  ],
  level: {
    bracket: "",
    round: "",
    number: 0
  },
  bestOf: 3
}

const emptySerialized = JSON.stringify(emptyState)

const PlayerStore = new Store(init)

PlayerStore.reset = () =>
  PlayerStore.set(() => JSON.parse(emptySerialized))

export default PlayerStore
