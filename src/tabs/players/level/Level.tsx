import React, {Fragment} from "react"

import "./Level.scss"

import Bracket from "./Bracket"
import Round from "./Round"
import Number from "./Number"

import {useStore} from "laco-react"
import Store from "../../../store"
import Custom from "./Custom"

export default function Level() {
  const state = useStore(Store)

  // TODO export brackets, use them hese for comparison instead of direct strings

  const level = state.meta.level

  const isGrandFinals = level.bracket === "grand-finals"
  const isCustom = level.bracket === "custom"
  const isMidRound = level.round === "midRound"

  const showRound = !isGrandFinals && !isCustom
  const showNumber = isGrandFinals || isMidRound && !isCustom

  return (
    <Fragment>
      <Bracket/>
      {showRound &&
        <Round/>
      }
      {showNumber &&
        <Number/>
      }
      {isCustom &&
        <Custom style={{
          width: 200,
          height: "auto"
        }}/>
      }
    </Fragment>
  )
}