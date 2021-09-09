import React, { ReactElement } from "react";

import {
  Form,
  InputGroup,
  FormControl as Control
} from "react-bootstrap";

import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

import characters from "../Characters.json";
import NumberController from "../../elements/NumberController";
import SideComponent from "./SideComponent";

import { CSSTransition } from "react-transition-group";
// import "./SideAnimation.scss";
import SponsorTagInput from "../../elements/SponsorTagInput";
import { useScoreboard } from "../../scoreboard-context";

const chars = ["No Character", ...characters.sort()];

const { Prepend, Text: IGText } = InputGroup;

type PlayerInfoProps = {
  playerIndex: number
  reverse?: boolean
}

export default function PlayerInfo (props: PlayerInfoProps): ReactElement {
  const { playerIndex } = props;
  const reverse = props.reverse || false;

  const [scoreboard, setScoreboard] = useScoreboard();

  const playerState = scoreboard.players[playerIndex];

  const changeSponsor = ({ target }) => {
    setScoreboard(scoreboard => {
      scoreboard.players[playerIndex].sponsor = target.value;
      return { ...scoreboard };
    });
  };

  const changeTag = ({ target }) => {
    setScoreboard(scoreboard => {
      scoreboard.players[playerIndex].tag = target.value;
      return { ...scoreboard };
    });
  };

  const changeCharacter = ({ target }) => {
    setScoreboard(scoreboard => {
      scoreboard.players[playerIndex].character = target.value;
      return { ...scoreboard };
    });
  };

  const changeScore = (newScore: number) => {
    setScoreboard(scoreboard => {
      scoreboard.players[playerIndex].score = newScore;
      return { ...scoreboard };
    });
  };

  // const showSide = scoreboard.level.bracket === Bracket.grandFinals

  return (
    <Form style={{
      display: "flex",
      flexDirection: reverse ? "row-reverse" : "row"
    }}>
      <div style={{ flex: 1 }}>
        <SponsorTagInput
          sponsor={playerState.sponsor}
          changeSponsor={changeSponsor}
          tag={playerState.tag}
          changeTag={changeTag}
        />
        <div className="d-flex align-items-center">
          <InputGroup size="sm">
            <Prepend>
              <IGText>
                <FAIcon icon={fa.faHandPointer} fixedWidth/>
              </IGText>
            </Prepend>
            <Control
              as="select"
              value={playerState.character ? playerState.character.toString() : "No Character"}
              onChange={changeCharacter}
            >
              {chars.map(c => <option key={c}>{c}</option>)}
            </Control>
          </InputGroup>
          <CSSTransition in={false} timeout={200} classNames="round-animation">
            <div className="d-flex">
              <div style={{ width: 6 }}/>
              <SideComponent style={{ flex: 1 }} playerIndex={playerIndex}/>
            </div>
          </CSSTransition>
        </div>
      </div>
      <div
        style={{
          width: 10
        }}
      />
      <NumberController
        defaultValue={0}
        value={parseInt(playerState.score.toString(), 10)}
        max={5}
        min={0}
        onChange={changeScore}
        reverse={reverse}
      />
    </Form>
  );
}