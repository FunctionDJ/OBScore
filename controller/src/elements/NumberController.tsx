import React from "react"
import {FormControl} from "react-bootstrap"

import FAButton from "./FAButton"

import {faArrowUp, faArrowDown, faUndo} from "@fortawesome/free-solid-svg-icons"

import "./NumberController.scss"

import BorderRadius from "./BorderRadius"
import "./BorderRadius"

type NumberControllerProps = {
  value: number
  defaultValue: number
  onChange: (number: number) => void
  min: number
  max: number
  reverse?: boolean
}

const FAButtonSharedClasses = "py-0 px-1 slim-button "

export default function NumberController(props: NumberControllerProps) {
  const {value, defaultValue, onChange, min, max} = props
  const reverse = props.reverse || false

  const handleChange = ({target}) => {
    const number = parseInt(target.value, 10)
    onChange(number)
  }

  const increment = () => {
    onChange(Math.min(value + 1, max))
  }

  const decrement = () => {
    onChange(Math.max(value - 1, min))
  }

  const reset = () => {
    onChange(defaultValue)
  }

  const handleWheel = ({deltaY}) => {
    deltaY < 0 ? increment() : decrement()
  }

  return (
    <div
      className="d-flex"
      onWheel={handleWheel}
      style={{flexDirection: reverse ? "row-reverse" : "row"}}
    >
      <FormControl
        className={
          reverse ?
            `${BorderRadius.topRight} ${BorderRadius.bottomRight}` :
            `${BorderRadius.topLeft} ${BorderRadius.bottomLeft}`
        }
        type="number"
        value={value ? value.toString() : ""}
        onChange={handleChange}
        min={min.toString()}
        max={max.toString()}
        style={{
          textAlign: "center",
          width: 50,
          fontSize: 30,
          height: "100%",
          borderColor: "black"
        }}
        size="sm"
      />
      <div className="d-flex flex-column">
        <FAButton
          variant="dark"
          onMouseDown={increment}
          size="sm"
          className={
            FAButtonSharedClasses + (
              reverse ?
                BorderRadius.topLeft :
                BorderRadius.topRight
            )
          }
        >
          {[faArrowUp]}
        </FAButton>
        <FAButton
          variant="dark"
          onClick={reset}
          size="sm"
          className={FAButtonSharedClasses + BorderRadius.none}
        >
          {[faUndo]}
        </FAButton>
        <FAButton
          variant="dark"
          onMouseDown={decrement}
          size="sm"
          className={
            FAButtonSharedClasses + (
              reverse ?
                BorderRadius.bottomLeft :
                BorderRadius.bottomRight
            )
          }
        >
          {[faArrowDown]}
        </FAButton>
      </div>
    </div>
  )
}