import Level from "./Level";
import SetTypes, { class as Set } from "./Set";
import CommonScoreboard from "./Common/CommonScoreboard";
import ScoreboardExport from "./Export/ScoreboardExport";
import LevelExport from "./Export/LevelExport";
import SetExport from "./Export/SetExport";

const getSetExport = (scoreboard: Scoreboard) => {
  const setExport = new SetExport();

  if (scoreboard.set === SetTypes.custom) {
    setExport.isCustom = true;
    setExport.text = scoreboard.customSet;
  } else {
    setExport.text = scoreboard.set.long;
  }

  return setExport;
};

const getLevelExport = (scoreboard: Scoreboard) => {
  const levelExport = new LevelExport(
    scoreboard.level.bracket,
    scoreboard.level.round
  );

  levelExport.custom = scoreboard.level.custom;

  if (Level.shouldShowNumber(scoreboard.level)) {
    levelExport.number = scoreboard.level.number;
  }

  return levelExport;
};

export const getSBExport = (scoreboard: Scoreboard): ScoreboardExport => {
  console.log(scoreboard);

  return {
    ...scoreboard,
    level: getLevelExport(scoreboard),
    set: getSetExport(scoreboard)
  };
};

interface Scoreboard extends CommonScoreboard {
  level: Level
  set: Set
  customSet?: string
}

export default Scoreboard;