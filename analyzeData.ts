import { checkForIMSAndOUaT } from "./checkForIMSAndOUaT";
import { checkForLessThanFiveLands } from "./checkForLessThanFiveLands";
import { checkHandQuality } from "./checkHandQuality";

export function analyzeData(): void {
    let keepCount: number = 0;
    let MulliganCount: number = 0;
    this.downloadData.forEach(hand => {
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