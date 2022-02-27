import { OpeningHandDataSet } from "../../../../interfaces/openingHandData.ts";

export function isHandBad(typePlaneswalker: any, typeInstant: any, typeSorcery: any, typereature: any, cardNameArray: string[]): boolean {
    let glimpseCount: any[] = cardNameArray?.filter(val => val === "Glimpse of Nature");
    let ouatCount: any[] = cardNameArray?.filter(val => val === "Once Upon a Time");
    let noCount: any[] = cardNameArray?.filter(val => val === "Natural Order");
    let oupheCount: any[] = cardNameArray?.filter(val => val === "Collector Ouphe");
    let enduranceCount: any[] = cardNameArray?.filter(val => val === "Endurance");
    let archonCount: any[] = cardNameArray?.filter(val => val === "Archon of Valor's Reach");
    let hoofCount: any[] = cardNameArray?.filter(val => val === "Craterhoof Behemoth");
    let arborCount: any[] = cardNameArray?.filter(val => val === "Dryad Arbor");
    // cardNameArray?.includes("Craterhoof Behemoth") && cardNameArray?.includes("Archon of Valor's Reach") ||
    // !cardNameArray?.includes("Green Sun's Zenith") && typeSorcery >= 2 && typereature <= 1
    const cardQualityArr: any[] = [];
    cardQualityArr.push(glimpseCount.length > 1);
    cardQualityArr.push(ouatCount.length > 1);
    cardQualityArr.push(noCount.length > 1);
    cardQualityArr.push(oupheCount.length > 1);
    cardQualityArr.push(enduranceCount.length === 1);
    cardQualityArr.push(archonCount.length === 1);
    cardQualityArr.push(hoofCount.length === 1);
    cardQualityArr.push(arborCount.length > 1);
    console.log(cardQualityArr);
    if (cardQualityArr.filter(val => val === true).length > 1) {
      return false;
    } else {
      return true;
    }
  }