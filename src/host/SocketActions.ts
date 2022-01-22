import fs from "fs"
import chalk from "chalk"

import * as emittable from "./events/emittable"

type Data = {
  key: string,
  value: any
}

import {LooseObject} from "./HelperFunctions"

export const changeConfig = ({key, value}: Data, config: LooseObject) => {
  config[key] = value

  try {
    const fileContent = JSON.stringify(config, null, 2)
    console.log("To be written into config.json:", config)
    fs.writeFileSync("./config.json", fileContent)
  } catch (error) {
    console.log("There was an error while trying to save the config:")
    console.error(error)
  }
}

import {Socket, Server} from "socket.io"

export const socketLogDefault = (msg: string, getName: Function, socket: Socket) => {
  const text = `${getName(socket.id)} ${msg}`
  console.log(chalk.bgHsl(0, 0, 15)(text))
}

export const clientError = (
  msg: string,
  getName: Function,
  socket: Socket,
  ioSocket: Server,
  controllerId: string
) => {
  if (socket.id === controllerId) // Don't log anything by the controller
    return

  console.log(
    chalk.bgHsl(0, 0, 15)(
      `\n${getName(socket.id)} sent an error:\n`
      + `${chalk.bold.red(msg)}\n`
    )
  )

  if (controllerId) // Forward website errors to the controller, if it registered
    ioSocket.to(controllerId).emit(emittable.controller.clientError, msg)
}

export const gibData = (dataCache: Object, socket: Socket) => {
  if (!dataCache) {
    // Websites may react to "not-ready" with another delayed "gib-data" until it's available
    socket.emit(emittable.scoreboard.notReady)
    return
  }

  socket.emit(emittable.scoreboard.update, dataCache)
}

export const updateFiles = (data: Object) => {
  console.log(data)
}