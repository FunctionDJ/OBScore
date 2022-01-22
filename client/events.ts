export enum receivable {
  // general
  connect = "connect",
  disconnect = "disconnect",

  // OBScore general
  config = "config",

  // scoreboard specific
  update = "update",
  notReady = "not ready"
}

export enum emittable {
  // OBScore general
  logDefault = "log default",
  introduce = "introduce",
  gibData = "gib data",

  // scoreboard specific
  clientError = "client error"
}