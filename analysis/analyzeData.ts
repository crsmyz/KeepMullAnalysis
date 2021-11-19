// import { checkForIMSAndOUaT } from "./criterion/checkForIMSAndOUaT.ts";
// import { checkForLessThanFiveLands } from "./criterion/checkForLessThanFiveLands.ts";
// import { checkHandQuality } from "./criterion/checkHandQuality.ts";
import { OpeningHandDataSet } from "../interfaces/openingHandData.ts";
import { logKeepAndMullPercentages } from "./logKeepAndMullPercentages.ts";

export function analyzeData(openingHandDataSet: OpeningHandDataSet[], iterationLimit: number, ...args: any[]): void {
    let keepCount: number = 0;
    let MulliganCount: number = 0;
    openingHandDataSet.forEach((handData: OpeningHandDataSet) => {
      args.forEach((paramFunction: any) => {
        if (paramFunction) {
          // TODO: How do you know the exact parameters to pass to each function
          paramFunction();
        }
      })
      // TODO: Turn this into a generic check for a user defined card
      // if (checkForIMSAndOUaT(handData.cardNameArray, handData.cardTypeArray)
      // TODO: Turn this into a generic check for user defined mana requirmeent
      // && checkForLessThanFiveLands(handData.cardTypeArray)
      // TODO: Turn this into a generic check for user defined hand quality
      // && checkHandQuality(handData.cardTypeArray, handData.cardNameArray)
      // if() {
      //   keepCount++;
      // } else {
      //   MulliganCount++;
      // }
    });
    logKeepAndMullPercentages(keepCount, MulliganCount, iterationLimit);
  }