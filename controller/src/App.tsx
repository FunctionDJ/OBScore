import * as React from "react";
import "./App.scss";

import Players from "./tabs/players/Players";
import { CustomTabs } from "./CustomTabs";
import Meta from "./tabs/meta/Meta";
import Scoreboard from "./model/Scoreboard";
import { createScoreboard, ScoreboardContext, ScoreboardContextInt } from "./scoreboard-context";

export function App (): JSX.Element {
  const [scoreboard, setScoreboard] = React.useState<Scoreboard>(
    createScoreboard()
  );

  const contextValue = React.useMemo<ScoreboardContextInt>(() => ({
    scoreboard,
    setScoreboard
  }), [scoreboard, setScoreboard]);

  const [tab, setTab] = React.useState("players");

  return (
    <ScoreboardContext.Provider value={contextValue}>
      <CustomTabs tab={tab} setTab={setTab}/>
      <div className="tab-content" id="nav-tabContent">
        {tab === "players" && <Players/>}
        {tab === "meta" && <Meta/>}
      </div>
    </ScoreboardContext.Provider>
  );
}