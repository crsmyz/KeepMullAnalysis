import { checkForIMSAndOUaT } from "./checkForIMSAndOUaT.ts";
import { checkForLessThanFiveLands } from "./checkForLessThanFiveLands.ts";
import { checkHandQuality } from "./checkHandQuality.ts";

export function analyzeData(data: any, iterationLimit: number): void {
    let keepCount: number = 0;
    let MulliganCount: number = 0;
    data.forEach((hand: any) => {
      if (checkForIMSAndOUaT(hand.card, hand.cardType) 
      // && checkForLessThanFiveLands(hand.cardType) 
      // && checkHandQuality(hand.cardType, hand.card)
      ) {
        keepCount++;
      } else {
        MulliganCount++;
      }
    });
    console.log("Keep/Mull Count:");
    console.log({KeepCount: keepCount, MullCount: MulliganCount});
    console.log("Keep Percentage:");
    console.log((keepCount/iterationLimit * 100).toFixed(2));
    console.log("Mull Percentage:");
    console.log((MulliganCount/iterationLimit * 100).toFixed(2));
  }