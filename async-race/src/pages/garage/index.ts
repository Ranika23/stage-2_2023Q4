import Page from "../../basis/templates/page";
import {
  getCountCars,
  movePrevNext,
  clickSelectCar,
  clickNextPage,
  clickPrevPage,
  generateCars,
} from "../../basis/templates/car";
import {
  getNumberPage,
  saveNumberPage,
  clickCreatNewCar,
  clickRemoveNewCar,
  clickStartMove,
  clickStopMove,
} from "../fetch/index";

const enum Count {
  Car = " ",
  Pages = "",
}
class GaragePage extends Page {
  static TextObj = {
    Headline: `Garage (${Count.Car})`,
  };

  static TextPage = {
    Page: `Page #${getNumberPage()}`,
  };

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createTitleHeader(GaragePage.TextObj.Headline);
    const numberStartPage = this.createNumberPage(GaragePage.TextPage.Page);
    const firstInput = this.createFirstInputGarage();
    const secondInput = this.createSecondInputGarage();
    const buttons = this.createButtonGarage();
    const tablePageButton = this.createTableButton();
    // const garageCars = this.createGarageCars();

    numberStartPage.className = "number-page";

    this.container.append(firstInput);
    this.container.append(secondInput);
    this.container.append(buttons);
    this.container.append(title);
    this.container.append(numberStartPage);

    fetch("http://127.0.0.1:3000/garage")
      .then((response) => {
        return response.json();
      })
      .then(() => {
        this.container.append(tablePageButton);
        const numberPage = Number(getNumberPage());
        saveNumberPage(numberPage);
        movePrevNext(numberPage);
        getCountCars();
      });

    clickCreatNewCar();
    clickRemoveNewCar();
    clickSelectCar();
    clickNextPage();
    clickPrevPage();
    clickStartMove();
    clickStopMove();

    generateCars();

    return this.container;
  }
}

export default GaragePage;
