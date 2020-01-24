import React, {Fragment} from "react"

import "./Level.scss"

import BracketComponent from "./BracketComponent"
import RoundComponent from "./RoundComponent"
import Number from "./Number"

import {useStore} from "laco-react"
import Store from "../../../store"
import Custom from "./Custom"
import { CSSTransition } from "react-transition-group"
import "./LevelComponentAnimations.scss"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Scoreboard from "../../../model/Scoreboard"
import Brackets from "../../../model/Bracket"
import Rounds from "../../../model/Round"

export default function Level() {

  const Scoreboard: Scoreboard = useStore(Store)

  const level = Scoreboard.level

  const isGrandFinals = level.bracket === Brackets.grandFinals
  const isCustom = level.bracket === Brackets.custom
  const isMidRound = level.round === Rounds.midRound

  const showRound = !isGrandFinals && !isCustom
  const showNumber = (isGrandFinals || isMidRound) && !isCustom

  return (
    <Fragment>
      <BracketComponent/>
      <CSSTransition in={showRound} timeout={200} classNames="round-animation">
        <RoundComponent/>
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