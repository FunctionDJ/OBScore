import React, {Fragment} from "react"

import {ToggleButtonGroup, ToggleButton} from "react-bootstrap"
import "../../../elements/BorderRadius.scss"

import {useStore} from "laco-react"
import Store from "../../../store"

import BorderRadius from "../../../elements/BorderRadius"
import Scoreboard from "../../../model/Scoreboard"

import Brackets, {class as Bracket} from "../../../model/Bracket"

export default function BracketComponent() {
  const scoreboard: Scoreboard = useStore(Store)

  const changeBracket = ({target}) => {
    Store.set((state: Scoreboard) => {
      state.level.bracket = Brackets[target.value]
      return state
    })
  }

  type BracketToggleButtonProps = {
    bracket: Bracket
    className: string
  }

  const BracketToggleButton = ({bracket, className}: BracketToggleButtonProps) => (
    <td>
      <ToggleButton
        size="sm"
        value={bracket.code}
        checked={
          scoreboard.level.bracket ? scoreboard.level.bracket === bracket : false
        }
        onChange={changeBracket}
        name="bracket"
        className={className}
        type="radio" // important
      >
        {bracket.short}
      </ToggleButton>
    </td>
  )

  return (
    <Fragment>
      <ToggleButtonGroup
        defaultValue={Brackets.pools.code}
        name="bracket"
        type="radio"
      >
        <table cellPadding={0}>
          <tbody>
            <tr>
              <BracketToggleButton
                bracket={Brackets.pools}
                className={BorderRadius.topLeft}
              />
              <BracketToggleButton
                bracket={Brackets.winners}
                className={BorderRadius.none}
              />
              <BracketToggleButton
                bracket={Brackets.grandFinals}
                className={BorderRadius.topRight}
              />
            </tr>
            <tr>
              <BracketToggleButton
                bracket={Brackets.roundRobin}
                className={BorderRadius.bottomLeft}
              />
              <BracketToggleButton
                bracket={Brackets.losers}
                className={BorderRadius.none}
              />
              <BracketToggleButton
                bracket={Brackets.custom}
                className={BorderRadius.bottomRight}
              />
            </tr>
          </tbody>
        </table>
      </ToggleButtonGroup>
    </Fragment>
  )
}