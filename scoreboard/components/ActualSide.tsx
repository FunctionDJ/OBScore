import { AnimatePresence, motion } from "motion/react";
import { isSideRelevant } from "../../shared/isSideRelevant";
import { useScoreboard } from "../context";
import { leftStyle, rightStyle } from "./Side";
import type { Side } from "../../backend/schemas/scoreboardSchema";

interface Props {
	index: number;
}

export const ActualSide = ({ index }: Props) => {
	const scoreboard = useScoreboard();
	const player = scoreboard.players[index];

	const effectiveSide: Side | null =
		scoreboard.level.bracket === "Grand Finals Reset" ? "Losers" : player.side;

	const showSide = isSideRelevant(scoreboard) && effectiveSide !== null;

	return (
		<AnimatePresence mode="wait">
			<motion.span
				key={effectiveSide}
				initial={{ opacity: 0 }}
				animate={{ opacity: showSide ? 1 : 0 }}
				exit={{ opacity: 0 }}
				className="mx-2 border text-2xl font-bold text-gray-100 bg-neutral-600
					w-16 grid place-items-center"
				style={{
					clipPath: index === 0 ? leftStyle.clipPath : rightStyle.clipPath,
				}}
			>
				{effectiveSide?.[0].toUpperCase()}
			</motion.span>
		</AnimatePresence>
	);
};
