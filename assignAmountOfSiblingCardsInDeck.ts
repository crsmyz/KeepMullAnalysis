// interfaces
import { CardObject } from "./interfaces.ts";

export function assignAmountOfSiblingCardsInDeck(deck: CardObject[], userDeckList: any) {
    const cardArrayNumber: string[] = userDeckList.match(/\d+/g);
    let cardArrayName: string[] = userDeckList.split(/[\d]/);
    // cardArrayName.filter(val => val !== '');
    // cardArrayName.forEach(val => {
    //   val.trim();
    // });
    // TODO: combine lines 7, 8, and 12 into one array action!!!
    cardArrayName.forEach((cardName, index) => {
      if (cardName !== '') {
        cardName.trim();
        deck.map((card: CardObject) => {
          if (cardName.trim() === card.name || card.name.includes(cardName.trim())) {
            card.numberOfInDeck = cardArrayNumber[index];
          }
          // TODO: call and init each draw percentage here to save more loops time in the next call;
          card.percentageToDraw = +(card?.numberOfInDeck / deck.length).toFixed(6);
        });
      }
    });
    return deck;
  }