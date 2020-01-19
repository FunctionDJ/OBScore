import React, { CSSProperties } from "react"
import { ButtonGroup, Button } from "react-bootstrap"

import { useStore } from "laco-react"
import Store from "../../store"

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

export default function Side(
  { playerIndex, style }:
  {playerIndex: number, style: CSSProperties}
) {
  const { players } = useStore(Store)
  const { side } = players[playerIndex]

  const handleOnClick = ({ target }) => {
    Store.set(state => {
      const currentPlayer = state.players[playerIndex]
      const newSide = target.value

      // toggle functionality
      if (currentPlayer.side === newSide) {
        currentPlayer.side = ""
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
        otherPlayer.side = "losers"
      }

      return state
    })
  }

  return (
    <ButtonGroup style={style}>
      <SideButton
        active={side === "winners"}
        label="W"
        onClick={handleOnClick}
        value="winners"
      />
      <SideButton
        active={side === "losers"}
        label="L"
        onClick={handleOnClick}
        value="losers"
      />
    </ButtonGroup>
  )
}
