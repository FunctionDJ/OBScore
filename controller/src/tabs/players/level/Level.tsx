import React, {Fragment} from "react"

import "./Level.scss"

import Bracket from "./Bracket"
import Round from "./Round"
import Number from "./Number"

import {useStore} from "laco-react"
import Store from "../../../store"
import Custom from "./Custom"
import { CSSTransition } from "react-transition-group"
import "./LevelComponentAnimations.scss"

export default function Level() {
  const state = useStore(Store)

  // TODO export brackets, use them hese for comparison instead of direct strings

  const level = state.level

  const isGrandFinals = level.bracket === "grand-finals"
  const isCustom = level.bracket === "custom"
  const isMidRound = level.round === "midRound"

  const showRound = !isGrandFinals && !isCustom
  const showNumber = (isGrandFinals || isMidRound) && !isCustom

  return (
    <Fragment>
      <Bracket/>
      <CSSTransition in={showRound} timeout={200} classNames="round-animation">
        <Round/>
      </CSSTransition>
      <CSSTransition in={showNumber} timeout={200} classNames="number-animation">
        <Number/>
      </CSSTransition>
      <CSSTransition in={isCustom} timeout={200} classNames="custom-animation">
        <Custom style={{
          width: 150,
          height: "auto"
        }}/>
      </CSSTransition>
    </Fragment>
  )
}