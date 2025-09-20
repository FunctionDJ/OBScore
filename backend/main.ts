import { applyWSSHandler } from "@trpc/server/adapters/ws";
import { WebSocketServer } from "ws";
import { appRouter } from "./trpc-router";

applyWSSHandler({
  wss: new WebSocketServer({
    port: 3001,
    host: "0.0.0.0",
  }),
  router: appRouter,
  keepAlive: {
    enabled: true,
  },
});

console.log("\n[Backend] OBScore Backend started\n");
