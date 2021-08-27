import React, { FC } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

interface Props {
  sponsor: string
  tag: string
  changeSponsor: (event: React.FormEvent) => void
  changeTag: (event: React.FormEvent) => void
}

const SponsorTagInput: FC<Props> = ({ sponsor, tag, changeSponsor, changeTag }) => (
  <InputGroup size="sm">
    <InputGroup.Prepend>
      <InputGroup.Text>
        <FontAwesomeIcon icon={fa.faUser} fixedWidth/>
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      style={{ flex: 0.3 }}
      value={sponsor}
      onChange={changeSponsor}
      placeholder="Sponsor"
    />
    <div className="border border-light"/>
    <FormControl
      value={tag}
      onChange={changeTag}
      placeholder="Tag"
    />
  </InputGroup>
);

export default SponsorTagInput;