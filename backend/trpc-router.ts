import { initTRPC } from "@trpc/server";
import z from "zod";

export const t = initTRPC.create();

let dataCache: unknown;

export const appRouter = t.router({
  randomNumber: t.procedure.subscription(async function* () {
    while (true) {
      yield { randomNumber: Math.random() };
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }),

  hi: t.procedure.query(() => "hi"),
  connect: t.procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(({ input }) => {
      console.log(`Client ${input.name} connected`);
    }),
  log: t.procedure
    .input(
      z.object({
        type: z.enum(["log", "error"]),
        message: z.string(),
      })
    )
    .mutation(({ input }) => {
      console.log(`Client ${input.type}: ${input.message}`);
    }),
  scoreboard: {
    gibData: t.procedure.query(() => dataCache ?? "not-ready"),
  },
  controller: {
    update: t.procedure
      .input(
        z.object({
          data: z.unknown(),
        })
      )
      .mutation(({ input }) => {
        console.log("Controller sent update");
        dataCache = input.data;

        // TODO emit
      }),
    updateFiles: t.procedure
      .input(
        z.object({
          data: z.unknown(),
        })
      )
      .mutation(() => {
        // TODO
      }),
  },
});

export type AppRouter = typeof appRouter;
