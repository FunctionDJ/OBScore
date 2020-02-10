import { emittable, receivable } from "./events"
import * as socketio from "socket.io"

declare global {
  interface Window {io: Function}
}

export default class OBS {
  private css: string = `
    background: #16171d;
    padding: 0px 5px;
    font-weight: bold;
  `

  private name: string
  private timeout: number
  private onUpdate: Function
  private socket?: socketio.Server
  private printedNotReady: boolean = true

  constructor(name: string, onUpdate: Function, timeout = 500) {
    if (typeof name !== "string")
      throw new Error("name must be a string")

    if (typeof onUpdate !== "function")
      throw new Error("onUpdate must be a function")

    if (typeof timeout !== "number")
      throw new Error("timeout must be a number")

    this.name = name
    this.timeout = timeout
    this.onUpdate = onUpdate
  }

  logBase(msg: string, style: any) {
    console.log(`%c[OBScore.js] ${msg}`, style)
  }

  log(msg: string) {
    this.logBase(msg, this.css + "color: #3b8eea;")
  }

  logError(msg: string) {
    this.logBase(msg, this.css + "color: #f13d30;")
  }

  sendError(error: Error) {
    if (typeof this.socket !== "object") {
      throw new Error("Socket not available yet")
      return
    }

    this.socket.emit(emittable.clientError, error.stack)
  }

  connect(server: string) {
    if (typeof window.io !== "function")
      throw new Error("socket.io not found")

    /* global io */
    const socket = window.io(server)
    this.socket = socket

    socket.on(receivable.connect, () => {
      this.log("Connected to OBScore-Host")
      socket.emit(emittable.introduce, this.name)
      socket.emit(emittable.gibData)
    })

    socket.on(receivable.disconnect, () =>
      this.logError("OBScore-Host Disconnected")
    )

    socket.on(receivable.update, (data: Object) => {
      this.log("Received update:")
      console.log(data)
      this.onUpdate(data)
      this.printedNotReady = false
    })

    socket.on(receivable.notReady, () => {
      if (!this.printedNotReady) {
        this.log(`Data is not ready, retrying every ${this.timeout}ms...`)
        this.printedNotReady = true
      }

      setTimeout(() => {
        socket.emit(emittable.gibData)
      }, this.timeout)
    })

    window.addEventListener("error", event => {
      this.sendError(event.error)
    })
  }
}