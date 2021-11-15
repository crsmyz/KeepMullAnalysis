export function isHandBad(typePlaneswalker: any, typeInstant: any, typeSorcery: any, typereature: any, list: any): boolean {
    let noCount: any = 0
    list.forEach((val: any) => {
      if (val === "Natural Order") {
        noCount++;
      }
    });
    if (
      list.includes("Craterhoof Behemoth") && list.includes("Archon of Valor's Reach") ||
      !list.includes("Green Sun's Zenith") && typeSorcery >= 2 && typereature <= 1
      // redundant
      // list.includes("Natural Order") && noCount >= 2 && typereature <= 1
    ) {
      return false;
    } else {
      return true;
    }
  }