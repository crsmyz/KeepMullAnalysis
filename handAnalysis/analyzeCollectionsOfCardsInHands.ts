import { OpeningHandDataSet } from "../interfaces/openingHandData.ts";
import { logPercentageOfHandsWithCollection } from "./dataLoggers/logPercentageOfHandsWithCollection.ts";
import { runAllAnalysisParameterFunctions } from "./runAllAnalysisParameterFunctions.ts";

export function analyzeCollectionsOfCardsInHand(openingHandDataSet: OpeningHandDataSet[], iterationLimit: number, ...args: any[]): void {
    let handsWithCardCollection: number = 0;
    let handsWithoutCardCollection: number = 0;
    openingHandDataSet.forEach((handData: OpeningHandDataSet) => {
      if(runAllAnalysisParameterFunctions(args, handData)) {
        handsWithCardCollection++;
      } else {
        handsWithoutCardCollection++;
      }
    });
    logPercentageOfHandsWithCollection(handsWithCardCollection, handsWithoutCardCollection, iterationLimit);
  }