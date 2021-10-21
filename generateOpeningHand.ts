import { CardObject, PercentByCardType} from "./interfaces.ts";

let deck: CardObject[] = [];
let hand: CardObject[] = [];
let cardTypeList: string[] = [];
let cardNameList: string[] = [];
let cardTypePercentLists: PercentByCardType[] = [];
let cardNamePercentLists: PercentByCardType[] = [];



function generateOpeningHand(): void {
    assignRandomCardToHand(hand, true);
    calculateEachCardDrawPercentage();
    cardTypePercentLists.length > 0 && cardTypeList.length > 0 ? findPercentByCardType(cardTypeList) : console.log('none');
    cardNamePercentLists.length > 0 && cardNameList.length > 0 ? findPercentByCardName(cardNameList) : console.log('none');
}

function assignRandomCardToHand(hand: any, noMull: boolean): any {
    for (let i = 0; i < 7; i++) {
        const card = deck.splice((Math.floor(Math.random() * deck.length)), 1);
        hand.push(card[0]);
        if (noMull) {
            deck.map((card: any) => {
                if (card.name === card[0].name) {
                    card.numberOfInDeck--;
                }
              });
        }
    }
    return hand;
}

function calculateEachCardDrawPercentage() {
    if (deck.length <= 75 && deck.length !== 0) {
      deck.forEach((card: any) => {
        card.percentageToDraw = +(card.numberOfInDeck / deck.length).toFixed(6);
      });
    }
  }

function findPercentByCardType(value: any) {
    cardTypePercentLists = [];
    cardTypeList = value;
    value.map((cardType: any) => {
      let i: number = 1;
      let cardTypePercent: any = {};
      deck.map((deckItem: any) => {
        if (deckItem.type_line.includes(cardType)) {
          cardTypePercent = {
            name: cardType,
            numberOfInDeck: i++,
            percentageToDraw: 0
          }
        }
      });
      cardTypePercent.percentageToDraw = +(cardTypePercent.numberOfInDeck / deck.length).toFixed(6);
      cardTypePercentLists.push(cardTypePercent);
    });
}

function findPercentByCardName(value: any) {
    cardNamePercentLists = [];
    cardNameList = value;
    value.map((cardName: any) => {
      let i: number = 1;
      let cardTypePercent: any = {};
      deck.map((deckItem: any) => {
        if (deckItem.name === cardName) {
          cardTypePercent = {
            name: cardName,
            numberOfInDeck: i++,
            percentageToDraw: 0
          }
        }
      });
      cardTypePercent.percentageToDraw = +(cardTypePercent.numberOfInDeck / deck.length).toFixed(6);
      cardNamePercentLists.push(cardTypePercent);
    });
  }
