import { MotionConfig } from "motion/react";
import { ProvideScoreboard } from "../ProvideScoreboard";
import { Banner } from "./Banner";
import { CommentarorBar } from "./CommentatorBar";
import { UrlBar } from "./UrlBar";

export const App = () => (
	<ProvideScoreboard>
		<MotionConfig reducedMotion="never" transition={{ duration: 0.2 }}>
			<div className="flex flex-col items-center">
				<UrlBar />
				<Banner />
				<CommentarorBar />
			</div>
		</MotionConfig>
	</ProvideScoreboard>
);
