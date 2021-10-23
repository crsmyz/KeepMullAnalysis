import { CardObject } from "./interfaces.ts";

export function calculateEachCardDrawPercentage(deck: CardObject[]) {
    if (deck.length <= 75 && deck.length !== 0) {
      deck.forEach((card: any) => {
        card.percentageToDraw = +(card.numberOfInDeck / deck.length).toFixed(6);
      });
    }
    return deck;
}