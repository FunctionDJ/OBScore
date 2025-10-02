import { AnimatePresence, motion } from "motion/react";
import type { CSSProperties } from "react";
import { useScoreboard } from "../context";
import { skewedPolygon } from "../skewedPolygon";
import { AttendeeComponent } from "./Attendee";
import { Fading } from "./Fading";
import type { Bracket } from "../../backend/schemas/bracketSchema";
import { isSideRelevant } from "../../shared/isSideRelevant";
import { ActualSide } from "./ActualSide";

export const leftStyle = {
	clipPath: skewedPolygon([false, true, false, true]),
	marginLeft: "calc(var(--banner-skew) * -1",
} satisfies CSSProperties;

export const rightStyle = {
	clipPath: skewedPolygon([true, false, true, false]),
	marginRight: "calc(var(--banner-skew) * -1",
} satisfies CSSProperties;

export const Side = ({ index }: { index: number }) => {
	const scoreboard = useScoreboard();
	const player = scoreboard.players[index];

	const showSide = isSideRelevant(scoreboard) && player.side !== null;

	return (
		<>
			<div
				style={index === 0 ? leftStyle : rightStyle}
				className={`w-14 bg-neutral-700 text-white h-full flex text-3xl
					justify-center items-center`}
			>
				<Fading t={player.score} />
			</div>
			<AnimatePresence mode="wait">
				<motion.img
					className="w-12 h-auto my-0 mx-2 drop-shadow-xs drop-shadow-black/75"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					key={player.character}
					src={
						player.character === null
							? "/!blank.png"
							: `/ssbuCharacters/${player.character}.png`
					}
				/>
			</AnimatePresence>
			<span className="flex font-bold text-2xl">
				<AnimatePresence mode="wait">
					<motion.span
						key={player.sponsor + player.tag}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<AttendeeComponent attendee={player} />
					</motion.span>
				</AnimatePresence>
			</span>
			<span
				style={{ flexDirection: index === 0 ? "row-reverse" : "row" }}
				className="grow flex h-full"
			>
				<ActualSide index={index} />
			</span>
		</>
	);
};
