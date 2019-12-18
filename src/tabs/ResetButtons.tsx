import React, {Fragment} from "react"
import {Row, Col} from "react-bootstrap"
import FAButton from "../elements/FAButton"
import * as fa from "@fortawesome/free-solid-svg-icons"
import "./ResetButtons.scss"

import Store from "../store"

type QuadButtonProps = {
  className: string,
  children: any,
  callback: Function
}

const QuadButton = ({className, children, callback}: QuadButtonProps) => (
  <FAButton variant="dark" size="sm" block className={className} onClick={callback}>
    {fa.faLongArrowAltLeft}
    {children}
    {fa.faLongArrowAltRight}
  </FAButton>
)

export default function ResetButtons() {
  const switchNames = () => {
    Store.set(state => {
      for (const key in state.players) {
        const index = parseInt(key)

        if (index % 2 === 0)
          continue

        const currentName = state.players[key].name
        const otherName = state.players[index - 1].name

        state.players[index - 1].name = currentName
        state.players[key].name = otherName
      }

      return state
    })
  }

  const switchCharacters = () => {
    Store.set(state => {
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
    Store.set(state => {
      for (const key in state.players) {
        const index = parseInt(key)

        if (index % 2 === 0)
          continue

        const currentPlayer = state.players[key]
        const otherPlayer = state.players[index - 1]

        state.players[index - 1] = currentPlayer
        state.players[key] = otherPlayer
      }

      return state
    })
  }

  const reset = () => {
    Store.reset()
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
          <FAButton variant="dark" size="sm" block className="bottom-right" onClick={reset}>
            {fa.faUndo}
            Reset
          </FAButton>
        </Col>
      </Row>
    </Fragment>
  )
}
