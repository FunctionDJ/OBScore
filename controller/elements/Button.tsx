import type { ReactNode } from "react";
import { cn } from "../../shared/cn";

interface Props {
	children: ReactNode;
	className?: string;
	onClick: () => void;
	title?: string;
	active?: boolean;
	disabled?: boolean;
}

export const Button = ({
	children,
	onClick,
	className = "",
	title,
	active = false,
	disabled,
}: Props) => (
	<button
		title={title}
		disabled={disabled}
		onClick={onClick}
		className={cn([
			className,
			`flex gap-1 cursor-pointer items-center justify-center rounded
			transition-all border border-gray-700`,
			"enabled:hover:bg-gray-700",
			`enabled:active:scale-95 enabled:active:border-transparent
			enabled:active:bg-blue-500`,
			"disabled:text-gray-400 disabled:select-none disabled:cursor-not-allowed",
			active
				? `bg-blue-600 border-transparent hover:bg-blue-800
					disabled:bg-blue-900`
				: "bg-gray-950 disabled:bg-gray-900 border-gray-700",
		])}
	>
		{children}
	</button>
);
