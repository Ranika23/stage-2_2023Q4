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
    return headerTitle;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createNumberPage(text: string) {
    const numberPage = document.createElement("h2");
    numberPage.innerText = text;
    return numberPage;
  }

  // eslint-disable-next-line class-methods-use-this
  protected createFirstInputGarage() {
    const containerInputGarage = document.createElement("div");
    const inputGarage = document.createElement("input");
    const checkboxGarage = document.createElement("input");
    const buttonCreatGarage = document.createElement("button");
    checkboxGarage.setAttribute("type", "checkbox");
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
    const checkboxGarage = document.createElement("input");
    const buttonCreatGarage = document.createElement("button");
    checkboxGarage.setAttribute("type", "checkbox");
    buttonCreatGarage.innerText = "UPDATE";
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

    buttonRaceGarage.innerText = "RACE";
    buttonResetGarage.innerText = "RESET";
    buttonGenerateCarsGarage.innerText = "GENERATE CARS";

    containerButtonGarage.append(buttonRaceGarage);
    containerButtonGarage.append(buttonResetGarage);
    containerButtonGarage.append(buttonGenerateCarsGarage);
    return containerButtonGarage;
  }

  render() {
    return this.container;
  }
}

export default Page;
