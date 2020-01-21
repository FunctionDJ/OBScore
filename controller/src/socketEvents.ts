export enum receivable {
  // general
  connect = "connect",
  disconnect = "disconnect",

  // OBScore specific
  config = "config",
  lastData = "last data",
  clientError = "client error"
}

export enum emittable {
  // OBScore-general
  gibData = "gib data",
  logDefault = "log default",
  introduce = "introduce",
  
  // Controller specific
  configChange = "config change",
  init = "init",
  updateWebSocket = "update websocket",
  updateFiles = "update files",
  controllerError = "controller error"
}