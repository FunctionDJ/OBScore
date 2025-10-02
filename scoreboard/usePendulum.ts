import { useEffect, useState } from "react";

export const usePendulum = () => {
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setFlag((f) => !f);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return flag;
};
