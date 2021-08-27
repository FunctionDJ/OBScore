import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import PlayerInfo from "./PlayerInfo";
import ResetButtons from "./resetbuttons/ResetButtons";
import LevelComponent from "./level/Level";

import "./LevelSpacing.scss";

export default function Players (): JSX.Element {
  return (
    <Fragment>
      <Row className="mr-0">
        <Col>
          <PlayerInfo playerIndex={0}/>
        </Col>
        <Col xs={2} className="p-0 d-flex flex-column">
          <ResetButtons/>
        </Col>
        <Col>
          <PlayerInfo playerIndex={1} reverse={true}/>
        </Col>
        <div
          className="level-spacing"
          style={{ width: 250 }}
        >
          <LevelComponent/>
        </div>
      </Row>
    </Fragment>
  );
}