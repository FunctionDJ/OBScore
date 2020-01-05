import React from "react"
import { FormControl } from "react-bootstrap"

import {useStore} from "laco-react"
import Store from "../../../store"

export default function Custom({style}: {style: any}) {
  const state = useStore(Store)

  const changeCustom = ({target}) => {
    Store.set(state => {
      state.meta.level.custom = target.value
      return state
    })
  }

  return (
    <FormControl
      value={state.meta.level.custom}
      onChange={changeCustom}
      //size="sm"
      style={style}
    />
  )
}