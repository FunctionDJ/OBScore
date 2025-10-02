import { AnimatePresence, motion } from "motion/react";
import { useScoreboard } from "../context";
import { skewedPolygon } from "../skewedPolygon";
import { invisibleCharacter } from "../invisibleCharacter";

export const UrlBar = () => {
	const scoreboard = useScoreboard();

	return (
		<AnimatePresence mode="wait">
			{
				<motion.span
					key={scoreboard.bracketURL}
					initial={{ opacity: 0 }}
					animate={{ opacity: scoreboard.bracketURL === "" ? 0 : 1 }}
					exit={{ opacity: 0 }}
					className="mt-2 px-6 bg-white flex text-center"
					style={{
						clipPath: skewedPolygon([true, true, false, false]),
					}}
				>
					{scoreboard.bracketURL || invisibleCharacter}
				</motion.span>
			}
		</AnimatePresence>
	);
};
