export function checkForLessThanFiveLands(hand: any): boolean {
    let landCount: any = 0;
    let handArr = hand.split("|");
    handArr.pop();
    handArr.forEach(card => {
      if (card.includes("Land")) {
        landCount++;
      }
    });
    return landCount < 5 ? true : false;
  }