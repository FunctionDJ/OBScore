import { useEffect, useState } from "react";
import "../shared/tailwind.css";
import { trpcClient } from "../shared/trpcClient";
import { useScoreboardBackend } from "../shared/useScoreboardBackend";
import { Tabs, type Tab } from "./Tabs";
import { ScoreboardContext } from "./scoreboard-context";
import { Misc } from "./tabs/misc/Misc";
import { Players } from "./tabs/players/Players";

export function App() {
	const [scoreboard, setScoreboard] = useScoreboardBackend({
		subscribe: false,
	});

	useEffect(() => {
		const handler = setTimeout(() => {
			if (scoreboard.state === "dirty") {
				trpcClient.update.mutate(scoreboard);
			}
		}, 500);

		return () => clearTimeout(handler);
	}, [scoreboard]);

	const [currentTab, setCurrentTab] = useState<Tab>("players");

	return (
		<ScoreboardContext.Provider
			value={{
				scoreboard,
				setScoreboard,
			}}
		>
			<Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
			<div className="px-1">
				{currentTab === "players" && <Players />}
				{currentTab === "misc" && <Misc />}
			</div>
		</ScoreboardContext.Provider>
	);
}
