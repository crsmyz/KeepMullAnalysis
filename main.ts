import { CardObject, PercentByCardType } from "./interfaces.ts";
import { deckList } from "./deckList.ts";
import { fetchDeckData } from "./fetchDeckData.ts";
import { initCardNameSelector } from "./initCardNameSelector.ts";
import { calculateEachCardDrawPercentage } from "./calculateEachCardDrawPercentage.ts";
// import { generateOpeningHand } from "./generateOpeningHand";
// import { createOpeningHandData } from "./createOpeningHandData";
// import { analyzeData } from "./analyzeData";

let deck: CardObject[] = [];
let hand: CardObject[] = [];
let cardTypeList: string[] = [];
let cardNameList: string[] = [];
let cardTypePercentLists: PercentByCardType[] = [];
let cardNamePercentLists: PercentByCardType[] = [];

// fetch deck data
let obj = await fetchDeckData(deckList);
initCardNameSelector();
deck = assignAmountOfSiblingCardsInDeck(obj.data, deckList);
calculateEachCardDrawPercentage();
// generate opening hand data
// generateOpeningHand(deck, hand, cardTypeList, cardNameList, cardTypePercentLists, cardNamePercentLists);
// create openening hand data
// createOpeningHandData();
// analyzeData
// analyzeData();