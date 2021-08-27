import React, { ReactElement } from "react";
import { FormControl } from "react-bootstrap";

import { useScoreboard } from "../../../scoreboard-context";

export default function Custom ({
  style, className
}: {
  style: React.CSSProperties, className?: string
}): ReactElement {
  const [scoreboard, setScoreboard] = useScoreboard();

  const changeCustom = ({ target }) => {
    setScoreboard(state => {
      state.level.custom = target.value;
      return { ...state };
    });
  };

  return (
    <FormControl
      className={className ?? ""}
      value={scoreboard.level.custom}
      onChange={changeCustom}
      // size="sm"
      style={style}
      as="textarea"
    />
  );
}