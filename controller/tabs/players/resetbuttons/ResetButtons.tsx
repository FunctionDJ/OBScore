import {
	faLongArrowAltLeft,
	faLongArrowAltRight,
	faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../elements/Button";
import { useScoreboard } from "../../../scoreboard-context";

export const ResetButtons = () => {
	const { setSBClick, setScoreboard } = useScoreboard();

	return (
		<div className="grid grid-cols-2 gap-2 *:w-32">
			<Button
				onClick={setSBClick(({ players }) => {
					const leftTag = players[0].tag;
					const leftSponsor = players[0].sponsor;

					players[0].tag = players[1].tag;
					players[0].sponsor = players[1].sponsor;
					players[1].tag = leftTag;
					players[1].sponsor = leftSponsor;
				})}
			>
				<FontAwesomeIcon icon={faLongArrowAltLeft} />
				Name
				<FontAwesomeIcon icon={faLongArrowAltRight} />
			</Button>
			<Button
				onClick={setSBClick(({ players }) => {
					const leftChar = players[0].character;
					players[0].character = players[1].character;
					players[1].character = leftChar;
				})}
			>
				<FontAwesomeIcon icon={faLongArrowAltLeft} />
				Char
				<FontAwesomeIcon icon={faLongArrowAltRight} />
			</Button>
			<Button
				onClick={setSBClick(({ players }) => {
					const leftPlayer = players[0];
					players[0] = players[1];
					players[1] = leftPlayer;
				})}
			>
				<FontAwesomeIcon icon={faLongArrowAltLeft} />
				All
				<FontAwesomeIcon icon={faLongArrowAltRight} />
			</Button>
			<Button
				onClick={() => {
					if (!window.confirm("Are you sure you want to reset players?")) {
						return;
					}

					setScoreboard((draft) => {
						draft.players = [
							{
								tag: "",
								character: null,
								score: 0,
								sponsor: "",
								side: null,
							},
							{
								tag: "",
								character: null,
								score: 0,
								sponsor: "",
								side: null,
							},
						];
					});
				}}
			>
				<FontAwesomeIcon icon={faUndo} />
				Reset
			</Button>
		</div>
	);
};
