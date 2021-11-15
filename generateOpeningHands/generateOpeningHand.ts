import { CardObject } from "./interfaces/cardObject.ts";
import { returnCardsInHandToDeck } from "./returnCardsInHandToDeck.ts";
import { OpeningHandDataSet } from "./interfaces/openingHandData.ts";

export function generateOpeningHand(
  deck: CardObject[],
  hand: CardObject[],
  iterationLimit: number,
  openingHandDataSet: OpeningHandDataSet[]
  ): void {
    let cardNameArray: string[] = [];
    let cardTypeArray: string[] = [];
    for (let i = 0; i < iterationLimit; i++) {
      if (hand && hand.length > 0) {
        moveCardsInHandBackToDeck(deck, hand);
        cardNameArray = [];
        cardTypeArray = [];
      }
      for (let i = 0; i < 7; i++) {
        const card: CardObject = deck.splice((Math.floor(Math.random() * deck.length)), 1)[0];
        hand.push(card);
        if (card.name && card.type_line) {
          cardNameArray.push(card.name);
          cardTypeArray.push(card.type_line);
        }
      }
    openingHandDataSet.push({cardNameArray: cardNameArray, cardTypeArray: cardTypeArray});
    returnCardsInHandToDeck(deck, hand);
  }
}


function moveCardsInHandBackToDeck(deck: CardObject[], hand: CardObject[]) {
  for (let i = 0; i < 7; i++) {
    const card: any = hand.shift();
    deck.push(card);
  }
}
