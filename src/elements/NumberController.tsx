import React from "react"
import {FormControl} from "react-bootstrap"

type NumberControllerProps = {
  value: number
  onChange: (number: number) => void
  min: number
  max: number
}

export default function NumberController({
  value, onChange, min, max
}: NumberControllerProps) {
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

  const handleWheel = ({deltaY}) => {
    deltaY < 0 ? increment() : decrement()
  }

  return (
    <div
      className="flex"
      style={{minWidth: 100}}
      onWheel={handleWheel}
    >
      <button
        style={{width: "100%"}}
        onClick={increment}
      >
        more
      </button>
      <FormControl
        type="number"
        value={value.toString()}
        onChange={handleChange}
        min={min.toString()}
        max={max.toString()}
        style={{textAlign: "center"}}
      />
      <button
        style={{width: "100%"}}
        onClick={decrement}
      >
        less
      </button>
    </div>
  )
}