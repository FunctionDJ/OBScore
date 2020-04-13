import React, {Fragment} from "react"
import {Row, Col} from "react-bootstrap"
import FAButton from "../../../elements/FAButton"
import * as fa from "@fortawesome/free-solid-svg-icons"
import "../../../elements/BorderRadius.scss"
import "./ResetButtons.scss"

import Store from "../../../store"
import Scoreboard from "../../../model/Scoreboard"
import Player from "../../../model/Player"
import Level from "../../../model/Level"
import Brackets from "../../../model/Bracket"
import Rounds from "../../../model/Round"

type QuadButtonProps = {
  className: string,
  children: any,
  callback: Function
}

const QuadButton = ({className, children, callback}: QuadButtonProps) => (
  <FAButton
    variant="dark"
    size="sm"
    block
    className={className}
    onClick={callback}
  >
    {fa.faLongArrowAltLeft}
    {children}
    {fa.faLongArrowAltRight}
  </FAButton>
)

export default function ResetButtons() {
  const switchNames = () => {
    Store.set((state: Scoreboard) => {
      for (const key in state.players) {
        const index = parseInt(key)

        if (index % 2 === 0)
          continue

        const currentName = state.players[key].tag
        const otherName = state.players[index - 1].tag

        state.players[index - 1].tag = currentName
        state.players[key].tag = otherName
      }

      return state
    })
  }

  const switchCharacters = () => {
    Store.set((state: Scoreboard) => {
      for (const key in state.players) {
        const index = parseInt(key)

        if (index % 2 === 0)
          continue

        const currentCharacter = state.players[key].character
        const otherCharacter = state.players[index - 1].character

        state.players[index - 1].character = currentCharacter
        state.players[key].character = otherCharacter
      }

      return state
    })
  }

  const switchAll = () => {
    Store.set((scoreboard: Scoreboard) => {
      for (const key in scoreboard.players) {
        const index = parseInt(key)

        if (index % 2 === 0)
          continue

        const currentPlayer = scoreboard.players[key]
        const otherPlayer = scoreboard.players[index - 1]

        scoreboard.players[index - 1] = currentPlayer
        scoreboard.players[key] = otherPlayer
      }

      return scoreboard
    })
  }

  const resetPlayersAndLevel = () => {
    Store.set((scoreboard: Scoreboard) => {
      scoreboard.players = [
        new Player(""),
        new Player("")
      ]

      scoreboard.level = new Level(
        Brackets.pools,
        Rounds.midRound
      )

      return scoreboard
    })
  }

  return (
    <Fragment>
      <Row className="no-gutters">
        <Col>
          <QuadButton className="top-left" callback={switchNames}>Name</QuadButton>
        </Col>
        <Col>
          <QuadButton className="top-right" callback={switchCharacters}>Char</QuadButton>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col>
          <QuadButton className="bottom-left" callback={switchAll}>All</QuadButton>
        </Col>
        <Col>
          {/*<QuadButton className="bottom-right" callback={reset}>Reset</QuadButton>*/}
          <FAButton variant="dark" size="sm" block className="bottom-right" onClick={resetPlayersAndLevel}>
            {fa.faUndo}
            Reset
          </FAButton>
        </Col>
      </Row>
    </Fragment>
  )
}
