import OBS from "../OBScore"

const obs = new OBS("something", data => {
  console.log(data)
})

obs.connect("ws://localhost:3001")
