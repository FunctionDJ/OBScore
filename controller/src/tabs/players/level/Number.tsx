import React, { ReactElement } from "react";

import NumberController from "../../../elements/NumberController";
import Scoreboard from "../../../model/Scoreboard";
import { useScoreboard } from "../../../scoreboard-context";

export default function Number (): ReactElement {
  const [scoreboard, setScoreboard] = useScoreboard();

  const changeNumber = (number: number) => {
    setScoreboard((state: Scoreboard) => {
      state.level.number = number;
      return { ...state };
    });
  };

  return (
    <NumberController
      defaultValue={1}
      value={scoreboard.level.number}
      min={1}
      max={9}
      onChange={changeNumber}
    />
  );
}