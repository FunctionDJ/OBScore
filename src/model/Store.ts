import Player from "./Player"
import Commentator from "./Commentator"
import Level from "./Level"

export default class Scoreboard {
  static players = [
    new Player(
      "blub"
    ),
    new Player(
      "hi dude"
    )
  ]

  static commentators: Commentator[]
  static level = Level
  static bestOf = 3
}