import { CardRequest, CardName } from "./interfaces.ts";

// change deck data in scryfall request format
export function formatRequestData(userDeckList: string) {
    // grab amount of card copies in the decklist
    const cardArrayNumber: string[] = userDeckList.match(/\d+/g) ?? [''];
    // grab list of card names in the decklist
    let cardArrayName: string[] = userDeckList.split(/[\d]/);
    // check that all elements are valid
    cardArrayName = cardArrayName.filter(val => val !== ''); // could potentially use this in a larger loop to save time
    const cardRequest: CardRequest = { identifiers: [] };
    // for each amount of copies
    for (let i=0;i<cardArrayNumber.length;i++) {
        // as long as we have a card name to match # of copies
        if (cardArrayName[i] !== '') {
            // create extra card copies
            for (let index=0;index<+cardArrayNumber[index]; index++) {
                const cardObj: CardName = { name: cardArrayName[i].substr(1) };
                cardRequest.identifiers.push(cardObj);
            }
        }
    }
    // return the re-formatted scryfall request
    return cardRequest;
}