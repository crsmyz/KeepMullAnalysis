import { CardRequest, CardName } from "./interfaces.ts";

// api variables for scryfall
const API_URL: string = 'https://api.scryfall.com/';
const CARD_URL: string = 'cards/named?exact=';
const COLLECTION_URL: string = 'cards/collection';
const DECKLIST_URL: string = API_URL + COLLECTION_URL;

// fetch deck data
export async function fetchDeckData(deckRequest: string) {
    return await apiPostRequest(DECKLIST_URL, formatRequestData(deckRequest));
}

// change deck data in scryfall request format
function formatRequestData(requestData: string) {
    // grab amount of card copies in the decklist
    const cardArrayNumber: string[] | null = requestData.match(/\d+/g);
    // grab list of card names in the decklist
    let cardArrayName: string[] = requestData.split(/[\d]/);
    // check that all elements are valid
    cardArrayName = cardArrayName.filter(val => val !== ''); // could potentially use this in a larger loop to save time
    const cardRequest: CardRequest = { identifiers: [] };
    // cardArrayNumber
    // for each amount of copies
    for (let i=0;i<cardArrayNumber.length;i++) {
        // as long as we have a card name to match # of copies
        if (cardArrayName[i] !== '') {
            // create
            for (let index=0;index<+cardArrayNumber[index]; index++) {
                const cardObj: CardName = { name: cardArrayName[i].substr(1) };
                cardRequest.identifiers.push(cardObj);
            }
        }
    }
    return cardRequest;
}

async function apiPostRequest(url: string, data: any) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}