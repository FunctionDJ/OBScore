import React, {Fragment} from "react"
import CommentatorInfo from "./CommentatorInfo"
import FAButton from "../../elements/FAButton"

import Store from "../../store"
import Scoreboard from "../../model/Scoreboard"

import * as fa from "@fortawesome/free-solid-svg-icons"
import { Row, Col} from "react-bootstrap"
import Commentator from "../../model/Commentator"
import SetComponent from "./SetComponent"

export default function Meta() {

  const switchAll = () => {
    Store.set((state: Scoreboard) => {
      for (const key in state.commentators) {
        const index = parseInt(key)

        if (index % 2 === 0)
          continue

        const currentCommentator = state.commentators[key]
        const otherCommentator = state.commentators[index - 1]

        state.commentators[index - 1] = currentCommentator
        state.commentators[key] = otherCommentator
      }

      return state
    })
  }

  const resetCommentators = () => {
    Store.set((scoreboard: Scoreboard) => {
      scoreboard.commentators = [
        new Commentator(""),
        new Commentator("")
      ]

      return scoreboard
    })
  }

  return (
    <Fragment>
      <Row>
        <SetComponent/>
        <Col>
          <CommentatorInfo slot={0}/>
        </Col>
        <Col xs={1} className="p-0 d-flex flex-column justify-content-around">
          <FAButton
            size="sm"
            variant="dark"
            onClick={switchAll}
          >
            {fa.faLongArrowAltLeft}
            All
            {fa.faLongArrowAltRight}
          </FAButton>
          <FAButton
            size="sm"
            variant="dark"
            onClick={resetCommentators}
          >
            {fa.faUndo}
            Reset
          </FAButton>
        </Col>
        <Col>
          <CommentatorInfo slot={1}/>
        </Col>
      </Row>
    </Fragment>
  )
}