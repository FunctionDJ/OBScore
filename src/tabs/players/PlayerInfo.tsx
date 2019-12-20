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
const chars = ["No Character", ...characters.sort()]

const {Prepend, Text: IGText} = InputGroup

type PlayerInfoProps = {
  slot: number
}

export default function PlayerInfo({slot}: PlayerInfoProps) {
  const state = useStore(PlayerStore)

  const changeSponsor = ({target}) => {
    PlayerStore.set(state => {
      state.players[slot].sponsor = target.value
      return state
    })
  }

  const changeName = ({target}) => {
    PlayerStore.set(state => {
      state.players[slot].name = target.value
    })
  }

  const changeCharacter = ({target}) => {
    PlayerStore.set(state => {
      state.players[slot].character = target.value
    })
  }

  return (
    <Fragment>
      <Form>
        <InputGroup size="sm">
          <Prepend>
            <IGText><FAIcon icon={fa.faUser} fixedWidth/></IGText>
          </Prepend>
          <Control
            style={{flex: 0.3}}
            value={state.players[slot].sponsor}
            onChange={changeSponsor}
          />
          <div className="border border-light"/>
          <Control
            value={state.players[slot].name}
            onChange={changeName}
          />
        </InputGroup>
        <InputGroup size="sm">
          <Prepend>
            <IGText><FAIcon icon={fa.faHandPointer} fixedWidth/></IGText>
          </Prepend>
          <Control
            as="select"
            value={state.players[slot].character}
            onChange={changeCharacter}
          >
            {chars.map(c => <option key={c}>{c}</option>)}
          </Control>
        </InputGroup>
      </Form>
    </Fragment>
  )
}