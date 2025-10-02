import { initTRPC } from "@trpc/server";
import { EventEmitter, on } from "node:events";
import { scoreboardSchema, type Scoreboard } from "./schemas/scoreboardSchema";
import { loadSave, writeSave } from "./saveAndLoad";

export const t = initTRPC.create();

let dataCache: Scoreboard | null = null;

loadSave()
	.then((scoreboard) => {
		dataCache = scoreboard;
		ee.emit("update", scoreboard);
	})
	.catch(() => {
		console.info(
			"Info: Could not load save from disk. Either missing (first run?), no access, or doesn't fit current scoreboard schema (invalid data).",
		);
	});

class IterableEventEmitter extends EventEmitter<MyEvents> {
	toIterable<TEventName extends keyof MyEvents>(
		eventName: TEventName,
		opts?: NonNullable<Parameters<typeof on>[2]>,
	): AsyncIterable<MyEvents[TEventName]> {
		return on(this as any, eventName, opts) as any;
	}
}

interface MyEvents {
	update: [Scoreboard];
}

const ee = new IterableEventEmitter();

export const appRouter = t.router({
	getScoreboard: t.procedure.query(() => dataCache),
	scoreboardSubscription: t.procedure.subscription(async function* ({
		signal,
	}) {
		if (dataCache !== null) {
			ee.emit("update", dataCache);
		}

		const it = ee.toIterable("update", { signal });

		for await (const [scoreboard] of it) {
			yield scoreboard;
		}
	}),
	update: t.procedure.input(scoreboardSchema).mutation(({ input }) => {
		console.log("Controller sent update");

		const withNewState: Scoreboard = {
			...input,
			state: "sync",
		};

		dataCache = withNewState;

		ee.emit("update", withNewState);

		writeSave(withNewState);
	}),
});

export type AppRouter = typeof appRouter;
