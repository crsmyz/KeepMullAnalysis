export function checkForIMSAndOUaT(hand: any, type: any): boolean {
    if (
      hand.includes("Forest") ||
      hand.includes("Snow-Covered Forest") ||
      hand.includes("Bayou") ||
      hand.includes("Savannah") ||
      hand.includes("Verdant Catacombs") ||
      hand.includes("Windswept Heath") ||
      hand.includes("Misty Rainforest") ||
      hand.includes("Wooded Foothills") ||
      hand.includes("Once Upon a Time")) {
        return true;
      } else {
        return false;
      }
  }