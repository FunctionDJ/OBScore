import type { Attendee } from "../../backend/schemas/scoreboardSchema";

interface Props {
	attendee: Attendee;
}

export const AttendeeComponent = ({ attendee }: Props) => (
	<>
		{attendee.sponsor.trim() !== "" && (
			<span className="text-gray-500">{attendee.sponsor} | </span>
		)}
		<span>{attendee.tag}</span>
	</>
);
