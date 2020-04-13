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
import Level from "../../../model/Level"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Scoreboard from "../../../model/Scoreboard"

export default function LevelComponent() {

  const Scoreboard: Scoreboard = useStore(Store)

  const {level} = Scoreboard

  return (
    <Fragment>
      <BracketComponent/>
      <CSSTransition in={Level.shouldShowRound(level)} timeout={200} classNames="round-animation">
        <RoundComponent/>
      </CSSTransition>
      <CSSTransition in={Level.shouldShowNumber(level)} timeout={200} classNames="number-animation">
        <Number/>
      </CSSTransition>
      <CSSTransition in={Level.isCustom(level)} timeout={200} classNames="custom-animation">
        <Custom className="custom-animation-exit-done" style={{
          width: 150,
          height: "auto"
        }}/>
      </CSSTransition>
    </Fragment>
  )
}