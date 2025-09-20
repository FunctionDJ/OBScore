import React, { Fragment, ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import FAButton from "../../../elements/FAButton";
import * as fa from "@fortawesome/free-solid-svg-icons";
import "../../../elements/BorderRadius.scss";
import "./ResetButtons.scss";

import Player from "../../../model/Player";
import { useScoreboard } from "../../../scoreboard-context";

type QuadButtonProps = {
  className: string,
  children: ReactNode,
  callback: () => void
}

const QuadButton = ({ className, children, callback }: QuadButtonProps) => (
  <FAButton
    variant="dark"
    size="sm"
    block
    className={className}
    onClick={callback}
  >
    {fa.faLongArrowAltLeft}
    {children}
    {fa.faLongArrowAltRight}
  </FAButton>
);

export default function ResetButtons (): JSX.Element {
  const [, setScoreboard] = useScoreboard();

  const switchNames = () => {
    setScoreboard(state => {
      for (const key in state.players) {
        const index = parseInt(key);

        if (index % 2 === 0) { continue; }

        const currentName = state.players[key].tag;
        const otherName = state.players[index - 1].tag;

        state.players[index - 1].tag = currentName;
        state.players[key].tag = otherName;
      }

      return { ...state };
    });
  };

  const switchCharacters = () => {
    setScoreboard(state => {
      for (const key in state.players) {
        const index = parseInt(key);

        if (index % 2 === 0) { continue; }

        const currentCharacter = state.players[key].character;
        const otherCharacter = state.players[index - 1].character;

        state.players[index - 1].character = currentCharacter;
        state.players[key].character = otherCharacter;
      }

      return { ...state };
    });
  };

  const switchAll = () => {
    setScoreboard(state => {
      for (const key in state.players) {
        const index = parseInt(key);

        if (index % 2 === 0) { continue; }

        const currentPlayer = state.players[key];
        const otherPlayer = state.players[index - 1];

        state.players[index - 1] = currentPlayer;
        state.players[key] = otherPlayer;
      }

      return { ...state };
    });
  };

  const resetPlayersAndLevel = () => {
    setScoreboard(state => {
      state.players = [
        new Player(""),
        new Player("")
      ];

      return { ...state };
    });
  };

  return (
    <Fragment>
      <Row className="no-gutters">
        <Col>
          <QuadButton className="top-left" callback={switchNames}>Name</QuadButton>
        </Col>
        <Col>
          <QuadButton className="top-right" callback={switchCharacters}>Char</QuadButton>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col>
          <QuadButton className="bottom-left" callback={switchAll}>All</QuadButton>
        </Col>
        <Col>
          {/* <QuadButton className="bottom-right" callback={reset}>Reset</QuadButton> */}
          <FAButton variant="dark" size="sm" block className="bottom-right" onClick={resetPlayersAndLevel}>
            {fa.faUndo}
            Reset
          </FAButton>
        </Col>
      </Row>
    </Fragment>
  );
}