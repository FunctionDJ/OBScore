export default class Attendee {
  constructor(
    public name: string,
    public sponsor?: string,
    public twitter?: string,
    public twitch?: string
  ) {}

  toString() {
    return (
      this.sponsor ? `[${this.sponsor}] ` : ""
      + this.name
    )
  }
}