// interfaces
import { CardObject } from "./interfaces/cardObject.ts";
import { OpeningHandDataSet } from "./interfaces/openingHandData.ts";

// user defined input
import { userDeckList } from "./userInput/userDeckList.ts";
// sample size for opening hand analysis
import { iterationLimit } from "./userInput/iterationLimit.ts";

// API fetch function
import { fetchDeckData } from "./fetchData/fetchDeckData.ts";

// API parameters
import { apiPostRequest } from "./fetchData/api-request-modules/apiPostRequest.ts";
import { API_URL } from "./fetchData/api-constants/api-constants.ts";
import { CARD_COLLECTION_URL } from "./fetchData/api-constants/api-constants.ts";
import { formatCardRequestData } from "./fetchData/format-request-modules/formatCardRequestData.ts";

// creat opening hand data
import { generateOpeningHand } from "./generateOpeningHands/generateOpeningHand.ts";
// analyse opening hand data
import { analyzeData } from "./analysis/analyzeData.ts";

let deck: CardObject[] = [];
let hand: CardObject[] = [];
let openingHandDataSet: OpeningHandDataSet[] = [];

console.time();
// fetch deck data
deck = await fetchDeckData(userDeckList, apiPostRequest, API_URL, CARD_COLLECTION_URL, formatCardRequestData);
// create opening hand data based on the iteration limit
generateOpeningHand(deck, hand, iterationLimit, openingHandDataSet);
// return count of keeps, mulligans, and percentages for both
analyzeData(openingHandDataSet, iterationLimit);
console.timeEnd();
console.log("DONE!");
