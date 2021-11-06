// interfaces
import { CardObject, KeepMullData } from "./interfaces.ts";
// user defined input
import { userDeckList } from "./userDeckList.ts";
// sample size for opening hand analysis
import { iterationLimit } from "./iterationLimit.ts";
// fetch deck data function
import { fetchDeckData } from "./fetchDeckData.ts";
// analyze data function
import { analyzeData } from "./analyzeData.ts";
import { generateOpeningHandDataSet } from "./generateOpeningHandDataSet.ts";

let deck: CardObject[] = [];
let hand: CardObject[] = [];
let keepMullData: KeepMullData[] = [];

console.time();
// fetch deck data
deck = await fetchDeckData(userDeckList);
generateOpeningHandDataSet(deck, hand, iterationLimit, keepMullData);
analyzeData(keepMullData, iterationLimit);
console.timeEnd();