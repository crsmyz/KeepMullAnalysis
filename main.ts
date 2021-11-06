// interfaces
import { CardObject } from "./interfaces.ts";
// user defined input
import { userDeckList } from "./userDeckList.ts";
// fetch deck data
import { fetchDeckData } from "./fetchData/fetchDeckData.ts";
import { analyzeData } from "./analyzeData.ts";
import { iterationLimit } from "./iterationLimit.ts";
import { generateOpeningHand } from "./generateOpeningHand.ts";

let deck: CardObject[] = [];
let hand: CardObject[] = [];
let downloadData: any[] = [];

// fetch deck data
deck = await fetchDeckData(userDeckList);
// create opening hand data based on the iteration limit
generateFullDataSet();
// return count of keeps, mulligans, and percentages for both
analyzeData(downloadData);
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
    downloadData.push({list: list, type: cardType});
    resetSim(deck, hand, list);
  }
}

function resetSim(deck: any, hand: any, list: any): void {
    if (hand && hand.length > 0) {
      deck = deck.concat(hand);
      hand = [];
    }
  }