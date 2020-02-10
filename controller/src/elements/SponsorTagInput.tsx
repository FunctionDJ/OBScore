import React from "react"
import { InputGroup, FormControl } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as fa from "@fortawesome/free-solid-svg-icons"

export default function SponsorTagInput({
  sponsor,
  tag,
  changeSponsor,
  changeTag
}: {
  sponsor: string,
  tag: string,
  changeSponsor: (event: React.FormEvent) => void,
  changeTag: (event: React.FormEvent) => void,
}) {
  return (
    <InputGroup size="sm">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <FontAwesomeIcon icon={fa.faUser} fixedWidth/>
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        style={{flex: 0.3}}
        value={sponsor}
        onChange={changeSponsor}
      />
      <div className="border border-light"/>
      <FormControl
        value={tag}
        onChange={changeTag}
      />
    </InputGroup>
  )
}