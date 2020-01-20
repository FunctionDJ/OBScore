export enum global {
  // general
  connect = "connect",
  disconnect = "disconnect",

  // OBScore specific
  gibData = "gib data",
  logDefault = "log default",
  introduce = "introduce"
}

export enum controller {
  configChange = "config change",
  init = "init",
  updateWebSocket = "update websocket",
  updateFiles = "update files",
  controllerError = "controller error"
}

export enum scoreboard {
  clientError = "client error",
}