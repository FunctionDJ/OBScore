import { useEffect, useState } from "react";
import { trpcClient } from "./trpcClient";
import type { Scoreboard } from "../backend/schemas/scoreboardSchema";
import { createScoreboard } from "../controller/scoreboard-context";

export const useScoreboardBackend = ({ subscribe }: { subscribe: boolean }) => {
	const [scoreboard, setScoreboard] = useState<Scoreboard>(createScoreboard);

	useEffect(() => {
		trpcClient.getScoreboard.query().then((d) => {
			if (d !== null) {
				setScoreboard(d);
			}
		});

		if (subscribe) {
			const subscription = trpcClient.scoreboardSubscription.subscribe(
				undefined,
				{
					onData(newScoreboard) {
						setScoreboard(newScoreboard);
					},
				},
			);

			return () => subscription.unsubscribe();
		}
	}, []);

	return [scoreboard, setScoreboard] as const;
};
