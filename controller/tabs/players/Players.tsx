import { Fragment } from "react";
import LevelComponent from "./level/Level";
import { PlayerInfo } from "./PlayerInfo";
import { ResetButtons } from "./resetbuttons/ResetButtons";

export const Players = () => (
	<Fragment>
		<div className="flex flex-wrap gap-2">
			<PlayerInfo playerIndex={0} />
			<ResetButtons />
			<PlayerInfo playerIndex={1} reverse />
			<LevelComponent />
		</div>
	</Fragment>
);
