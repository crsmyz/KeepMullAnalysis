import { OpeningHandDataSet } from "../../interfaces/openingHandData.ts";

export function checkForLessThanFiveLands(handData?: OpeningHandDataSet): boolean {
    let landCount: number = 0;
    // let handArr = hand.split("|");
    // handArr.pop();
    handData?.cardTypeArray.forEach((cardType: string) => {
      if (cardType.includes("Land")) {
        landCount++;
      }
    });
    return landCount < 5 ? true : false;
  }