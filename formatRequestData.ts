import { CardRequest, CardName } from "./interfaces.ts";

// change deck data in scryfall request format
export function formatRequestData(userDeckList: string) {
    // console.log(userDeckList);
    // grab amount of card copies in the decklist
    // const cardArrayNumber: string[] = userDeckList.match(/\d+/g) ?? [''];
    // grab list of card names in the decklist
    // let cardArrayName: string[] = userDeckList.split(/[\d]/);
    // check that all elements are valid
    // cardArrayName = cardArrayName.filter(val => val !== ''); // could potentially use this in a larger loop to save time
    const cardRequest: CardRequest = { identifiers: [] };
    // TODO: System is flawed at creating card copies
    // for each amount of copies
    // for (let i = 0; i < cardArrayNumber.length; i++) {
    //     // as long as we have a card name to match # of copies
    //     if (cardArrayName[i] !== '') {
    //         // create extra card copies
    //         for (let index = 0; index < +cardArrayNumber[index]; index++) {
    //             const cardObj: CardName = { name: cardArrayName[i].substr(1) };
    //             cardRequest.identifiers.push(cardObj);
    //         }
    //     }
    // }
    let strArr: string[] = userDeckList.split("\n");
    for (let i = 0; i < strArr.length; i++) {
          if (strArr[i] !== '') {
              let digit: number = +(strArr[i].match(/\d+/g) ?? [''][0]);
              const card: any = strArr[i].(/[\D]/, " ");
              console.log(card);
              for (let i2 = 0; i2 < digit; i2++) {
                  const cardObj: any = { name: card };
                  cardRequest.identifiers.push(cardObj);
              }
          }
      }
    // return the re-formatted scryfall request
    return cardRequest;
}