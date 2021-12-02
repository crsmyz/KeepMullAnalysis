export function normalConfidenceInterval(p: number, z: number, sample: number): any {
    let pHat: number = p /= Math.pow(10, (p.toString().length)); // TODO: Change power equation to work with 500,000
    console.log("P Hat:   " + pHat);
    let sd = z * Math.sqrt((pHat * (1 - pHat)) / sample);
    console.log({ lowerBound: ((pHat - sd) * 100).toFixed(4), value: (pHat * 100).toFixed(4), upperBound: ((pHat + sd) * 100).toFixed(4) });
}