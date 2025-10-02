import {
	faArrowDown,
	faArrowUp,
	faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";

interface Props {
	value: number;
	defaultValue: number;
	onChange: (number: number) => void;
	min: number;
	max: number;
}

export const NumberController = ({
	defaultValue,
	max,
	min,
	onChange,
	value,
}: Props) => {
	const increment = () => {
		onChange(Math.min(value + 1, max));
	};

	const decrement = () => {
		onChange(Math.max(value - 1, min));
	};

	return (
		<div
			className="flex rounded bg-black overflow-hidden"
			onWheel={(e) => {
				if (e.deltaY < 0) {
					increment();
				} else {
					decrement();
				}
			}}
		>
			<input
				className="[&::-webkit-inner-spin-button]:appearance-none
					focus:outline-none text-center w-8 text-3xl"
				type="number"
				value={String(value)}
				onChange={(e) => onChange(Number.parseInt(e.target.value, 10))}
				min={min.toString()}
				max={max.toString()}
			/>
			<div
				className="flex flex-col bg-gray-950 *:grow *:w-10 *:border-transparent!
					*:enabled:active:scale-90"
			>
				<Button onClick={increment}>
					<FontAwesomeIcon icon={faArrowUp} />
				</Button>
				<Button onClick={() => onChange(defaultValue)}>
					<FontAwesomeIcon icon={faUndo} />
				</Button>
				<Button onClick={decrement}>
					<FontAwesomeIcon icon={faArrowDown} />
				</Button>
			</div>
		</div>
	);
};
