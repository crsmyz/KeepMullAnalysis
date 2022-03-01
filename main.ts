// interfaces
import { CardObject } from "./interfaces/cardObject.ts";
import { OpeningHandDataSet } from "./interfaces/openingHandData.ts";

// user defined input
import { userDeckList } from "./userInput/userDeckList.ts";
import { handIterationLimit } from "./userInput/handIterationLimit.ts";

// API fetch function
import { fetchDeckData } from "./fetchData/fetchDeckData.ts";

// API parameters
import { apiPostRequest } from "./fetchData/api-request-modules/apiPostRequest.ts";
import { API_URL } from "./fetchData/api-constants/api-constants.ts";
import { CARD_COLLECTION_URL } from "./fetchData/api-constants/api-constants.ts";
import { formatCardRequestData } from "./fetchData/format-request-modules/formatCardRequestData.ts";

// creat opening hand data
import { useLoopToGenerateOpeningHandData } from "./generateOpeningHands/useLoopToGenerateOpeningHandData.ts";
// analyse opening hand data
import { analyzeKeepAndMullCount } from "./handAnalysis/analyzeKeepAndMullCount.ts";

// functions for Hand Analysis
import { checkForIMSAndOUaT } from "./handAnalysis/handAnalysisFunctions/legacy/elves/checkForIMSAndOUaT.ts";
import { checkForLessThanFiveLands } from "./handAnalysis/handAnalysisFunctions/legacy/elves/checkForLessThanFiveLands.ts";
import { checkHandQuality } from "./handAnalysis/handAnalysisFunctions/legacy/elves/checkHandQuality.ts";

// import { checkForRagavanAndDaze } from "./handAnalysis/handAnalysisFunctions/urDelver/checkForRagavanAndDaze.ts";

import { normalConfidenceInterval } from "./statFunctions/normalConfidenceInterval.ts";
import { zValue } from "./userInput/zValue.ts";

let deck: CardObject[] = [];
const hand: CardObject[] = [];
const openingHandDataSet: OpeningHandDataSet[] = [];

console.time();
// fetch deck data
deck = await fetchDeckData(userDeckList, apiPostRequest, API_URL, CARD_COLLECTION_URL, formatCardRequestData);
// create opening hand data based on the iteration limit
useLoopToGenerateOpeningHandData(deck, hand, handIterationLimit, openingHandDataSet);
// return count of keeps, mulligans, and percentages for both
analyzeKeepAndMullCount(openingHandDataSet, handIterationLimit, checkForIMSAndOUaT, checkForLessThanFiveLands, checkHandQuality);
// normalConfidenceInterval(418154, zValue, handIterationLimit);
console.timeEnd();
console.log("DONE!");