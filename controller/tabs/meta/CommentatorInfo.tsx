import React, { FC } from "react";

import Scoreboard from "../../model/Scoreboard";
import SponsorTagInput from "../../elements/SponsorTagInput";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { useScoreboard } from "../../scoreboard-context";

const CommentatorInfo: FC<{ slot: number }> = ({ slot }) => {
  const [scoreboard, setScoreboard] = useScoreboard();

  const commentator = scoreboard.commentators[slot];

  const changeSponsor = ({ target }) => {
    setScoreboard((state: Scoreboard) => {
      state.commentators[slot].sponsor = target.value;
      return { ...state };
    });
  };

  const changeTag = ({ target }) => {
    setScoreboard(state => {
      state.commentators[slot].tag = target.value;
      return { ...state };
    });
  };

  const changeTwitter = ({ target }) => {
    setScoreboard(state => {
      state.commentators[slot].twitter = target.value;
      return { ...state };
    });
  };

  const changeTwitch = ({ target }) => {
    setScoreboard((state: Scoreboard) => {
      state.commentators[slot].twitch = target.value;
      return { ...state };
    });
  };

  return (
    <Form>
      <SponsorTagInput
        sponsor={commentator.sponsor ?? ""}
        changeSponsor={changeSponsor}
        tag={commentator.tag}
        changeTag={changeTag}
      />
      <div style={{ display: "flex" }}>
        <InputGroup size="sm">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faTwitter} fixedWidth/>
            </InputGroup.Text>
            <InputGroup.Text>
              @
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={commentator.twitter ?? ""}
            onChange={changeTwitter}
            placeholder="Username"
          />
        </InputGroup>
        <InputGroup size="sm">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faTwitch} fixedWidth/>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={commentator.twitch ?? ""}
            onChange={changeTwitch}
            placeholder="Twitch handle"
          />
        </InputGroup>
      </div>
    </Form>
  );
};

export default CommentatorInfo;