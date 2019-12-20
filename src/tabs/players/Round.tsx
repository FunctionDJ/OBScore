import React, {Fragment} from "react"

import {ToggleButtonGroup, ToggleButton} from "react-bootstrap"

import "./QuadButtons.scss"

const Stages = {
  pools: {code: "pools", short: "P", long: "Pools"},
  winners: {code: "winners", short: "W", long: "Winnrs"},
  losers: {code: "losers", short: "L", long: "Losers"},
  grandFinals: {code: "grand-finals", short: "G", long: "Grand-Finals"}
} as const

type Stages = keyof typeof Stages

export default function Round() {
  const classMap = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right"
  ]

  return (
    <Fragment>
      <ToggleButtonGroup
        style={{
          maxWidth: "80px",
          flexWrap: "wrap"
        }}
        type="radio"
        name="options"
        defaultValue={Stages.pools.code}
      >
        {
          Object.entries(Stages)
            .map(([, stage], index) => 
              <ToggleButton
                size={"sm"}
                key={stage.code}
                value={stage.code}
                className={classMap[index]}
                style={index === 2 ? {marginLeft: "0.5px"} : {}}
              >
                {stage.short}
              </ToggleButton>
            )
        }
      </ToggleButtonGroup>
    </Fragment>
  )
}