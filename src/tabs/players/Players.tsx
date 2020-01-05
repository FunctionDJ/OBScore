import React, {Fragment} from "react"
import {Row, Col} from "react-bootstrap"
import PlayerInfo from "./PlayerInfo"
import ResetButtons from "./resetbuttons/ResetButtons"
import Level from "./level/Level"

import "./LevelSpacing.scss"

export default function Players() {
  return (
    <Fragment>
      <Row>
        <Col>
          <PlayerInfo slot={0}/>
        </Col>
        <Col xs={2} className="d-flex flex-column">
          <ResetButtons/>
        </Col>
        <Col>
          <PlayerInfo slot={1}/>
        </Col>
        <Col
          xs={1}
          className="level-spacing"
          style={{maxWidth: "none"}}
        >
          <Level/>
        </Col>
      </Row>
    </Fragment>
  )
}
