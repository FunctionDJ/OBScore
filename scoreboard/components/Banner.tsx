import type { Level, Scoreboard } from "../../backend/schemas/scoreboardSchema";
import { useScoreboard } from "../context";
import { skewedPolygon } from "../skewedPolygon";
import { Fading } from "./Fading";
import { Side } from "./Side";

const getLevelString = (level: Level) => {
	if (level.bracket === "Winners" || level.bracket === "Losers") {
		if (level.round === "Round") {
			return `${level.bracket} ${level.round} ${level.number}`;
		}

		return `${level.bracket} ${level.round}`;
	}

	if (level.bracket === "Custom") {
		return level.custom;
	}

	return level.bracket;
};

const getFullLevelString = (scoreboard: Scoreboard) => {
	const levelString = getLevelString(scoreboard.level);

	if (scoreboard.set === "Custom" && scoreboard.setCustom === "") {
		return levelString;
	}

	const effectiveSet =
		scoreboard.set === "Custom" ? scoreboard.setCustom : scoreboard.set;

	return `${levelString} — ${effectiveSet}`;
};

export const Banner = () => {
	const scoreboard = useScoreboard();

	return (
		<div
			className="w-[1100px] mt-1.5 h-12 bg-[#ccc] flex *:bg-white *:flex
				*:items-center"
		>
			<div
				className="grow basis-0
					[clip-path:polygon(-100%_0,calc(100%-var(--banner-skew))_0,100%_100%,-100%_100%)]"
			>
				<Side index={0} />
			</div>

			<div
				className="w-2xs flex-col text-xl justify-center m-[0_-3px] leading-5"
				style={{
					clipPath: skewedPolygon([false, false, true, true]),
				}}
			>
				<Fading t={scoreboard.title} className="font-bold" />
				<Fading t={getFullLevelString(scoreboard)} />
			</div>

			<div
				className="flex-row-reverse grow basis-0
					[clip-path:polygon(var(--banner-skew)_0,200%_0,200%_100%,0_100%)]"
			>
				<Side index={1} />
			</div>
		</div>
	);
};
