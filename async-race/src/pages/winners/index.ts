import Page from "../../basis/templates/page";
import { getNumberPage } from "../fetch/index";
import { getCountCarsWinners } from "../../basis/templates/car";

class WinnersPage extends Page {
  static TextObj = {
    Headline: "Winners (0)",
  };

  static TextPage = {
    Page: `Page #${getNumberPage()}`,
  };

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createTitleHeader(WinnersPage.TextObj.Headline);
    const numberPage = this.createNumberPage(WinnersPage.TextPage.Page);
    const tablePage = this.createTableWinners();
    const tablePageButton = this.createTableButton();
    this.container.append(title);
    this.container.append(numberPage);
    this.container.append(tablePage);
    this.container.append(tablePageButton);

    getCountCarsWinners();
    return this.container;
  }
}

export default WinnersPage;
