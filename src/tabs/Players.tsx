import React, {Fragment} from "react"

import {
  Form,
  InputGroup,
  FormControl as Control
} from "react-bootstrap"

import {FAIcon} from "@fortawesome/react-fontawesome"
import {circle} from "@fortawesome/free-solid-svg-icons"


import fa from "../fa-list"

import characters from "./Characters.json"
const chars = ["No Character", ...characters.sort()]

const {Prepend, Text: IGText} = InputGroup

export default function Players() {
  return (
    <Fragment>
      <Form>
        <InputGroup>
          <Prepend>
            <IGText className={fa.circle}/>
          </Prepend>
          <Control size="sm"/>
          <Control size="sm"/>
        </InputGroup>
        <InputGroup>
          <Prepend>
            <IGText className="fa fa-hand-pointer-o"/>
          </Prepend>
          <Control size="sm" as="select">
            {chars.map(c => <option key={c}>{c}</option>)}
          </Control>
        </InputGroup>
      </Form>
    </Fragment>
  )
}
