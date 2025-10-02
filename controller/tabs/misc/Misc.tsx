import {
	faArrowsAltH,
	faMicrophone,
	faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import { sets } from "../../../backend/schemas/scoreboardSchema";
import { Button } from "../../elements/Button";
import { Input } from "../../elements/Input";
import { useScoreboard } from "../../scoreboard-context";
import { CommentatorInfo } from "./CommentatorInfo";

const Setting = ({
	label,
	children,
}: {
	label: ReactNode;
	children: ReactNode;
}) => {
	return (
		<div className="flex items-center p-1 bg-black rounded border
			border-gray-700">
			<span className="px-2">{label}</span>
			{children}
		</div>
	);
};

export const Misc = () => {
	const { scoreboard, setScoreboard, setSBClick } = useScoreboard();

	return (
		<div className="flex flex-col gap-1">
			<div className="flex gap-1">
				<Input
					className="grow"
					placeholder="Stream Title"
					value={scoreboard.title}
					onChange={(e) => {
						setScoreboard((state) => {
							state.title = e;
						});
					}}
				/>
				<Input
					className="grow"
					placeholder="Bracket URL"
					value={scoreboard.bracketURL}
					onChange={(e) => {
						setScoreboard((state) => {
							state.bracketURL = e;
						});
					}}
				/>
				<Setting label="Set">
					<div className="flex gap-1">
						{sets.map((set) => (
							<Button
								className="p-0.5"
								active={scoreboard.set === set}
								key={set}
								onClick={setSBClick((state) => {
									state.set = set;
								})}
							>
								{set}
							</Button>
						))}
						<Input
							className="p-0.5 w-30"
							placeholder="Custom set"
							disabled={scoreboard.set !== "Custom"}
							value={scoreboard.setCustom}
							onChange={(e) => {
								setScoreboard((state) => {
									state.setCustom = e;
								});
							}}
						/>
					</div>
				</Setting>
			</div>
			<Setting
				label={
					<div className="flex items-center gap-1 *:aspect-square *:p-0.5">
						<FontAwesomeIcon icon={faMicrophone} />
						<Button
							title="Swap"
							onClick={setSBClick((state) => {
								const left = state.commentators[0];
								state.commentators = [state.commentators[1], left];
							})}
						>
							<FontAwesomeIcon icon={faArrowsAltH} />
						</Button>
						<Button
							title="Clear / Reset"
							onClick={setSBClick((scoreboard) => {
								scoreboard.commentators = [
									{
										tag: "",
										sponsor: "",
									},
									{
										tag: "",
										sponsor: "",
									},
								];
							})}
						>
							<FontAwesomeIcon icon={faUndo} />
						</Button>
					</div>
				}
			>
				<div className="flex gap-3 grow *:grow">
					<CommentatorInfo slot={0} />
					<CommentatorInfo slot={1} />
				</div>
			</Setting>
		</div>
	);
};
