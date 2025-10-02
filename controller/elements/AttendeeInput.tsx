import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ChangeEventHandler } from "react";

interface Props {
	sponsor: string;
	tag: string;
	changeSponsor: ChangeEventHandler<HTMLInputElement>;
	changeTag: ChangeEventHandler<HTMLInputElement>;
}

export const AttendeeInput = ({
	sponsor,
	tag,
	changeSponsor,
	changeTag,
}: Props) => (
	<div
		className="flex items-center gap-1 rounded bg-gray-950 px-1 border
			border-gray-700"
	>
		<FontAwesomeIcon icon={faUser} fixedWidth />
		<input
			className="w-18 p-0.5"
			value={sponsor}
			onChange={changeSponsor}
			placeholder="Sponsor"
		/>
		<div className="self-stretch border border-gray-700" />
		<input
			className="p-1 min-w-30 grow"
			value={tag}
			onChange={changeTag}
			placeholder="Tag"
		/>
	</div>
);
