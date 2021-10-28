import { CardObject } from "./interfaces.ts";

// TODO: call on each card within a previous loop;
export function calculateEachCardDrawPercentage(deck: CardObject[]) {
    if (deck.length <= 75 && deck.length !== 0) {
      for (let i=0;i<deck.length;i++) {
        deck[i].percentageToDraw = +(deck[i].numberOfInDeck / deck.length).toFixed(6);
      }
    }
    return deck;
}