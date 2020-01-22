import Player from "./Player"
import Commentator from "./Commentator"
import Level from "./Level"

export default class Scoreboard {
  players: Player[]
  commentators: Commentator[]
  level: Level
  bestOf: number
}