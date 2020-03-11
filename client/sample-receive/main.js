"use strict"

import OBS from "../OBScore"

const elements = {
  players: [
    document.getElementById("player-0"),
    document.getElementById("player-1")
  ],
  level: document.getElementById("level")
}

const updateElement = (element, text) => {
  if (element.innerText === text) {
    return
  }

  // element.
}

document.addEventListener("DOMContentLoaded", () => {
  const obs = new OBS("something", data => {

    for (const playerIndex in data.players) {
      const player = data.players[playerIndex]

      elements.players[playerIndex].innerText = OBS.stringifyPlayer(player)
    }

    elements.level.innerText = OBS.stringifyLevel(data.level)
  })

  obs.connect("ws://localhost:3001")
})

