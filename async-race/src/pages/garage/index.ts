import Page from "../../basis/templates/page";

class GaragePage extends Page {
  static TextObj = {
    Headline: "Garage",
  };

  static TextPage = {
    Page: "Page#",
  };

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createTitleHeader(GaragePage.TextObj.Headline);
    const numberPage = this.createNumberPage(GaragePage.TextPage.Page);
    const firstInput = this.createFirstInputGarage();
    const secondInput = this.createSecondInputGarage();
    const buttons = this.createButtonGarage();

    numberPage.className = "number-page";

    this.container.append(firstInput);
    this.container.append(secondInput);
    this.container.append(buttons);
    this.container.append(title);
    this.container.append(numberPage);
    return this.container;
  }
}

export default GaragePage;
