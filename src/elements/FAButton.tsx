import React from "react"

import {Button, ButtonProps} from "react-bootstrap"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import * as fa from "@fortawesome/free-solid-svg-icons"

interface FAButtonProps extends ButtonProps {
  children: [
    fa.IconDefinition,
    any,
    fa.IconDefinition?
  ],
  className?: string,
  onClick: any,
  center?: boolean
}

export default function FAButton(props: FAButtonProps) {
  const buttonProps = {...props}
  delete buttonProps.children
  delete buttonProps.center

  const center = props.center || (!!props.children[2])

  let rightSide = <div></div>

  if (center) {
    if (props.children[2]) {
      rightSide = <FontAwesomeIcon
        icon={props.children[2]}
        style={{marginLeft: "0.5rem"}}
      />
    } else {
      rightSide = <div style={{
        display: "inline-block",
        width: "1em", height: "1em",
        marginLeft: "0.5rem"
      }}>
      </div>
    }
  }

  return (
    <Button {...buttonProps}>
      <FontAwesomeIcon
        icon={props.children[0]}
        style={{marginRight: "0.5rem"}}
      />

      {props.children[1]}

      {rightSide}
    </Button>
  )
}
