import React, {Fragment} from "react"
import {Row, Col} from "react-bootstrap"
import PlayerInfo from "./PlayerInfo"
import ResetButtons from "./ResetButtons"
import Round from "./Round"

const x = () => [1, 2]

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
        <Col xs={1}>
          <Round/>
        </Col>
      </Row>
    </Fragment>
  )
}
