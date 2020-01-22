import {Store} from "laco"
import Scoreboard from "./model/Scoreboard"

const PlayerStore = new Store(new Scoreboard())

// PlayerStore.reset = () =>
  // PlayerStore.set(() => JSON.parse(emptySerialized))

export default PlayerStore
