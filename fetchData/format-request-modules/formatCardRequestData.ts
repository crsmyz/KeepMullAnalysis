import { CardRequest } from "../../interfaces/cardRequest.ts";
import { assignCardsToRequestObjXNumberOfTimes } from "./assignCardsToRequestObjXNumberOfTimes.ts";

// change deck data in scryfall request format
export function formatCardRequestData(userDeckList: string): CardRequest {
    // scryfall card request format
    const cardRequest: CardRequest = { identifiers: [] };
    // create array of from user input string
    const strArr: string[] = userDeckList.split("\n");
    // loop through deck to add correct amount of card copies to request
    for (let i = 0; i < strArr.length; i++) {
          if (strArr && strArr[i] !== '' && strArr[i]) {
              // find amount of card
              const digit: number = +(strArr[i].match(/\d+/g) ?? [''][0]);
              // find card name
              const card: string | undefined = strArr[i].match(/(\D+)/g)?.toString().trim();
              assignCardsToRequestObjXNumberOfTimes(digit, card, cardRequest);
          }
      }
    return cardRequest;
}