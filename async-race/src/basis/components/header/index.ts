import Component from "../../templates/components";
// eslint-disable-next-line import/no-cycle
import { IdsPage } from "../../../pages/app/index";

const Buttons = [
  {
    id: IdsPage.StrGaragePage,
    text: "Garage",
  },
  {
    id: IdsPage.StrWinnersPage,
    text: "Winners",
  },
];

class Header extends Component {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  randerPageButton() {
    const pageButtons = document.createElement("div");
    Buttons.forEach((button) => {
      const buttonsContainerHTML = document.createElement("button");
      const buttonsHTML = document.createElement("a");
      buttonsHTML.href = `#${button.id}`;
      buttonsHTML.innerText = button.text;
      buttonsContainerHTML.append(buttonsHTML);
      pageButtons.append(buttonsContainerHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.randerPageButton();
    return this.container;
  }
}

export default Header;
