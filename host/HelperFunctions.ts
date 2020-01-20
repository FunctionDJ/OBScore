import chalk from "chalk"

export const formatId = (longId: string) =>
  chalk.blue(
    "["
      + longId.slice(0, 4)
      + ".."
      + longId.slice(-4)
    + "]"
  )

export const formatName = (name: string) =>
  chalk.blue(`[${name}]`)

export const logDefault = (msg: string) =>
  console.log(`[Host] ${chalk.gray(msg)}`)

export type LooseObject = {
  [key: string]: any
}