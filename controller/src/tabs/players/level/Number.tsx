import React, {Fragment} from "react"

import {useStore} from "laco-react"
import Store from "../../../store"

import NumberController from "../../../elements/NumberController"

export default function Number() {
  const state = useStore(Store)

  const changeNumber = (number: number) => {
    Store.set(state => {
      state.level.number = number
      return state
    })
  }

  return (
    <Fragment>
      <NumberController
        defaultValue={1}
        value={parseInt(state.level.number, 10)}
        min={1}
        max={9}
        onChange={changeNumber}
      />
      {
        /*
      <FormControl
        type="Number"
        value={state.level.number}
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