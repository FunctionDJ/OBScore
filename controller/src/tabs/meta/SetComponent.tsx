import React, { ReactElement } from "react";
import { ToggleButtonGroup, ToggleButton, Form, Col } from "react-bootstrap";
import SetTypes, { class as Set } from "../../model/Set";

import Scoreboard from "../../model/Scoreboard";
import { useScoreboard } from "../../scoreboard-context";

export default function SetComponent (): ReactElement {
  const [scoreboard, setScoreboard] = useScoreboard();

  const changeSetType = (set: Set) => {
    setScoreboard((state: Scoreboard) => {
      state.set = set;
      return { ...state };
    });
  };

  const changeCustomSet = ({ target }) => {
    setScoreboard((state: Scoreboard) => {
      state.customSet = target.value;
      return { ...state };
    });
  };

  return (
    <Col xs={2} className="pr-0">
      <ToggleButtonGroup
        name="set-type"
        onChange={changeSetType}
        type="radio"
        value={scoreboard.set}
        style={{ width: "100%" }}
      >
        <ToggleButton
          size="sm"
          checked={scoreboard.set === SetTypes.bo3}
          value={SetTypes.bo3.code}
        >
          BO3
        </ToggleButton>
        <ToggleButton
          size="sm"
          checked={scoreboard.set === SetTypes.bo5}
          value={SetTypes.bo5.code}
        >
          BO5
        </ToggleButton>
        <ToggleButton
          size="sm"
          checked={scoreboard.set === SetTypes.custom}
          value={SetTypes.custom.code}
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
  );
}