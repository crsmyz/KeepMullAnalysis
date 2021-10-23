export function assignAmountOfSiblingCardsInDeck(data: any[], deckListRequestData: any) {
    const cardArrayNumber: string[] = deckListRequestData.match(/\d+/g);
    let cardArrayName: string[] = deckListRequestData.split(/[\d]/);
    let deck: any = [];
    deck = data;
    cardArrayName = cardArrayName.filter(val => val !== '');
    cardArrayName.forEach(val => {
      val.trim();
    });
    cardArrayName.forEach((cardName, index) => {
      deck.map((val: any) => {
        if (cardName.trim() === val.name || val.name.includes(cardName.trim())) {
          val.numberOfInDeck = cardArrayNumber[index];
        }
      });
    });
    return deck;
  }