import { CardObject } from "../../interfaces/cardObject.ts";

export function returnCardsInHandToDeck(deck: CardObject[], hand: CardObject[]): void {
  if (hand && hand.length > 0) {
    deck = deck.concat(hand);
    hand = [];
  }
}