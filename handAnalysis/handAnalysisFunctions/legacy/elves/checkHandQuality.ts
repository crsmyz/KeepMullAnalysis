import { isHandBad } from "./isHandBad.ts";
import { OpeningHandDataSet } from "../../../../interfaces/openingHandData.ts";

export function checkHandQuality(handData: OpeningHandDataSet): boolean {
    let typeCount: any = {land: 0, creature: 0, instant: 0, sorcery: 0, planeswalker: 0};
    handData.cardTypeArray?.forEach((card: any) => {
      if (card.includes("Land")) {
        typeCount.land++;
      } else if (card.includes("Creature")) {
        typeCount.creature++;
      } else if (card.includes("Instant")) {
        typeCount.instant++;
      } else if (card.includes("Sorcery")) {
        typeCount.sorcery++;
      } else {
        typeCount.planeswalker++;
      }
    });
    if (isHandBad(typeCount.planeswalker ,typeCount.instant, typeCount.sorcery, typeCount.creature, handData.cardNameArray)) {
      return true;
    } else {
      return false;
    }
  }