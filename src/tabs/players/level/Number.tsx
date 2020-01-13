import React, {Fragment} from "react"

import {useStore} from "laco-react"
import Store from "../../../store"

import NumberController from "../../../elements/NumberController"

export default function Number() {
  const state = useStore(Store)

  const changeNumber = (number: number) => {
    Store.set(state => {
      state.meta.level.number = number
      return state
    })
  }

  return (
    <Fragment>
      <NumberController
        value={parseInt(state.meta.level.number, 10)}
        min={0}
        max={5}
        onChange={changeNumber}
      />
      {
        /*
      <FormControl
        type="Number"
        value={state.meta.level.number}
        onChange={changeNumber}
        style={{
          minWidth: 200,
          textAlign: "center"
        }}
      />
        */
      }
    </Fragment>
  )
}