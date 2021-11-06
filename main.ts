// interfaces
import { CardObject, KeepMullData } from "./interfaces.ts";
// user defined input
import { userDeckList } from "./userDeckList.ts";
// sample size for opening hand analysis
import { iterationLimit } from "./iterationLimit.ts";
// fetch deck data function
import { fetchDeckData } from "./fetchData/fetchDeckData.ts";
// analyze data function
import { analyzeData } from "./analyzeData.ts";
import { generateOpeningHand } from "./generateOpeningHand.ts";

let deck: CardObject[] = [];
let hand: CardObject[] = [];
let downloadData: any[] = [];

console.time();
// fetch deck data
deck = await fetchDeckData(userDeckList);
// create opening hand data based on the iteration limit
generateFullDataSet();
// return count of keeps, mulligans, and percentages for both
analyzeData(downloadData, iterationLimit);
console.log("DONE!");


function generateFullDataSet() {
  for (let i = 0; i < iterationLimit; i++) {
    let list = "";
    let cardType = "";
    generateOpeningHand(deck, hand);
    for (let index = 0; index < hand.length; index++) {
      list = list + hand[index].name + "  ";
      cardType = cardType + hand[index].type_line + "|";
    }
    downloadData.push({card: list, cardType: cardType});
    resetSim(deck, hand, list);
  }
}

function resetSim(deck: any, hand: any, list: any): void {
    if (hand && hand.length > 0) {
      deck = deck.concat(hand);
      hand = [];
    }
  }
