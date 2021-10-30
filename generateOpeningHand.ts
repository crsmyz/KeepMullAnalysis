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
    loop(deck, hand);
}

function loop(deck: any[], hand: any[]) {
  for (let i = 0; i < 7; i++) {
    const card: any = deck.splice((Math.floor(Math.random() * deck.length)), 1);
    hand.push(card[0]);
  }
}