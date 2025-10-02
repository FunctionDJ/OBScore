import {
	brackets,
	type Bracket,
} from "../../../../backend/schemas/bracketSchema";
import { rounds } from "../../../../backend/schemas/roundSchema";
import { Button } from "../../../elements/Button";
import { NumberController } from "../../../elements/NumberController";
import { useScoreboard } from "../../../scoreboard-context";

const bracketButtonLabel = (bracket: Bracket) => {
	switch (bracket) {
		case "Grand Finals":
			return "GF";
		case "Grand Finals Reset":
			return "GFR";
		default:
			return bracket[0];
	}
};

export default function LevelComponent() {
	const { scoreboard, setScoreboard, setSBClick } = useScoreboard();
	const { level } = scoreboard;

	const showCustom = level.bracket === "Custom";
	const showRounds = level.bracket === "Winners" || level.bracket === "Losers";

	return (
		<div className="flex h-20 gap-4">
			<div className="grid grid-cols-3 grid-rows-2 gap-1">
				{brackets.map((bracket) => (
					<Button
						title={bracket}
						onClick={setSBClick((state) => {
							state.level.bracket = bracket;
						})}
						key={bracket}
						className="w-10"
						active={scoreboard.level.bracket === bracket}
					>
						{bracketButtonLabel(bracket)}
					</Button>
				))}
			</div>
			{showCustom && (
				<input
					title="Custom Level"
					className="rounded bg-gray-950 p-2"
					placeholder="Custom Level"
					value={scoreboard.level.custom}
					onChange={(e) => {
						setScoreboard((draft) => {
							draft.level.custom = e.target.value;
						});
					}}
				/>
			)}
			{showRounds && (
				<>
					<div className="grid grid-cols-2 gap-1">
						{rounds.map((round) => (
							<Button
								key={round}
								className="w-10"
								title={round}
								active={scoreboard.level.round === round}
								onClick={setSBClick((draft) => {
									draft.level.round = round;
								})}
							>
								{round[0]}
							</Button>
						))}
					</div>
					{level.round === "Round" && (
						<NumberController
							defaultValue={1}
							value={scoreboard.level.number}
							min={1}
							max={9}
							onChange={(number) => {
								setScoreboard((draft) => {
									draft.level.number = number;
								});
							}}
						/>
					)}
				</>
			)}
		</div>
	);
}
