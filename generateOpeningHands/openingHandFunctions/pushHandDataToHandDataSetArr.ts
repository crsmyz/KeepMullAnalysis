import { OpeningHandDataSet } from "../../interfaces/openingHandData.ts";

export function pushHandDataToHandDataSetArr(openingHandDataSet: OpeningHandDataSet[], cardNameList: string[], cardTypeList: string[]): void {
    openingHandDataSet.push({cardNameArray: cardNameList, cardTypeArray: cardTypeList});
}