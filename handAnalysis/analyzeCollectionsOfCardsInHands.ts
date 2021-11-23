import { OpeningHandDataSet } from "../interfaces/openingHandData.ts";
import { logPercentageOfHandsWithCollection } from "./logPercentageOfHandsWithCollection.ts";
import { runAllAnalysisParameterFunctions } from "./runAllAnalysisParameterFunctions.ts";

export function analyzeCollectionsOfCardsInHand(openingHandDataSet: OpeningHandDataSet[], iterationLimit: number, ...args: any[]): void {
    let keepCount: number = 0;
    let MulliganCount: number = 0;
    openingHandDataSet.forEach((handData: OpeningHandDataSet) => {
      if(runAllAnalysisParameterFunctions(args, handData)) {
        keepCount++;
      } else {
        MulliganCount++;
      }
    });
    logPercentageOfHandsWithCollection(keepCount, MulliganCount, iterationLimit);
  }