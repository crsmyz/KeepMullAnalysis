import { CardRequest, CardName } from "./interfaces.ts";

// change deck data in scryfall request format
export function formatRequestData(userDeckList: string) {
    // scryfall card request format
    const cardRequest: CardRequest = { identifiers: [] };
    // create array of from user input string
    let strArr: string[] = userDeckList.split("\n");
    // loop through deck to add correct amount of card copies to request
    for (let i = 0; i < strArr.length; i++) {
          if (strArr && strArr[i] !== '' && strArr[i]) {
              const digit: number = +(strArr[i].match(/\d+/g) ?? [''][0]);
              const card: string | undefined = strArr[i].match(/(\D+)/g)?.toString().trim();
              for (let i2 = 0; i2 < digit; i2++) {
                  const cardObj: CardName  = { name: card };
                  cardRequest.identifiers.push(cardObj);
              }
          }
      }
    return cardRequest;
}