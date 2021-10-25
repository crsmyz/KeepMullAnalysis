// interfaces
import { CardObject, PercentByCardType } from "./interfaces.ts";
// user defined input
import { deckList } from "./deckList.ts";
// fetch deck data
import { fetchDeckData } from "./fetchDeckData.ts";
import { calculateEachCardDrawPercentage } from "./calculateEachCardDrawPercentage.ts";
import { assignAmountOfSiblingCardsInDeck } from "./assignAmountOfSiblingCardsInDeck.ts";
import { createOpeningHandData } from "./createOpeningHandData.ts";
import { analyzeData } from "./analyzeData.ts";
import { iterationLimit } from "./iterationLimit.ts";
import { generateOpeningHand } from "./generateOpeningHand.ts";

let deck: CardObject[] = [];
let hand: CardObject[] = [];
let cardTypeList: string[] = [];
let cardNameList: string[] = [];
let cardTypePercentLists: PercentByCardType[] = [];
let cardNamePercentLists: PercentByCardType[] = [];
let cardMap: any
let deckResp: any;
let data: any;
let downloadData: any[] = [];

// fetch deck data
deckResp = await fetchDeckData(deckList);
console.log(deckResp);
// deck = assignAmountOfSiblingCardsInDeck(deckResp.data, deckList);
// deck = calculateEachCardDrawPercentage(deck);
// // create openening hand data


// for (let i = 0; i < iterationLimit; i++) {
//   generateOpeningHand(deck, hand, cardTypeList, cardNameList, cardTypePercentLists, cardNamePercentLists);
//   let list: string = "";
//   let cardType: string = ""
//   hand.forEach((val: any) => {
//     list = list + val.name + "  ";
//     cardType = cardType + val.type_line + "|";
//   })
//   downloadData.push({list: list, type: cardType});
//   resetSim(deck, hand, list);
// }
// console.log("DONE!")
// // analyzeData
// analyzeData(downloadData);



function resetSim(deck: any, hand: any, list: any): void {
    // if (drawnCards && drawnCards.length > 0) {
    //   deck = deck.concat(drawnCards);
    //   drawnCards = [];
    // }
    if (hand && hand.length > 0) {
      deck = deck.concat(hand);
      hand = [];
    }
    let mull: number = 6;
    assignAmountOfSiblingCardsInDeck(
      deck,
      list
    );
    calculateEachCardDrawPercentage(deck);
    cardTypePercentLists = [];
    cardNamePercentLists = [];
    cardTypeList = [];
    cardNameList = [];
  }