import { generateOpeningHand } from "./generateOpeningHand.ts";
import { resetSim } from "./resetSim.ts";
import { KeepMullData, CardObject } from "./interfaces.ts";

export function generateOpeningHandDataSet(deck: CardObject[], hand: CardObject[], iterationLimit: number, keepMullData: KeepMullData[]) {
    for (let i = 0; i < iterationLimit; i++) {
      let cardStr = "";
      let cardTypeStr = "";
      generateOpeningHand(deck, hand);
      for (let index = 0; index < hand.length;index++) {
        cardStr = cardStr + hand[index].name + "  ";
        cardTypeStr = cardTypeStr + hand[index].type_line + "|";
      }
      keepMullData.push({card: cardStr, cardType: cardTypeStr});
      resetSim(deck, hand, cardStr);
    }
  }