export function findPercentByCardType(value: any, deck: any) {
    let cardTypePercentLists: any[] = [];
    let cardTypeList: any = value;
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