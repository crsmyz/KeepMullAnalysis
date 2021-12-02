import { OpeningHandDataSet } from "../../../../interfaces/openingHandData.ts";

export function checkForIMSAndOUaT(handData?: OpeningHandDataSet): boolean {
    if (
      handData?.cardNameArray.includes("Forest") ||
      handData?.cardNameArray.includes("Snow-Covered Forest") ||
      handData?.cardNameArray.includes("Bayou") ||
      handData?.cardNameArray.includes("Savannah") ||
      handData?.cardNameArray.includes("Verdant Catacombs") ||
      handData?.cardNameArray.includes("Windswept Heath") ||
      handData?.cardNameArray.includes("Misty Rainforest") ||
      handData?.cardNameArray.includes("Wooded Foothills") ||
      handData?.cardNameArray.includes("Once Upon a Time")) {
        return true;
      } else {
        return false;
      }
  }