import { CardObject } from "../interfaces/cardObject.ts";
import { OpeningHandDataSet } from "../interfaces/openingHandData.ts";
import { returnCardsInHandToDeck } from "./openingHandFunctions/returnCardsInHandToDeck.ts";
import { assignRandomCardsToHandArr } from "./openingHandFunctions/assignRandomCardsToHandArr.ts";
import { moveCardsInHandBackToDeck } from "./openingHandFunctions/moveCardsInHandBackToDeck.ts";
import { pushHandDataToHandDataSetArr } from "./openingHandFunctions/pushHandDataToHandDataSetArr.ts";

export function useLoopToGenerateOpeningHandData(
  deck: CardObject[],
  hand: CardObject[],
  iterationLimit: number,
  openingHandDataSet: OpeningHandDataSet[]
  ): void {
    // let cardNameArray: string[] = [];
    // let cardTypeArray: string[] = [];
    for (let i = 0; i < iterationLimit; i++) {
      let cardNameArray: string[] = [];
      let cardTypeArray: string[] = [];
      if (hand && hand.length > 0) {
        moveCardsInHandBackToDeck(deck, hand);
        // cardNameArray = [];
        // cardTypeArray = [];
        // resetCardNameAndCardTypeArr(cardNameArray, cardTypeArray);
      }
      assignRandomCardsToHandArr(deck, hand, cardNameArray, cardTypeArray);
      pushHandDataToHandDataSetArr(openingHandDataSet, cardNameArray, cardTypeArray);
      returnCardsInHandToDeck(deck, hand);
  }
}
