import React from "react"
import { ToggleButtonGroup, ToggleButton, Form, Col } from "react-bootstrap"
import SetTypes, {class as Set} from "../../model/Set"

import Store from "../../store"
import Scoreboard from "../../model/Scoreboard"
import { useStore } from "laco-react"

export default function SetComponent() {
  const scoreboard: Scoreboard = useStore(Store)

  const changeSetType = (set: Set) => {
    Store.set((scoreboard: Scoreboard) => {
      scoreboard.set = set
    })
  }

  const changeCustomSet = ({target}) => {
    Store.set((scoreboard: Scoreboard) => {
      scoreboard.customSet = target.value
    })
  }

  return (
    <Col xs={2} className="pr-0">
      <ToggleButtonGroup
        name="set-type"
        onChange={changeSetType}
        type="radio"
        value={scoreboard.set}
        style={{width: "100%"}}
      >
        <ToggleButton
          size="sm"
          checked={scoreboard.set === SetTypes.bo3}
          value={SetTypes.bo3}
        >
          BO3
        </ToggleButton>
        <ToggleButton
          size="sm"
          checked={scoreboard.set === SetTypes.bo5}
          value={SetTypes.bo5}
        >
          BO5
        </ToggleButton>
        <ToggleButton
          size="sm"
          checked={scoreboard.set === SetTypes.custom}
          value={SetTypes.custom}
        >
          Custom
        </ToggleButton>
      </ToggleButtonGroup>
      <Form.Control
        size="sm"
        disabled={scoreboard.set !== SetTypes.custom}
        value={scoreboard.customSet ?? ""}
        onChange={changeCustomSet}
      />
    </Col>
  )
}