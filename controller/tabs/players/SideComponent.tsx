import {
	sides,
	type Scoreboard,
	type Side,
} from "../../../backend/schemas/scoreboardSchema";
import { Button } from "../../elements/Button";
import { useScoreboard } from "../../scoreboard-context";

interface Props {
	playerIndex: number;
}

export default function SideComponent({ playerIndex }: Props) {
	const { scoreboard, setScoreboard } = useScoreboard();
	const currentPlayer = scoreboard.players[playerIndex];
	const isReset = scoreboard.level.bracket === "Grand Finals Reset";

	const handleOnClick = (side: Side) => {
		setScoreboard((draft) => {
			const currentPlayerDraft = draft.players[playerIndex];

			if (currentPlayerDraft.side === side) {
				currentPlayerDraft.side = null;
			} else {
				currentPlayerDraft.side = side;
			}

			if (side === "Winners") {
				draft.players[playerIndex === 0 ? 1 : 0].side = "Losers";
			}
		});
	};

	return (
		<div className="flex gap-1 *:w-10">
			{sides.map((side) => {
				const active = isReset
					? side === "Losers"
					: currentPlayer.side === side;

				return (
					<Button
						disabled={scoreboard.level.bracket === "Grand Finals Reset"}
						key={side}
						onClick={() => handleOnClick(side)}
						title={`${side} Side`}
						active={active}
					>
						{side[0]}
					</Button>
				);
			})}
		</div>
	);
}
