import React, { ReactElement } from "react";

import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "../../../elements/BorderRadius.scss";

import BorderRadius from "../../../elements/BorderRadius";
import Brackets, { class as Bracket } from "../../../model/Bracket";
import { useScoreboard } from "../../../scoreboard-context";

export default function BracketComponent (): ReactElement {
  const [scoreboard, setScoreboard] = useScoreboard();

  const changeBracket = ({ target }) => {
    const input = target.querySelector("input");

    setScoreboard(state => {
      state.level.bracket = Brackets[input.value];
      return { ...state };
    });
  };

  type BracketToggleButtonProps = {
    bracket: Bracket
    className: string
  }

  const BracketToggleButton = ({ bracket, className }: BracketToggleButtonProps) => (
    <td>
      <ToggleButton
        size="sm"
        value={bracket.code}
        checked={
          scoreboard.level.bracket ? scoreboard.level.bracket === bracket : false
        }
        onMouseDown={changeBracket}
        name="bracket"
        className={className}
        type="radio" // important
      >
        {bracket.short}
      </ToggleButton>
    </td>
  );

  return (
    <ToggleButtonGroup
      defaultValue={Brackets.pools.code}
      name="bracket"
      type="radio"
      style={{ marginRight: 15 }}
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
  );
}