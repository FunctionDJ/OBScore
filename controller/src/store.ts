import {Store} from "laco"
import Scoreboard from "./model/Scoreboard"
import Player from "./model/Player"
import Level from "./model/Level"
import Commentator from "./model/Commentator"
import SetTypes from "./model/Set"

import Brackets from "./model/Bracket"
import Rounds from "./model/Round"

const scoreboard = new Scoreboard()

const player1 = new Player("Player 1")
player1.score = 0

const player2 = new Player("Player 2")
player2.score = 0

scoreboard.players = [
  player1,
  player2
]

const commentator1 = new Commentator("Commentator 1")
const commentator2 = new Commentator("Commentator 2")

scoreboard.commentators = [
  commentator1,
  commentator2
]

scoreboard.level = new Level(
  Brackets.pools,
  Rounds.midRound
)

scoreboard.set = SetTypes.bo3

const PlayerStore = new Store(scoreboard)

// PlayerStore.reset = () =>
  // PlayerStore.set(() => JSON.parse(emptySerialized))

export default PlayerStore
