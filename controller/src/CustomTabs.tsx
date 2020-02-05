import React from "react"

import FAButton from "./elements/FAButton"
import * as fa from "@fortawesome/free-solid-svg-icons"

import "bootstrap"
import "jquery"

import socket from "./socket"
import {emittable} from "./socketEvents"

import {useStore} from "laco-react"
import PlayerStore from "./store"
import Scoreboard from "./model/Scoreboard"

type LinkProps = {
  id: string,
  active?: boolean,
  children: any
}

const Link = ({id, active = false, children}: LinkProps) => (
  <a
    className={`nav-item nav-link ${active ? "active" : ""}`}
    id={`nav-${id}-tab`}
    data-toggle="tab"
    href={`#nav-${id}`}
    role="tab"
    aria-controls={`nav-${id}`}
  >
    {children}
  </a>
)

export default function CustomTabs() {
  const state: Scoreboard = useStore(PlayerStore)

  const update = () => {
    socket.emit(emittable.updateWebSocket, state)
  }

  return (
    <nav>
      <div className="nav nav-tabs">
        <Link id="players" active={true}>Players</Link>
        <Link id="meta">Meta</Link>
        <FAButton
          variant="success"
          className="ml-auto mr-2 align-self-center px-3 py-0"
          size="sm"
          onClick={update}
        >
          {fa.faSyncAlt}
          Update
        </FAButton>
      </div>
    </nav>
  )
}