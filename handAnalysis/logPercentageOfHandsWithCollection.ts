export function logPercentageOfHandsWithCollection(k: number, m: number, i: number, ...args: any[]): void {
    console.log("Percentage of the Time with:  " + card1 + card2 + card3);
    console.log({percentWith: k, percentWithout: m});
    console.log("Percent With:");
    console.log((k/i * 100).toFixed(2));
    console.log("Percent Without:");
    console.log((m/i * 100).toFixed(2));
  }