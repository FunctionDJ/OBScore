import React from "react"

import {useStore} from "laco-react"
import Store from "../../store"
import Scoreboard from "../../model/Scoreboard"
import SponsorTagInput from "../../elements/SponsorTagInput"
import { Form, InputGroup, FormControl } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTwitter, faTwitch} from "@fortawesome/free-brands-svg-icons"

export default function CommentatorInfo({slot}: {slot: number}) {
  const scoreboard: Scoreboard = useStore(Store)

  const commentator = scoreboard.commentators[slot]

  const changeSponsor = ({target}) => {
    Store.set((state: Scoreboard) => {
      state.commentators[slot].sponsor = target.value
      return state
    })
  }

  const changeTag = ({target}) => {
    Store.set((state: Scoreboard) => {
      state.commentators[slot].tag = target.value
      return state
    })
  }

  const changeTwitter = ({target}) => {
    Store.set((state: Scoreboard) => {
      state.commentators[slot].twitter = target.value
      return state
    })
  }

  const changeTwitch = ({target}) => {
    Store.set((state: Scoreboard) => {
      state.commentators[slot].twitch = target.value
      return state
    })
  }

  return (
    <Form>
      <SponsorTagInput
        sponsor={commentator.sponsor ?? ""}
        changeSponsor={changeSponsor}
        tag={commentator.tag}
        changeTag={changeTag}
      />
      <div style={{display: "flex"}}>
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
          />
        </InputGroup>
      </div>
    </Form>
  )
}