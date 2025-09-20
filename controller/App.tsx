import { useMemo, useState } from "react";
import "./App.scss";
import { CustomTabs } from "./CustomTabs";
import Scoreboard from "./model/Scoreboard";
import {
  createScoreboard,
  ScoreboardContext,
  ScoreboardContextInt,
} from "./scoreboard-context";
import Meta from "./tabs/meta/Meta";
import Players from "./tabs/players/Players";

export function App() {
  const [scoreboard, setScoreboard] = useState<Scoreboard>(createScoreboard());

  const contextValue = useMemo<ScoreboardContextInt>(
    () => ({
      scoreboard,
      setScoreboard,
    }),
    [scoreboard, setScoreboard]
  );

  const [tab, setTab] = useState("players");

  return (
    <ScoreboardContext.Provider value={contextValue}>
      <CustomTabs tab={tab} setTab={setTab} />
      <div className="tab-content" id="nav-tabContent">
        {tab === "players" && <Players />}
        {tab === "meta" && <Meta />}
      </div>
    </ScoreboardContext.Provider>
  );
}
