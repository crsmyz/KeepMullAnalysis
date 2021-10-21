import { isHandBad } from "./isHandBad";

export function checkHandQuality(hand: string, list: any): boolean {
    let typeCount: any = {land: 0, creature: 0, instant: 0, sorcery: 0, planeswalker: 0};
    let handArr = hand.split("|");
    handArr.pop();
    handArr.forEach(card => {
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
    if (isHandBad(typeCount.planeswalker ,typeCount.instant, typeCount.sorcery, typeCount.creature, list)) {
      return true;
    } else {
      return false;
    }
  }