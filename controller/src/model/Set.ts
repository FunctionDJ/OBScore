import RadioItem from "./RadioItem"

enum SetType {
  "bo3",
  "bo5",
  "custom"
}

class Set extends RadioItem<SetType> {}

const SetTypes = {
  bo3: new Set("bo3", "BO3", "Best of 3", SetType.bo3),
  bo5: new Set("bo5", "BO5", "Best of 5", SetType.bo5),
  custom: new Set("custom", "Custom", null, SetType.bo5)
}

export default SetTypes

export {
  SetType as type,
  Set as class
}