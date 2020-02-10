import React, {Fragment, useRef} from "react"
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap"

import {useStore} from "laco-react"
import Store from "../../../store"

import BorderRadius from "../../../elements/BorderRadius"
import Scoreboard from "../../../model/Scoreboard"

import Rounds, {class as Round} from "../../../model/Round"

type RoundToggleButtonProps = {
  round: Round
  className: string
  onChange: any
  currentRound: Round
}

const RoundToggleButton = ({round, className, onChange, currentRound}: RoundToggleButtonProps) => {
  const target = useRef(null)

  return (
    <td>
      <ToggleButton
        ref={target}
        size="sm"
        value={round.code}
        checked={currentRound === round}
        onChange={onChange}
        name="round"
        className={className}
        type="radio" // important
      >
        {round.short}
      </ToggleButton>
    </td>
  )
}

export default function RoundComponent() {
  const scoreboard: Scoreboard = useStore(Store)

  const changeRound = ({target}) => {
    Store.set((state: Scoreboard) => {
      state.level.round = Rounds[target.value]
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
                className={BorderRadius.topLeft}
                onChange={changeRound}
                currentRound={scoreboard.level.round}
              />
              <RoundToggleButton
                round={Rounds.quarters}
                className={BorderRadius.topRight}
                onChange={changeRound}
                currentRound={scoreboard.level.round}
              />
            </tr>
            <tr>
              <RoundToggleButton
                round={Rounds.semis}
                className={BorderRadius.bottomLeft}
                onChange={changeRound}
                currentRound={scoreboard.level.round}
              />
              <RoundToggleButton
                round={Rounds.finals}
                className={BorderRadius.bottomRight}
                onChange={changeRound}
                currentRound={scoreboard.level.round}
              />
            </tr>
          </tbody>
        </table>
      </ToggleButtonGroup>
    </Fragment>
  )
}