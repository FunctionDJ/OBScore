import Brackets, { class as Bracket } from "./Bracket";
import Rounds, { class as Round } from "./Round";
import CommonLevel from "./Common/CommonLevel";

export const createLevel = (bracket: Bracket, round: Round): Level => {
  const level: Level = {
    number: 1,
    bracket
  };

  if (bracket && bracket.code !== "grandFinals") {
    level.round = round;
  }

  return level;
};

export default class Level extends CommonLevel {
  bracket: Bracket
  round?: Round
  template?: string
  custom?: string
  number = 1

  public static isGrandFinals (level: Level): boolean {
    return level.bracket === Brackets.grandFinals;
  }

  public static isCustom (level: Level): boolean {
    return level.bracket === Brackets.custom;
  }

  public static isMidRound (level: Level): boolean {
    return level.round === Rounds.midRound;
  }

  public static shouldShowRound (level: Level): boolean {
    return !this.isGrandFinals(level) && !this.isCustom(level);
  }

  public static shouldShowNumber (level: Level): boolean {
    return (this.isGrandFinals(level) || this.isMidRound(level)) && !this.isCustom(level);
  }
}