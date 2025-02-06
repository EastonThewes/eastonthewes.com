// types/bowling.ts
export interface BowlerHistory {
    ScratchHandicapFlag: number;
    GamesToDisplay: number;
    LeagueID: number;
    HandicapTotal: number;
    WeekNum: number;
    DateBowled: string; // Or Date if parsed
    AverageBeforeBowling: number;
    AverageAfterBowling: number;
    HandicapBeforeBowling: number;
    SeriesTotal: number;
    GameNum1: number;
    ScoreType1: string;
    Outcome1: string;
    Score1: number;
    GameNum2: number;
    ScoreType2: string;
    Outcome2: string;
    Score2: number;
    GameNum3: number;
    ScoreType3: string;
    Outcome3: string;
    Score3: number;
    CountOfGames: number;
    HandicapSeriesTotal: number;
    TodaysAverage: number;
    PlusMinusAverage: number;
  }
  
// types/bowling.ts
export interface BowlerHistorySummary {
    WeekNum: number;
    DateBowled: string; // Can be Date if parsed
    AverageAfterBowling: number;
    SeriesTotal: number;
    Score1: number;
    Score2: number;
    Score3: number;
    TodaysAverage: number;
  }
  