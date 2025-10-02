import type { Dispatch } from "react";

interface Props {
	className?: string;
	value: string;
	onChange: Dispatch<string>;
	placeholder?: string;
	disabled?: boolean;
}

export const Input = ({
	onChange,
	value,
	className,
	placeholder,
	disabled,
}: Props) => (
	<input
		title={placeholder}
		placeholder={placeholder}
		disabled={disabled}
		value={value}
		onChange={(e) => onChange(e.target.value)}
		className={`px-3 rounded border-gray-700 border placeholder-gray-400
			disabled:placeholder-gray-600 bg-black disabled:text-gray-500
			disabled:cursor-not-allowed transition-colors ${className}`}
	/>
);
