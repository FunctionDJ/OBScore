import Attendee from "./Attendee"
import Character from "./Characters"
import Side from "./Side"

export default class Player extends Attendee {
  constructor(
    name: string,
    public character?: Character,
    public side?: Side,
    public score = 0,
    sponsor?: string,
    twitter?: string,
    twitch?: string
  ) {
    super(
      name,
      sponsor,
      twitter,
      twitch
    )
  }
}