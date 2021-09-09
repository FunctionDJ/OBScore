import { Server } from "socket.io"
import chalk from "chalk"
import { createServer } from "http"

let config = {}

;(async () => {
  try {
    config = await import("./config.json")
  } catch (error) {
  }
})()

import {formatId, formatName, logDefault, LooseObject} from "./HelperFunctions"
import { changeConfig, socketLogDefault, clientError, gibData, updateFiles } from "./SocketActions"

import * as emittable from "./events/emittable"
import * as receivable from "./events/receivable"

const httpServer = createServer()
const ioSocket = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"]
  }
})
httpServer.listen(3001)

let controllerId: string = null

const nameTable: LooseObject = {}

const getName = (socketId: string) =>
  nameTable[socketId]
  ? formatName(nameTable[socketId])
  : formatId(socketId)

console.log(chalk.underline.bold.green("\n[Host] Welcome to OBScore-Host!\n"))

let dataCache: Object = null

ioSocket.on(receivable.global.connect, socket => {
  logDefault(`Client ${formatId(socket.id)} connected`)

  socket.emit(emittable.global.config, config)

  socket.on(receivable.controller.configChange, data =>
    changeConfig(data, config)
  )
  
  socket.on(receivable.global.introduce, (name: string) => {
    nameTable[socket.id] = name
    logDefault(`Client ${formatId(socket.id)} is now known as ${formatName(name)}`)
  })

  socket.on(receivable.global.logDefault, msg =>
    socketLogDefault(msg, getName, socket)
  )

  socket.on(receivable.scoreboard.clientError, msg =>
    clientError(msg, getName, socket, ioSocket, controllerId)
  )

  // Called by the controller to register itself and sent the initial data
  socket.on(receivable.controller.init, data => {
    logDefault(chalk.underline.bold(`${getName(socket.id)} is connected as the controller and sent data`))
    dataCache = data
    controllerId = socket.id
  })

  // Called by the controller to update the dataCache
  socket.on(receivable.controller.updateWebSocket, data => {
    logDefault(`${getName(socket.id)} sent an update`)
    dataCache = data

    socket.broadcast.emit("update", dataCache)
  })

  socket.on(receivable.controller.updateFiles, updateFiles)

  // Used by anyone to request data
  socket.on(receivable.global.gibData, () => gibData(dataCache, socket))
})
