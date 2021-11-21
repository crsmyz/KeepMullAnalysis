import { OpeningHandDataSet } from "../interfaces/openingHandData.ts";

export function runAllAnalysisParameterFunctions(args: any[], handData: OpeningHandDataSet): boolean {
    let boolArr: boolean[] = [];
    args.forEach((paramFunction: any) => {
      if (paramFunction) {
        boolArr.push(paramFunction(handData));
      }
    });
    return !boolArr.includes(false);
  }