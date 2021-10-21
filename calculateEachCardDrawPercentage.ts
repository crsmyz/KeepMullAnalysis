import { CardObject } from "./interfaces";

export function calculateEachCardDrawPercentage(deck: CardObject[]) {
    if (deck.length <= 75 && deck.length !== 0) {
      deck.forEach((card: any) => {
        card.percentageToDraw = +(card.numberOfInDeck / deck.length).toFixed(6);
      });
    }
}