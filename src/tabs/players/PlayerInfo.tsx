import React, {Fragment} from "react"

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
import Side from "./Side"

import {CSSTransition} from "react-transition-group"
import "./SideAnimation.scss"

const chars = ["No Character", ...characters.sort()]

const {Prepend, Text: IGText} = InputGroup

type PlayerInfoProps = {
  playerIndex: number
  reverse?: boolean
}

export default function PlayerInfo(props: PlayerInfoProps) {
  const {playerIndex} = props
  const reverse = props.reverse || false

  const generalState = useStore(PlayerStore)

  const playerState = generalState.players[playerIndex]

  const changeSponsor = ({target}) => {
    PlayerStore.set(state => {
      state.players[playerIndex].sponsor = target.value
      return state
    })
  }

  const changeName = ({target}) => {
    PlayerStore.set(state => {
      state.players[playerIndex].name = target.value
    })
  }

  const changeCharacter = ({target}) => {
    PlayerStore.set(state => {
      state.players[playerIndex].character = target.value
    })
  }

  const changeScore = newScore => {
    PlayerStore.set(state => {
      state.players[playerIndex].score = newScore
    })
  }

  const showSide = generalState.level.bracket === "grand-finals"

  return (
    <Fragment>
      <Form style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row"
      }}>
        <div style={{flex: 1}}>
          <InputGroup size="sm">
            <Prepend>
              <IGText><FAIcon icon={fa.faUser} fixedWidth/></IGText>
            </Prepend>
            <Control
              style={{flex: 0.3}}
              value={playerState.sponsor}
              onChange={changeSponsor}
            />
            <div className="border border-light"/>
            <Control
              value={playerState.name}
              onChange={changeName}
            />
          </InputGroup>
          <div className="d-flex align-items-center">
            <InputGroup size="sm">
              <Prepend>
                <IGText>
                  <FAIcon icon={fa.faHandPointer} fixedWidth/>
                </IGText>
              </Prepend>
              <Control
                as="select"
                value={playerState.character}
                onChange={changeCharacter}
              >
                {chars.map(c => <option key={c}>{c}</option>)}
              </Control>
            </InputGroup>
            <CSSTransition in={showSide} timeout={200} classNames="side-animation">
              <div className="d-flex">
                <div style={{width: 6}}/>
                <Side style={{flex: 1}} playerIndex={playerIndex}/>
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
          value={parseInt(playerState.score, 10)}
          max={5}
          min={0}
          onChange={changeScore}
          reverse={reverse}
        />
      </Form>
    </Fragment>
  )
}