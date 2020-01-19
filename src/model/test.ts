const sprintf = require("sprintf-js").sprintf

enum Bracket {
  pools = "Pools",
  winners = "Winners"
}

class Level {
  static bracket: Bracket
  static template: string = ""

  static toString() {
    try {
      return sprintf(this.template, {
        bracket: this.bracket,
      })
    } catch (e) {
      return "Invalid template"
    }
  }
}

Level.bracket = Bracket.pools

console.log(""+Level)