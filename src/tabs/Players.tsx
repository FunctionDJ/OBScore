import React, {Fragment} from "react"
import {Row, Col} from "react-bootstrap"
import PlayerInfo from "./PlayerInfo"
import ResetButtons from "./ResetButtons"

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
      </Row>
    </Fragment>
  )
}
