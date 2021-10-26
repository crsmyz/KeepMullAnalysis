import { CardObject } from "./interfaces.ts";

export function assignRandomCardToHand(deck: CardObject[], hand: CardObject[]): any {
    for (let i = 0; i < 7; i++) {
        const card = deck.splice((Math.floor(Math.random() * deck.length)), 1);
        hand.push(card[0]);
            deck.map((card: any) => {
                if (card.name === card[0].name) {
                    card.numberOfInDeck--;
                }
              });
    }
    return hand;
}