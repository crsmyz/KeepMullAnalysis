import { checkForIMSAndOUaT } from "./checkForIMSAndOUaT.ts";
import { checkForLessThanFiveLands } from "./checkForLessThanFiveLands.ts";
import { checkHandQuality } from "./checkHandQuality.ts";

export function analyzeData(data: any): void {
    let keepCount: number = 0;
    let MulliganCount: number = 0;
    data.forEach((hand: any) => {
      if (checkForIMSAndOUaT(hand.list, hand.type) &&
      checkForLessThanFiveLands(hand.type) &&
      checkHandQuality(hand.type, hand.list)) {
        keepCount++;
      } else {
        MulliganCount++;
      }
    })
    console.log({KeepPercentage: keepCount, MullScore: MulliganCount});
  }