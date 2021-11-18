import { CardRequest } from "../../interfaces/cardRequest.ts";

export function assignCardsToRequestObjXNumberOfTimes(x: number, card: string | undefined, cardRequest: CardRequest) {
    // assign card "x" number of times to card request object
    for (let i2 = 0; i2 < x; i2++) {
        cardRequest.identifiers.push({ name: card });
    }
}