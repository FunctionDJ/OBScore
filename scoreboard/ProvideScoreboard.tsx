import { type ReactElement } from "react";
import { useScoreboardBackend } from "../shared/useScoreboardBackend";
import { scoreboardClientContext } from "./context";

export const ProvideScoreboard = ({ children }: { children: ReactElement }) => {
	const [scoreboard] = useScoreboardBackend({ subscribe: true });

	return (
		<scoreboardClientContext.Provider value={scoreboard}>
			{children}
		</scoreboardClientContext.Provider>
	);
};
