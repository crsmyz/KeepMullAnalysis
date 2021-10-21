import { CardObject, PercentByCardType} from "./interfaces";
import { generateOpeningHand } from "./generateOpeningHand";
import { createOpeningHandData } from "./createOpeningHandData";
import { analyzeData } from "./analyzeData";

let deck: CardObject[] = [];
let hand: CardObject[] = [];
let cardTypeList: string[] = [];
let cardNameList: string[] = [];
let cardTypePercentLists: PercentByCardType[] = [];
let cardNamePercentLists: PercentByCardType[] = [];

// generate opening hand data
generateOpeningHand(deck, hand, cardTypeList, cardNameList, cardTypePercentLists, cardNamePercentLists);
// create openening hand data
createOpeningHandData();
// analyzeData
analyzeData();