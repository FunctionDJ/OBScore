const skewVar = "var(--banner-skew)";
const negSkewVar = `calc(100% - ${skewVar})`;

export const skewedPolygon = (skew: [boolean, boolean, boolean, boolean]) => {
	const values = [
		(skew[0] ? skewVar : "0") + " 0",
		(skew[1] ? negSkewVar : "100%") + " 0",
		(skew[2] ? negSkewVar : "100%") + " 100%",
		(skew[3] ? skewVar : "0") + " 100%",
	];

	return `polygon(${values.join(",")})`;
};
