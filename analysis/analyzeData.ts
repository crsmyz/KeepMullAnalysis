import { checkForIMSAndOUaT } from "./criterion/checkForIMSAndOUaT.ts";
import { checkForLessThanFiveLands } from "./criterion/checkForLessThanFiveLands.ts";
import { checkHandQuality } from "./criterion/checkHandQuality.ts";
import { OpeningHandDataSet } from "../interfaces/openingHandData.ts";

export function analyzeData(openingHandDataSet: OpeningHandDataSet[], iterationLimit: number): void {
    let keepCount: number = 0;
    let MulliganCount: number = 0;
    openingHandDataSet.forEach((handData: OpeningHandDataSet) => {
      // TODO: Turn this into a generic check for a user defined card
      if (checkForIMSAndOUaT(handData.cardNameArray, handData.cardTypeArray)
      // TODO: Turn this into a generic check for user defined mana requirmeent
      && checkForLessThanFiveLands(handData.cardTypeArray)
      // TODO: Turn this into a generic check for user defined hand quality
      && checkHandQuality(handData.cardTypeArray, handData.cardNameArray)
      ) {
        keepCount++;
      } else {
        MulliganCount++;
      }
    });
    logKeepMullAndPercentages(keepCount, MulliganCount, iterationLimit);
  }

  function logKeepMullAndPercentages(k: number, m: number, i: number): void {
    console.log("Keep/Mull Count:");
    console.log({KeepCount: k, MullCount: m});
    console.log("Keep Percentage:");
    console.log((k/i * 100).toFixed(2));
    console.log("Mull Percentage:");
    console.log((m/i * 100).toFixed(2));
  }