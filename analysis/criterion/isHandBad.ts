import { OpeningHandDataSet } from "../../interfaces/openingHandData.ts";

export function isHandBad(typePlaneswalker: any, typeInstant: any, typeSorcery: any, typereature: any, cardNameArray: string[] | undefined): boolean {
    let noCount: any = 0
    cardNameArray?.forEach((val: any) => {
      if (val === "Natural Order") {
        noCount++;
      }
    });
    if (
      cardNameArray?.includes("Craterhoof Behemoth") && cardNameArray?.includes("Archon of Valor's Reach") ||
      !cardNameArray?.includes("Green Sun's Zenith") && typeSorcery >= 2 && typereature <= 1
      // redundant
      // list.includes("Natural Order") && noCount >= 2 && typereature <= 1
    ) {
      return false;
    } else {
      return true;
    }
  }