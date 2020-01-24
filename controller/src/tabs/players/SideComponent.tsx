import React, { CSSProperties } from "react"
import { ButtonGroup, Button } from "react-bootstrap"

import { useStore } from "laco-react"
import Store from "../../store"
import Scoreboard from "../../model/Scoreboard"
import Side from "../../model/Side"

function SideButton({
  value, active, onClick, label
}: {
  value: string
  active: boolean,
  onClick: (Event) => void,
  label: string
}) {
  return (
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
          currentTarget.blur()
        }
      }
    >
      {label}
    </Button>
  )
}

export default function SideComponent(
  { playerIndex, style }:
  {playerIndex: number, style: CSSProperties}
) {
  const scoreboard: Scoreboard = useStore(Store)
  const { players } = scoreboard

  const { side } = players[playerIndex]

  const handleOnClick = ({ target }) => {
    Store.set((state: Scoreboard) => {
      const currentPlayer = state.players[playerIndex]
      const newSide: Side = Side[target.value]

      // toggle functionality
      if (currentPlayer.side === newSide) {
        currentPlayer.side = undefined
        return state
      }

      currentPlayer.side = newSide

      // automatic switching of the other side only applies to player[0] and [1] for now
      if (![0, 1].includes(playerIndex)) {
        return state
      }

      const otherPlayerIndex = playerIndex === 0 ? 1 : 0
      const otherPlayer = state.players[otherPlayerIndex]

      if (newSide === "winners") {
        otherPlayer.side = Side.losers
      }

      return state
    })
  }

  return (
    <ButtonGroup style={style}>
      <SideButton
        active={side === Side.winners}
        label="W"
        onClick={handleOnClick}
        value="winners"
      />
      <SideButton
        active={side === Side.losers}
        label="L"
        onClick={handleOnClick}
        value="losers"
      />
    </ButtonGroup>
  )
}
