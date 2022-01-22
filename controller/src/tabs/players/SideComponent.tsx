import React, { CSSProperties } from "react";
import { ButtonGroup, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

import Scoreboard from "../../model/Scoreboard";
import Side from "../../model/Side";
import { useScoreboard } from "../../scoreboard-context";

function SideButton ({
  value, active, onClick, label, tooltip
}: {
  value: string
  active: boolean,
  onClick: (Event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  label: string,
  tooltip: string
}) {
  return (
    <OverlayTrigger
      overlay={
        <Tooltip id={value}>
          {tooltip}
        </Tooltip>
      }
    >
      <Button
        size="sm"
        value={value}
        active={active}
        onClick={onClick}
        name="side"
        style={{
          paddingTop: 3,
          paddingBottom: 3,
          minWidth: 30
        }}
        onFocus={
          // disable the annoying lingering focus visual behaviour
          ({ currentTarget }) => {
            currentTarget.blur();
          }
        }
      >
        {label}
      </Button>
    </OverlayTrigger>
  );
}

export default function SideComponent (
  { playerIndex, style }:
  {playerIndex: number, style: CSSProperties}
): JSX.Element {
  const [scoreboard, setScoreboard] = useScoreboard();
  const { players } = scoreboard;

  const { side } = players[playerIndex];

  const handleOnClick = ({ target }) => {
    setScoreboard((state: Scoreboard) => {
      const currentPlayer = state.players[playerIndex];
      const newSide: Side = Side[target.value];

      // toggle functionality
      if (currentPlayer.side === newSide) {
        currentPlayer.side = undefined;
        return state;
      }

      currentPlayer.side = newSide;

      // automatic switching of the other side only applies to player[0] and [1] for now
      if (![0, 1].includes(playerIndex)) {
        return state;
      }

      const otherPlayerIndex = playerIndex === 0 ? 1 : 0;
      const otherPlayer = state.players[otherPlayerIndex];

      if (newSide === "winners") {
        otherPlayer.side = Side.losers;
      }

      return state;
    });
  };

  return (
    <ButtonGroup style={style}>
      <SideButton
        active={side === Side.winners}
        label="W"
        onClick={handleOnClick}
        value="winners"
        tooltip="Winners Side"
      />
      <SideButton
        active={side === Side.losers}
        label="L"
        onClick={handleOnClick}
        value="losers"
        tooltip="Losers Side"
      />
    </ButtonGroup>
  );
}