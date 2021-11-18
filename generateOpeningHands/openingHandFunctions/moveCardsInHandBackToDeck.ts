import { CardObject } from "../../interfaces/cardObject.ts";

export function moveCardsInHandBackToDeck(deck: CardObject[], hand: CardObject[]) {
    for (let i = 0; i < 7; i++) {
      const card: any = hand.shift();
      deck.push(card);
    }
  }