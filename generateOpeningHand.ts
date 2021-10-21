import { assignRandomCardToHand } from "./assignRandomCardToHand";
import { calculateEachCardDrawPercentage } from "./calculateEachCardDrawPercentage";
import { findPercentByCardType } from "./findPercentByCardType";
import { findPercentByCardName } from "./findPercentByCardName";

import { CardObject, PercentByCardType} from "./interfaces";

export function generateOpeningHand(
  deck: CardObject[],
  hand: CardObject[],
  cardTypeList: string[],
  cardNameList: string[],
  cardTypePercentLists: PercentByCardType[],
  cardNamePercentLists: PercentByCardType[]
  ): void {
    assignRandomCardToHand(deck, hand, true);
    calculateEachCardDrawPercentage(deck);
    cardTypePercentLists.length > 0 && cardTypeList.length > 0 ? findPercentByCardType(cardTypeList) : console.log('none');
    cardNamePercentLists.length > 0 && cardNameList.length > 0 ? findPercentByCardName(cardNameList) : console.log('none');
    // this.disabledReset = false;
    // this.disabledOpeningHand = true;
    // this.disableMulligan = false;
}