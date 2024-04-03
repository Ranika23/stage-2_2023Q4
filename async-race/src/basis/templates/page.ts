import { createGarageCar, Cars } from "./car";

abstract class Page {
  protected container: HTMLElement;

  static TextObj = {};

  static TextPage = {};

  static Input = {};

  constructor(id: string) {
    this.container = document.createElement("div");
    this.container.id = id;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createTitleHeader(text: string) {
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = text;
    headerTitle.style.color = `rgb(202 233 202)`;
    headerTitle.style.marginTop = `30px`;
    return headerTitle;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createNumberPage(text: string) {
    const numberPage = document.createElement("h2");
    numberPage.innerText = text;
    numberPage.style.color = `rgb(202 233 202)`;
    numberPage.style.marginBottom = `20px`;
    return numberPage;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createFirstInputGarage() {
    const containerInputGarage = document.createElement("div");
    const inputGarage = document.createElement("input");
    const checkboxGarage = document.createElement("input");
    const buttonCreatGarage = document.createElement("button");

    buttonCreatGarage.className = "button-creat-garage";
    inputGarage.className = "input-creat-car";
    checkboxGarage.className = "color-creat-car";
    checkboxGarage.setAttribute("type", "color");
    buttonCreatGarage.innerText = "CREAT";

    containerInputGarage.append(inputGarage);
    containerInputGarage.append(checkboxGarage);
    containerInputGarage.append(buttonCreatGarage);
    return containerInputGarage;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createSecondInputGarage() {
    const containerInputGarage = document.createElement("div");
    const inputGarage = document.createElement("input");
    const checkboxGarage: HTMLInputElement = document.createElement("input");
    const buttonCreatGarage = document.createElement("button");

    buttonCreatGarage.className = "button-update-garage";
    checkboxGarage.className = "checkbox-update-garage";
    inputGarage.className = "input-update-garage";

    checkboxGarage.setAttribute("type", "color");
    buttonCreatGarage.innerText = "UPDATE";
    buttonCreatGarage.setAttribute("disabled", "true");
    checkboxGarage.setAttribute("disabled", "true");
    inputGarage.setAttribute("disabled", "true");

    containerInputGarage.append(inputGarage);
    containerInputGarage.append(checkboxGarage);
    containerInputGarage.append(buttonCreatGarage);
    return containerInputGarage;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createButtonGarage() {
    const containerButtonGarage = document.createElement("div");
    const buttonRaceGarage = document.createElement("button");
    const buttonResetGarage = document.createElement("button");
    const buttonGenerateCarsGarage = document.createElement("button");

    containerButtonGarage.className = "container-button-garage";
    buttonGenerateCarsGarage.className = "generate-button";

    buttonRaceGarage.innerText = "RACE";
    buttonResetGarage.innerText = "RESET";
    buttonGenerateCarsGarage.innerText = "GENERATE CARS";

    containerButtonGarage.append(buttonRaceGarage);
    containerButtonGarage.append(buttonResetGarage);
    containerButtonGarage.append(buttonGenerateCarsGarage);
    return containerButtonGarage;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createTableWinners() {
    const containerTitleTableWinner = document.createElement("div");
    const titleTableNumber = document.createElement("div");
    const titleTableCar = document.createElement("div");
    const titleTableName = document.createElement("div");
    const titleTableWins = document.createElement("div");
    const titleTableBestTime = document.createElement("div");

    containerTitleTableWinner.className = "container-title-table";
    titleTableNumber.innerText = "Number";
    titleTableCar.innerText = "Car";
    titleTableName.innerText = "Name";
    titleTableWins.innerText = "Wins";
    titleTableBestTime.innerText = "Best time(seconds)";

    containerTitleTableWinner.append(titleTableNumber);
    containerTitleTableWinner.append(titleTableCar);
    containerTitleTableWinner.append(titleTableName);
    containerTitleTableWinner.append(titleTableWins);
    containerTitleTableWinner.append(titleTableBestTime);
    return containerTitleTableWinner;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createTableButton() {
    const containerButtonTableWinner = document.createElement("div");
    const buttonTablePrev = document.createElement("button");
    const buttonTableNext = document.createElement("button");

    containerButtonTableWinner.className = "container-button-table";
    buttonTablePrev.innerText = "prev";
    buttonTableNext.innerText = "next";

    buttonTablePrev.className = "prev-button";
    buttonTableNext.className = "next-button";

    containerButtonTableWinner.append(buttonTablePrev);
    containerButtonTableWinner.append(buttonTableNext);

    return containerButtonTableWinner;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createGarageCars(data: Array<Cars>, ind: number) {
    return createGarageCar(data, ind);
  }

  render() {
    return this.container;
  }
}

export default Page;
