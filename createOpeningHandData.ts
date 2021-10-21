export function createOpeningHandData (): void {
    let limit: number = 100000;
    for (let i = 0; i < limit; i++) {
      // run sim code here
      this.drawOpeningHand();
      console.log(i);
      let list: string = "";
      let cardType: string = ""
      this.mtgHand.forEach(val => {
        list = list + val.name + "  ";
        cardType = cardType + val.type_line + "|";
      })
      this.downloadData.push({list: list, type: cardType});
      this.resetSim();
    }
    console.log("DONE!")
  }