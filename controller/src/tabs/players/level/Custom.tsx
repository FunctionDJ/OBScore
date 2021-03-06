import React from "react"
import { FormControl } from "react-bootstrap"

import {useStore} from "laco-react"
import Store from "../../../store"
import Scoreboard from "../../../model/Scoreboard"

export default function Custom({
  style, className
}: {
  style: any, className?: string
}) {
  const state: Scoreboard = useStore(Store)

  const changeCustom = ({target}) => {
    Store.set((state: Scoreboard) => {
      state.level.custom = target.value
      return state
    })
  }

  return (
    <FormControl
      className={className ?? ""}
      value={state.level.custom}
      onChange={changeCustom}
      //size="sm"
      style={style}
      as="textarea"
    />
  )
}