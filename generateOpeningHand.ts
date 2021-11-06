import { CardObject } from "./interfaces.ts";

export function generateOpeningHand(
  deck: CardObject[],
  hand: CardObject[]
  ): void {
    if (hand && hand.length > 0) {
      for (let i = 0; i < 7; i++) {
        const card: any = hand.shift();
        deck.push(card);
      }
    }
    generateOpeningHandData(deck, hand);
}

function generateOpeningHandData(deck: CardObject[], hand: CardObject[]) {
  for (let i = 0; i < 7; i++) {
    const card: CardObject = deck.splice((Math.floor(Math.random() * deck.length)), 1)[0];
    hand.push(card);
  }
}
