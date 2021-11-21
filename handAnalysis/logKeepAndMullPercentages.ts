export function logKeepAndMullPercentages(k: number, m: number, i: number): void {
    console.log("Keep/Mull Count:");
    console.log({KeepCount: k, MullCount: m});
    console.log("Keep Percentage:");
    console.log((k/i * 100).toFixed(2));
    console.log("Mull Percentage:");
    console.log((m/i * 100).toFixed(2));
  }