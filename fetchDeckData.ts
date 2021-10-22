import { CardRequest, CardName } from "./interfaces.ts";

export async function fetchDeckData(deckRequest: string) {
    return await requestDataFromScryfall(formatRequestData(deckRequest));
}

function formatRequestData(data: string) {
    const cardArrayNumber: string[] | null = data.match(/\d+/g);
    let cardArrayName: string[] = data.split(/[\d]/);
    cardArrayName = cardArrayName.filter(val => val !== '');
    const cardRequest: CardRequest = {
        identifiers: []
    };
    cardArrayNumber?.forEach((card, index) => {
        if (cardArrayName[index] !== '') {
            for (let i = 0; i < +cardArrayNumber[index]; i++) {
                const cardObj: CardName = {
                    name: cardArrayName[index].substr(1)
                };
                cardRequest.identifiers.push(cardObj);
            }
        }
    });

    return cardRequest;
}

async function deckPostRequest(url: string, data: any) {
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

async function requestDataFromScryfall(deckRequest: any) {
    const API_URL: string = 'https://api.scryfall.com/';
    const CARD_URL: string = 'cards/named?exact=';
    const COLLECTION_URL: string = 'cards/collection';
    const DECKLIST_URL: string = API_URL + COLLECTION_URL;
    return await deckPostRequest(DECKLIST_URL, deckRequest);
}
