import { Dispatch } from "react";
import { Button } from "./elements/Button";

const tabs = ["players", "misc"] as const;
export type Tab = (typeof tabs)[number];

interface Props {
	currentTab: Tab;
	setCurrentTab: Dispatch<Tab>;
}

export const Tabs = ({ currentTab, setCurrentTab }: Props) => (
	<div className="flex gap-1 m-1">
		{tabs.map((tab) => (
			<Button
				key={tab}
				active={currentTab === tab}
				onClick={() => setCurrentTab(tab)}
				className="w-20"
			>
				{tab === "players" ? "Players" : "Misc"}
			</Button>
		))}
	</div>
);
