import Player from "./Player"
import Commentator from "./Commentator"
import Level from "./Level"
import {class as Set} from "./Set"

export default class Scoreboard {
  players: Player[]
  commentators: Commentator[]
  level: Level
  set: Set
  customSet?: string
}