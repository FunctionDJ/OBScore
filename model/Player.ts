import Attendee from "./Attendee"
import Character from "./Characters"

export default class Player extends Attendee {
  constructor(
    name: string,
    public character?: Character,
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