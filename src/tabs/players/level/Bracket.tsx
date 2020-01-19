import React, {Fragment} from "react"

import {ToggleButtonGroup, ToggleButton} from "react-bootstrap"
import "../../../elements/BorderRadius.scss"

import {useStore} from "laco-react"
import Store from "../../../store"

import BorderRadius from "../../../elements/BorderRadius"

type Bracket = {
  code: string,
  short: string,
  long: string,
  className: BorderRadius
}

const Brackets = {
  pools: {
    code: "pools", short: "P", long: "Pools",
    className: BorderRadius.topLeft
  } as Bracket,
  winners: {
    code: "winners", short: "W", long: "Winners",
    className: BorderRadius.none
  } as Bracket,
  losers: {
    code: "losers", short: "L", long: "Losers",
    className: BorderRadius.none
  } as Bracket,
  grandFinals: {
    code: "grand-finals", short: "GF", long: "Grand-Finals",
    className: BorderRadius.topRight
  } as Bracket,
  custom: {
    code: "custom", short: "C", long: "Custom",
    className: BorderRadius.bottomRight
  } as Bracket,
  roundRobin: {
    code: "round-robin", short: "RR", long: "Round Robin",
    className: BorderRadius.bottomLeft
  }
} as const

export default function Bracket() {
  const state = useStore(Store)

  const changeBracket = ({target}) => {
    Store.set(state => {
      state.level.bracket = target.value
      return state
    })
  }

  const BracketToggleButton = ({bracket}: {bracket: Bracket}) => (
    <td>
      <ToggleButton
        size="sm"
        value={bracket.code}
        checked={state.level.bracket === bracket.code}
        onChange={changeBracket}
        name="bracket"
        className={bracket.className}
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
              <BracketToggleButton bracket={Brackets.pools}/>
              <BracketToggleButton bracket={Brackets.winners}/>
              <BracketToggleButton bracket={Brackets.grandFinals}/>
            </tr>
            <tr>
              <BracketToggleButton bracket={Brackets.roundRobin}/>
              <BracketToggleButton bracket={Brackets.losers}/>
              <BracketToggleButton bracket={Brackets.custom}/>
            </tr>
          </tbody>
        </table>
      </ToggleButtonGroup>
    </Fragment>
  )
}