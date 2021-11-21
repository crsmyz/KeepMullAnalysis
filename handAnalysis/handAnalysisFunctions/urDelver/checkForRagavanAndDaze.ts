import { OpeningHandDataSet } from "../../../interfaces/openingHandData.ts";

export function checkForRagavanAndDaze(handData?: OpeningHandDataSet): boolean {
    if (
      (handData?.cardNameArray.includes("Volcanic Island") ||
      handData?.cardNameArray.includes("Wooded Foothills") ||
      handData?.cardNameArray.includes("Steam Vents") ||
      handData?.cardNameArray.includes("Polluted Delta") ||
      handData?.cardNameArray.includes("Misty Rainforest") ||
      handData?.cardNameArray.includes("Flooded Strand") ||
      handData?.cardNameArray.includes("Bloodstained Mire") ||
      handData?.cardNameArray.includes("Arid Mesa")) &&
      (handData?.cardNameArray.includes("Ragavan, Nimble Pilferer") &&
      handData?.cardNameArray.includes("Daze"))
      ) {
        return true;
      } else {
        return false;
      }
  }