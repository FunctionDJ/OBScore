import {Store} from "laco"
import Scoreboard from "./model/Scoreboard"
import Player from "./model/Player"
import Level from "./model/Level"

const scoreboard = new Scoreboard()

scoreboard.players = [
  new Player(
    "blub"
  ),
  new Player(
    "hi dude"
  )
]

scoreboard.level = new Level()

scoreboard.bestOf = 3

const PlayerStore = new Store(scoreboard)

// PlayerStore.reset = () =>
  // PlayerStore.set(() => JSON.parse(emptySerialized))

export default PlayerStore
