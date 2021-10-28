// import { assignRandomCardToHand } from "./assignRandomCardToHand.ts";
// import { calculateEachCardDrawPercentage } from "./calculateEachCardDrawPercentage.ts";
// import { findPercentByCardType } from "./findPercentByCardType.ts";
// import { findPercentByCardName } from "./findPercentByCardName.ts";
import { CardObject, PercentByCardType} from "./interfaces.ts";

export function generateOpeningHand(
  deck: CardObject[],
  hand: CardObject[],
  cardTypeList: string[],
  cardNameList: string[],
  cardTypePercentLists: PercentByCardType[],
  cardNamePercentLists: PercentByCardType[]
  ): void {
    if (hand && hand.length > 0) {
      for (let i = 0; i < 7; i++) {
        const card: any = hand.shift();
        deck.push(card);
      }
      loop(deck, hand, false);
    } else {
      loop(deck, hand, true);
    }
    // assignRandomCardToHand(deck, hand);
    // let d = calculateEachCardDrawPercentage(deck);
    // if (cardTypePercentLists.length > 0 && cardTypeList.length > 0) {
    //   findPercentByCardType(cardTypeList, deck)
    // }
    // if (cardNamePercentLists.length > 0 && cardNameList.length > 0) {
    //   findPercentByCardName(cardNameList, deck)
    // }
}

function loop(deck: any[], hand: any[], removeFromDeck: boolean) {
  for (let i = 0; i < 7; i++) {
    const card: any = deck.splice((Math.floor(Math.random() * deck.length)), 1);
    hand.push(card[0]);
    if (removeFromDeck) {
      console.log("inside deck mapper");
      deck.map((value: any) => {
        if (value.name === card[0].name) {
          value.numberOfInDeck--;
        }
      });
    }
  }
}