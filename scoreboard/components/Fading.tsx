import { AnimatePresence, motion } from "motion/react";
import { invisibleCharacter } from "../invisibleCharacter";

export const Fading = ({
	t,
	className,
}: {
	t: string | number;
	className?: string;
}) => (
	<AnimatePresence mode="wait">
		<motion.span
			key={t}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={className}
		>
			{t === "" ? invisibleCharacter : t}
		</motion.span>
	</AnimatePresence>
);
