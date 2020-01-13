import React, {Fragment} from "react"
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap"

import {useStore} from "laco-react"
import Store from "../../../store"

import CornerClass from "../../../elements/CornerClass"

type Round = {
  code: string,
  short: string,
  long: string,
  className: CornerClass
}

const Rounds = {
  midRound: {
    code: "midRound", short: "R", long: "Round",
    className: CornerClass.topLeft
  } as Round,
  quarters: {
    code: "quarters", short: "Q", long: "Quarters",
    className: CornerClass.topRight
  } as Round,
  semis: {
    code: "semis", short: "S", long: "Semis",
    className: CornerClass.bottomLeft
  } as Round,
  finals: {
    code: "finals", short: "F", long: "Finals",
    className: CornerClass.bottomRight
  } as Round
} as const

// TODO classMap() can be removed

const classMap = (round: Round) => {
  switch (round) {
  case Rounds.midRound: return "top-left"
  case Rounds.quarters: return "top-right"
  case Rounds.semis: return "bottom-left"
  case Rounds.finals: return "bottom-right"
  }
}

type RoundToggleButtonProps = {
  round: Round,
  onChange: any,
  checked: string
}

const RoundToggleButton = ({round, onChange, checked}: RoundToggleButtonProps) => (
  <td>
    <ToggleButton
      size="sm"
      value={round.code}
      checked={checked === round.code}
      onChange={onChange}
      name="round"
      className={classMap(round)}
      type="radio" // important
    >
      {round.short}
    </ToggleButton>
  </td>
)

export default function Round() {
  const state = useStore(Store)

  const changeRound = ({target}) => {
    Store.set(state => {
      state.meta.level.round = target.value
      return state
    })
  }

  return (
    <Fragment>
      <ToggleButtonGroup
        defaultValue={Rounds.midRound.code}
        name="round"
        type="radio"
      >
        <table cellPadding={0}>
          <tbody>
            <tr>
              <RoundToggleButton
                round={Rounds.midRound}
                onChange={changeRound}
                checked={state.meta.level.round}
              />
              <RoundToggleButton
                round={Rounds.quarters}
                onChange={changeRound}
                checked={state.meta.level.round}
              />
            </tr>
            <tr>
              <RoundToggleButton
                round={Rounds.semis}
                onChange={changeRound}
                checked={state.meta.level.round}
              />
              <RoundToggleButton
                round={Rounds.finals}
                onChange={changeRound}
                checked={state.meta.level.round}
              />
            </tr>
          </tbody>
        </table>
      </ToggleButtonGroup>
    </Fragment>
  )
}