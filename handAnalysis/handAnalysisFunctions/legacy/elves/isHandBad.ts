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
    const cardCountIsGreaterThanThree: any[] = [];
    cardQualityArr.push(glimpseCount.length > 1);
    cardQualityArr.push(ouatCount.length > 1);
    cardQualityArr.push(noCount.length > 1);
    cardQualityArr.push(oupheCount.length > 1);
    cardQualityArr.push(enduranceCount.length === 1);
    cardQualityArr.push(archonCount.length === 1);
    cardQualityArr.push(hoofCount.length === 1);
    cardQualityArr.push(arborCount.length > 1);

    // Hand does NOT contain "Craterhoof Behemoth" AND "Archon of Valor's Reach"
    // Hand does NOT contain 2 or more non Green Sun's Zenith Sorceries AND 1 or less creatures
    // Hand does NOT contain 2 or more Natural Orders AND 1 or less creatures

    cardCountIsGreaterThanThree.push(glimpseCount.length > 2);
    cardCountIsGreaterThanThree.push(ouatCount.length > 2);
    cardCountIsGreaterThanThree.push(noCount.length > 2);
    if (cardQualityArr.filter(val => val === true).length > 2 || cardCountIsGreaterThanThree.filter(val => val === true).length > 0) {
      return false;
    } else {
      return true;
    }
  }