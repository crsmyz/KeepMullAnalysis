import { calculateEachCardDrawPercentage } from "./calculateEachCardDrawPercentage.ts";
import { assignAmountOfSiblingCardsInDeck } from "./assignAmountOfSiblingCardsInDeck.ts";

export function resetSim(drawnCards: any, deck: any, hand: any, list: any): void {
    if (drawnCards && drawnCards.length > 0) {
      deck = deck.concat(drawnCards);
      drawnCards = [];
    }
    if (hand && hand.length > 0) {
      deck = deck.concat(hand);
      hand = [];
    }
    let mull: number = 6;
    assignAmountOfSiblingCardsInDeck(
      deck,
      list
    );
    calculateEachCardDrawPercentage(deck);
    scriedCard = [];
    cardTypePercentLists = [];
    cardNamePercentLists = [];
    cardTypeList = [];
    cardNameList = [];
  }