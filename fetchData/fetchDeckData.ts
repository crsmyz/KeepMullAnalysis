import { formatRequestData } from "./formatRequestData.ts";
import { apiPostRequest } from "./apiPostRequest.ts";

// api variables for scryfall
const API_URL: string = 'https://api.scryfall.com/';
// const CARD_URL: string = 'cards/named?exact=';
const COLLECTION_URL: string = 'cards/collection';
const DECKLIST_URL: string = API_URL + COLLECTION_URL;

// fetch deck data
export async function fetchDeckData(userDeckList: string) {
    return await apiPostRequest(DECKLIST_URL, formatRequestData(userDeckList)).then(resp => resp.data);
}