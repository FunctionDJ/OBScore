import React, { Fragment, useRef } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

import BorderRadius from "../../../elements/BorderRadius";
import Rounds, { class as Round } from "../../../model/Round";
import { useScoreboard } from "../../../scoreboard-context";

type RoundToggleButtonProps = {
  round: Round
  className: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  currentRound: Round
}

const RoundToggleButton = ({ round, className, onChange, currentRound }: RoundToggleButtonProps) => {
  const target = useRef(null);

  return (
    <td>
      <ToggleButton
        ref={target}
        size="sm"
        value={round.code}
        checked={currentRound === round}
        onChange={(event) => {
          onChange(event)
        }}
        name="round"
        className={className}
        type="radio" // important
      >
        {round.short}
      </ToggleButton>
    </td>
  );
};

export default function RoundComponent (): JSX.Element {
  const [scoreboard, setScoreboard] = useScoreboard();

  const changeRound = ({ target }) => {
    setScoreboard(state => {
      state.level.round = Rounds[target.value];
      return { ...state };
    });
  };

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
  );
}