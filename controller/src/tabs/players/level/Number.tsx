import React, {Fragment} from "react"

import {useStore} from "laco-react"
import Store from "../../../store"

import NumberController from "../../../elements/NumberController"
import Scoreboard from "../../../model/Scoreboard"

export default function Number() {
  const scoreboard: Scoreboard = useStore(Store)

  const changeNumber = (number: number) => {
    Store.set((state: Scoreboard) => {
      state.level.number = number
      return state
    })
  }

  return (
    <Fragment>
      <NumberController
        defaultValue={1}
        value={scoreboard.level.number}
        min={1}
        max={9}
        onChange={changeNumber}
      />
    </Fragment>
  )
}