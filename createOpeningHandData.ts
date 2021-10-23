import { } from "./generateOpeningHand.ts";
import { CardObject, PercentByCardType} from "./interfaces.ts";
import { generateOpeningHand } from "./generateOpeningHand.ts";
import { resetSim } from "./resetSim.ts";

export function createOpeningHandData (deck: CardObject[],
  hand: CardObject[],
  cardTypeList: string[],
  cardNameList: string[],
  cardTypePercentLists: PercentByCardType[],
  cardNamePercentLists: PercentByCardType[],
  list: any): any {
    let limit: number = 100000;
    let downloadData: any[] = [];
    for (let i = 0; i < limit; i++) {
      // run sim code here
      // generate opening hand data
      generateOpeningHand(deck, hand, cardTypeList, cardNameList, cardTypePercentLists, cardNamePercentLists);
      console.log(i);
      let list: string = "";
      let cardType: string = ""
      hand.forEach((val: any) => {
        list = list + val.name + "  ";
        cardType = cardType + val.type_line + "|";
      })
      downloadData.push({list: list, type: cardType});
      resetSim(event: any, drawnCards: any, deck, hand, list: any);
    }
    console.log("DONE!")
    return downloadData;
  }