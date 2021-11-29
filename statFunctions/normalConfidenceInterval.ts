export function normalConfidenceInterval(p: number, z: number, sample: number): any {
    let pHat: number = p /= Math.pow(10, 6);
    let sd = z * Math.sqrt((pHat * (1 - pHat)) / sample);
    console.log({ lowerBound: ((pHat - sd) * 100).toFixed(3), value: (pHat * 100).toFixed(3), upperBound: ((pHat + sd) * 100).toFixed(3) });
}