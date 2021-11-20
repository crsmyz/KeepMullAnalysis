import { OpeningHandDataSet } from "../interfaces/openingHandData.ts";
import { logKeepAndMullPercentages } from "./logKeepAndMullPercentages.ts";

export function analyzeData(openingHandDataSet: OpeningHandDataSet[], iterationLimit: number, ...args: any[]): void {
    let keepCount: number = 0;
    let MulliganCount: number = 0;
    openingHandDataSet.forEach((handData: OpeningHandDataSet) => {
      if(runAllAnalysisParameterFunctions(args, handData).find(bool => bool === false)) {
        keepCount++;
      } else {
        MulliganCount++;
      }
    });
    logKeepAndMullPercentages(keepCount, MulliganCount, iterationLimit);
  }

  function runAllAnalysisParameterFunctions(args: any[], handData: OpeningHandDataSet): boolean[] {
    let boolArr: boolean[] = [];
    args.forEach((paramFunction: any) => {
      if (paramFunction) {
        boolArr.push(paramFunction(handData));
      }
    });
    return boolArr;
  }