import React from "react"

import {useStore} from "laco-react"

import PlayerStore from "../../store"

import {
  Form,
  InputGroup,
  FormControl as Control
} from "react-bootstrap"

import {FontAwesomeIcon as FAIcon} from "@fortawesome/react-fontawesome"
import * as fa from "@fortawesome/free-solid-svg-icons"

import characters from "../Characters.json"
import NumberController from "../../elements/NumberController"
import SideComponent from "./SideComponent"

import {CSSTransition} from "react-transition-group"
import "./SideAnimation.scss"
import Scoreboard from "../../model/Scoreboard"
import Bracket from "../../model/Bracket"
import SponsorTagInput from "../../elements/SponsorTagInput"

const chars = ["No Character", ...characters.sort()]

const {Prepend, Text: IGText} = InputGroup

type PlayerInfoProps = {
  playerIndex: number
  reverse?: boolean
}

export default function PlayerInfo(props: PlayerInfoProps) {
  const {playerIndex} = props
  const reverse = props.reverse || false

  const scoreboard: Scoreboard = useStore(PlayerStore)

  const playerState = scoreboard.players[playerIndex]

  const changeSponsor = ({target}) => {
    PlayerStore.set((state: Scoreboard) => {
      state.players[playerIndex].sponsor = target.value
      return state
    })
  }

  const changeTag = ({target}) => {
    PlayerStore.set((state: Scoreboard) => {
      state.players[playerIndex].tag = target.value
      return state
    })
  }

  const changeCharacter = ({target}) => {
    PlayerStore.set((state: Scoreboard) => {
      state.players[playerIndex].character = target.value
      return state
    })
  }

  const changeScore = (newScore: number) => {
    PlayerStore.set((state: Scoreboard) => {
      state.players[playerIndex].score = newScore
      return state
    })
  }

  // const showSide = scoreboard.level.bracket === Bracket.grandFinals

  return (
    <Form style={{
      display: "flex",
      flexDirection: reverse ? "row-reverse" : "row"
    }}>
      <div style={{flex: 1}}>
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
              <div style={{width: 6}}/>
              <SideComponent style={{flex: 1}} playerIndex={playerIndex}/>
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
  )
}