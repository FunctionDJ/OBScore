import { emittable, receivable } from "./events"
import Scoreboard from "../controller/src/model/Scoreboard"
import Level from "../controller/src/model/Level"
import Player from "../controller/src/model/Player"
import Commentator from "../controller/src/model/Commentator"
import io from "socket.io-client"

enum Direction {
  in,
  out
}

export default class OBScoreClient {
  private css: string = `
    background: #16171d;
    padding: 0px 5px;
    font-weight: bold;
  `

  private name: string
  private timeout: number
  private onUpdate: (scoreboard: Scoreboard) => void
  private socket?: SocketIOClient.Socket
  private printedNotReady: boolean = true

  constructor(
    name: string,
    onUpdate: (scoreboard: Scoreboard) => void,
    timeout = 500
  ) {
    if (typeof name !== "string") {
      throw new Error("name must be a string")
    }

    if (typeof onUpdate !== "function") {
      throw new Error("onUpdate must be a function")
    }

    if (typeof timeout !== "number") {
      throw new Error("timeout must be a number")
    }

    this.name = name
    this.timeout = timeout
    this.onUpdate = onUpdate
  }

  private logBase(msg: string, style: any) {
    console.log(`%c[OBScore.js] ${msg}`, style)
  }

  public log(msg: string) {
    this.logBase(msg, this.css + "color: #3b8eea;")
  }

  public logError(msg: string) {
    this.logBase(msg, this.css + "color: #f13d30;")
  }

  public sendError(error: Error) {
    if (typeof this.socket !== "object") {
      throw new Error("Socket not available yet")
    }

    this.socket.emit(emittable.clientError, error.stack)
  }

  public connect(server: string, callback?: Function) {
    const socket = io(server)
    this.socket = socket

    socket.on(receivable.connect, (anything: any) => {
      console.log(anything)
      this.log("Connected to OBScore-Host")
      socket.emit(emittable.introduce, this.name)
      socket.emit(emittable.gibData)

      if (callback) {
        callback()
      }
    })

    socket.on(receivable.disconnect, () =>
      this.logError("OBScore-Host Disconnected")
    )

    socket.on(receivable.update, (scoreboard: Scoreboard) => {
      this.log("Received update:")
      console.log(scoreboard)
      this.onUpdate(scoreboard)
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

  public static stringifyLevel = (level: Level) => {
    if (!level.bracket) {
      return "n/a"
    }
  
    if (!level.round) {
      return level.bracket.long
    }
  
    if (level.number !== undefined) {
      return `${level.bracket.long} ${level.round.long} ${level.number}`
    } else {
      return `${level.bracket.long} ${level.round.long}`
    }
  }

  public static stringifyPlayer = (player: Player) => {
    if (!player.sponsor) {
      return player.tag
    }
  
    return `${player.sponsor} | ${player.tag}`
  }

  public static stringifyCommentator = (commentator: Commentator) => {
    if (!commentator.sponsor) {
      return commentator.tag
    }

    return `${commentator.sponsor} | ${commentator.tag}`
  }

  private static fade = (element: HTMLElement, direction: Direction) => {
    const animation = element.animate({
      opacity: direction === Direction.in ? [1, 0] : [0, 1]
    }, 300)

    return new Promise(res => {
      animation.addEventListener("finish", res)
    })
  }

  public static fadeIn = async (element: HTMLElement) => {
    await OBScoreClient.fade(element, Direction.out)
  }

  public static fadeOut = async (element: HTMLElement) => {
    await OBScoreClient.fade(element, Direction.in)
  }

  public static fadeInOut = async (element: HTMLElement, changeMethod: Function) => {
    await OBScoreClient.fadeOut(element)
    changeMethod()
    await OBScoreClient.fadeIn(element)
  }
}

window.OBScoreClient = OBScoreClient
