import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";

import FAButton from "./elements/FAButton";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import socket from "./socket";
import { emittable } from "./socketEvents";
import { useScoreboard } from "./scoreboard-context";
import { getSBExport } from "./model/Scoreboard";

type LinkProps = {
  id: string,
  children: ReactNode
  tab: string
  setTab: Dispatch<SetStateAction<string>>
}

function Link ({ id, children, tab, setTab }: LinkProps) {
  return (
    <button
      className={`nav-item nav-link ${tab === id ? "active" : ""}`}
      onMouseDown={() => setTab(id)}
    >
      {children}
    </button>
  );
}

interface Props {
  tab: string
  setTab: Dispatch<SetStateAction<string>>
}

export function CustomTabs ({ tab, setTab }: Props): ReactElement {
  const [scoreboard] = useScoreboard();

  const update = () => {
    socket.emit(emittable.updateWebSocket, getSBExport(scoreboard));
  };

  return (
    <nav>
      <div className="nav nav-tabs">
        <Link tab={tab} setTab={setTab} id="players">Players</Link>
        <Link tab={tab} setTab={setTab} id="meta">Meta</Link>
        <FAButton
          variant="success"
          className="ml-auto mr-2 align-self-center px-3 py-0"
          size="sm"
          onClick={update}
        >
          {faSyncAlt}
          Update
        </FAButton>
      </div>
    </nav>
  );
}