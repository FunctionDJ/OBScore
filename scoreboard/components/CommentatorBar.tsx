import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "motion/react";
import { useScoreboard } from "../context";
import { skewedPolygon } from "../skewedPolygon";
import { AttendeeComponent } from "./Attendee";
import type { Attendee } from "../../backend/schemas/scoreboardSchema";

const CommentatorComponent = ({ attendee }: { attendee: Attendee }) => {
	if (attendee.sponsor === "" && attendee.tag === "") {
		// dont render so that there's no extra gap in flex parent
		return;
	}

	// wrap in span so the flex parent gap is not between sponsor and tag
	return (
		<span>
			<AttendeeComponent attendee={attendee} />
		</span>
	);
};

export const CommentarorBar = () => {
	const scoreboard = useScoreboard();

	const show = !scoreboard.commentators.every(
		(c) => c.tag === "" && c.sponsor === "",
	);

	return (
		<AnimatePresence mode="wait">
			{show && (
				<motion.div
					key={JSON.stringify(scoreboard.commentators)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="mt-1.5 py-0.5 px-4 gap-3 bg-white flex items-center"
					style={{
						clipPath: skewedPolygon([false, false, true, true]),
					}}
				>
					<FontAwesomeIcon icon={faMicrophone} />
					<CommentatorComponent attendee={scoreboard.commentators[0]} />
					<CommentatorComponent attendee={scoreboard.commentators[1]} />
				</motion.div>
			)}
		</AnimatePresence>
	);
};
