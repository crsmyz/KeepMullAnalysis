import { CardObject } from "../../interfaces/cardObject.ts";
import { assignCardNameAndTypeToArrays } from "./assignCardNameAndTypeToArrays.ts";

export function assignRandomCardsToHandArr(deck: CardObject[], hand: CardObject[], cardNameArray: string[], cardTypeArray: string[]): void {
    for (let i = 0; i < 7; i++) {
      const card: CardObject = deck.splice((Math.floor(Math.random() * deck.length)), 1)[0];
      hand.push(card);
      assignCardNameAndTypeToArrays(card.name, card.type_line, cardNameArray, cardTypeArray)
    }
  }