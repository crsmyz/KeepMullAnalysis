export function resetSim(deck: any, hand: any, list: any): void {
  if (hand && hand.length > 0) {
    deck = deck.concat(hand);
    hand = [];
  }
}