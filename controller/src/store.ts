import {Store} from "laco"
import Scoreboard from "./model/Scoreboard"
import Player from "./model/Player"
import Level from "./model/Level"

const scoreboard = new Scoreboard()

const player1 = new Player("blub")
player1.score = 0

const player2 = new Player("bla")
player2.score = 0

scoreboard.players = [
  player1,
  player2
]

scoreboard.level = new Level()

scoreboard.bestOf = 3

const PlayerStore = new Store(scoreboard)

// PlayerStore.reset = () =>
  // PlayerStore.set(() => JSON.parse(emptySerialized))

export default PlayerStore
