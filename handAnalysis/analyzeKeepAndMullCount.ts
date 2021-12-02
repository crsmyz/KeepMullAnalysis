import { OpeningHandDataSet } from "../interfaces/openingHandData.ts";
import { logKeepAndMullPercentages } from "./dataLoggers/logKeepAndMullPercentages.ts";
import { runAllAnalysisParameterFunctions } from "./runAllAnalysisParameterFunctions.ts";
import { normalConfidenceInterval } from "../statFunctions/normalConfidenceInterval.ts";
import { zValue } from "../userInput/zValue.ts";

export function analyzeKeepAndMullCount(openingHandDataSet: OpeningHandDataSet[], iterationLimit: number, ...args: any[]): void {
    let keepCount: number = 0;
    let MulliganCount: number = 0;
    openingHandDataSet.forEach((handData: OpeningHandDataSet) => {
      if(runAllAnalysisParameterFunctions(args, handData)) {
        keepCount++;
      } else {
        MulliganCount++;
      }
    });
    logKeepAndMullPercentages(keepCount, MulliganCount, iterationLimit);
    normalConfidenceInterval(keepCount, zValue, iterationLimit);
  }