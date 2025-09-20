import React, { Fragment, ReactElement } from "react";

import "./Level.scss";

import BracketComponent from "./BracketComponent";
import RoundComponent from "./RoundComponent";
import Number from "./Number";

import Custom from "./Custom";
import Level from "../../../model/Level";
import { useScoreboard } from "../../../scoreboard-context";

export default function LevelComponent (): ReactElement {
  const [scoreboard] = useScoreboard();
  const { level } = scoreboard;

  return (
    <Fragment>
      <div className="d-flex">
        <BracketComponent/>
        {Level.isCustom(level) && (
          <Custom className="custom-animation-exit-done" style={{
            width: 150,
            height: "auto",
            resize: "none"
          }}/>
        )}
        {Level.shouldShowRound(level) && <RoundComponent/>}
      </div>
      {Level.shouldShowNumber(level) && <Number/>}
    </Fragment>
  );
}