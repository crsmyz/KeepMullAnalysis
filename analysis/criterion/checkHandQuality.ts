import { isHandBad } from "./isHandBad.ts";

export function checkHandQuality(hand: string[], list: string[]): boolean {
    let typeCount: any = {land: 0, creature: 0, instant: 0, sorcery: 0, planeswalker: 0};
    hand.forEach(card => {
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