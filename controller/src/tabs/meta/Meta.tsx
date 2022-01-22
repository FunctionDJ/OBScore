import React, { Fragment, ReactElement } from "react";
import CommentatorInfo from "./CommentatorInfo";
import FAButton from "../../elements/FAButton";

import Scoreboard from "../../model/Scoreboard";

import * as fa from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Form } from "react-bootstrap";
import Commentator from "../../model/Commentator";
import SetComponent from "./SetComponent";
import { useScoreboard } from "../../scoreboard-context";

export default function Meta (): ReactElement {
  const [scoreboard, setScoreboard] = useScoreboard();

  const switchAll = () => {
    setScoreboard((state: Scoreboard) => {
      for (const key in state.commentators) {
        const index = parseInt(key);

        if (index % 2 === 0) { continue; }

        const currentCommentator = state.commentators[key];
        const otherCommentator = state.commentators[index - 1];

        state.commentators[index - 1] = currentCommentator;
        state.commentators[key] = otherCommentator;
      }

      return { ...state };
    });
  };

  const resetCommentators = () => {
    setScoreboard((scoreboard: Scoreboard) => {
      scoreboard.commentators = [
        new Commentator(""),
        new Commentator("")
      ];

      return { ...scoreboard };
    });
  };

  const changeTitle = ({ target }) => {
    setScoreboard((state: Scoreboard) => {
      state.title = target.value;
      return { ...state };
    });
  };

  const changeBracketURL = ({ target }) => {
    setScoreboard((state: Scoreboard) => {
      state.bracketURL = target.value;
      return { ...state };
    });
  };

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
        <Col xs={3}>
          <Form.Control
            size="sm"
            placeholder="Stream Title"
            value={scoreboard.title}
            onChange={changeTitle}
          />
          <Form.Control
            size="sm"
            placeholder="Bracket URL"
            value={scoreboard.bracketURL}
            onChange={changeBracketURL}
          />
        </Col>
      </Row>
    </Fragment>
  );
}