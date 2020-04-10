"use strict"

/* This example is deliberately using less ES6 features to make it easier for novices to understand */

// Import OBScore
// This is using ES-Modules, but you can also use a <script> tag
import OBScoreClient from "../OBScoreClient"

// Just a collection of the elements in the HTML, nothing special
const elements = {
  players: [
    document.getElementById("player-0"),
    document.getElementById("player-1")
  ],
  level: document.getElementById("level")
}

// My custom update function
function updateElement(element, newValue) {
  const oldValue = element.innerText

  // If the text is the same, do nothing and return early
  if (oldValue === newValue) {
    return
  }

  // Return when fadeIn is done
  OBScoreClient.fadeInOut(element, function() {
    // This callback is run while the element is invisible
    element.innerText = newValue
  })
}

// When the HTML has loaded
document.addEventListener("DOMContentLoaded", function() {
  // Create new OBScoreClient instance, name it "something" (name is shown in host console)
  const obscoreClient = new OBScoreClient("something", function(data) {
    // This function is called when we receive data from the host
    // The data has the type of Scoreboard class, but is just a simple JSON object

    // Let's loop over both players
    for (const playerIndex in data.players) {
      // Get the player object from the data
      const player = data.players[playerIndex]

      // Update the element with the new data
      // We can use OBScore's stringify functions for a default conversion to make it easy...
      updateElement(elements.players[playerIndex], OBScoreClient.stringifyPlayer(player))
    }

    // ...but we can also make our own format!
    let newLevelText = ""

    if (data.level.bracket.code == "grandFinals") {
      newLevelText = "Fin de partie"
    } else {
      newLevelText = data.level.bracket.long + " " + data.level.round.long // E.g. Losers Quarters
    }

    updateElement(elements.level, newLevelText)
  })

  // Connect to the host!
  obscoreClient.connect("ws://localhost:3001")
})
