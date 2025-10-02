import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { NumberController } from "../../elements/NumberController";
import { AttendeeInput } from "../../elements/AttendeeInput";
import {
	ssbuCharacters,
	ssbuCharacterSchema,
} from "../../../backend/schemas/ssbuCharacter";
import { useScoreboard } from "../../scoreboard-context";
import SideComponent from "./SideComponent";
import { isSideRelevant } from "../../../shared/isSideRelevant";

const chars = ["No Character", ...ssbuCharacters.toSorted()];

interface Props {
	playerIndex: number;
	reverse?: boolean;
}

export const PlayerInfo = ({ playerIndex, reverse }: Props) => {
	const { scoreboard, setScoreboard } = useScoreboard();
	const playerState = scoreboard.players[playerIndex];

	return (
		<div
			className={`flex gap-1 rounded border-1 border-black bg-gray-800 p-1
				${reverse ? "flex-row-reverse" : ""}`}
		>
			<div className="flex flex-col gap-1">
				<AttendeeInput
					sponsor={playerState.sponsor}
					changeSponsor={(e) => {
						setScoreboard((draft) => {
							draft.players[playerIndex].sponsor = e.target.value;
						});
					}}
					tag={playerState.tag}
					changeTag={(e) => {
						setScoreboard((draft) => {
							draft.players[playerIndex].tag = e.target.value;
						});
					}}
				/>
				<div className="flex justify-between grow">
					<div className="rounded bg-gray-950 p-1 flex gap-2 items-center">
						<FAIcon icon={faHandPointer} fixedWidth />
						<select
							className="cursor-pointer"
							value={playerState.character?.toString() || "No Character"}
							onChange={(e) => {
								setScoreboard((draft) => {
									if (e.target.value === "No Character") {
										draft.players[playerIndex].character = null;
									} else {
										draft.players[playerIndex].character =
											ssbuCharacterSchema.parse(e.target.value);
									}
								});
							}}
						>
							{chars.map((c) => (
								<option className="text-black" key={c}>
									{c}
								</option>
							))}
						</select>
					</div>
					{isSideRelevant(scoreboard) && (
						<SideComponent playerIndex={playerIndex} />
					)}
				</div>
			</div>
			<NumberController
				defaultValue={0}
				value={parseInt(playerState.score.toString(), 10)}
				max={5}
				min={0}
				onChange={(newScore) => {
					setScoreboard((draft) => {
						draft.players[playerIndex].score = newScore;
					});
				}}
			/>
		</div>
	);
};
