import {
	createTRPCClient,
	loggerLink,
	wsLink,
	createWSClient,
} from "@trpc/client";
import type { AppRouter } from "../backend/trpc-router";

export const trpcClient = createTRPCClient<AppRouter>({
	links: [
		loggerLink(),
		wsLink({
			client: createWSClient({
				url: "ws://localhost:3001",
			}),
		}),
	],
});
