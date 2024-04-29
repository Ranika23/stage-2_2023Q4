import Page from "../../basis/templates/page";

class GaragePage extends Page {
  static TextObj = {
    Headline: "Garage (4)",
  };

  static TextPage = {
    Page: "Page #1",
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
    const tablePageButton = this.createTableButton();
    // const garageCars = this.createGarageCars();

    numberPage.className = "number-page";

    this.container.append(firstInput);
    this.container.append(secondInput);
    this.container.append(buttons);
    this.container.append(title);
    this.container.append(numberPage);
    fetch("http://127.0.0.1:3000/garage")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let i = 0; i < 4; i += 1) {
          this.container.append(this.createGarageCars(data, i));
        }
        this.container.append(tablePageButton);
      });
    return this.container;
  }
}

export default GaragePage;