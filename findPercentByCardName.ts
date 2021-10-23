export function findPercentByCardName(value: any, deck: any) {
    let cardNamePercentLists: any = [];
    let cardNameList: any = value;
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