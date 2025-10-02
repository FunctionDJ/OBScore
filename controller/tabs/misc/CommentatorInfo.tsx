import { AttendeeInput } from "../../elements/AttendeeInput";
import { useScoreboard } from "../../scoreboard-context";

export const CommentatorInfo = ({ slot }: { slot: number }) => {
	const { scoreboard, setScoreboard } = useScoreboard();
	const commentator = scoreboard.commentators[slot];

	return (
		<AttendeeInput
			sponsor={commentator.sponsor ?? ""}
			changeSponsor={(e) => {
				setScoreboard((state) => {
					state.commentators[slot].sponsor = e.target.value;
				});
			}}
			tag={commentator.tag}
			changeTag={(e) => {
				setScoreboard((state) => {
					state.commentators[slot].tag = e.target.value;
				});
			}}
		/>
	);
};
