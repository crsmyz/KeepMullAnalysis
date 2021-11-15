export function checkForLessThanFiveLands(hand: string[]): boolean {
    let landCount: any = 0;
    // let handArr = hand.split("|");
    // handArr.pop();
    hand.forEach((card: string) => {
      if (card.includes("Land")) {
        landCount++;
      }
    });
    return landCount < 5 ? true : false;
  }