import Page from "../../basis/templates/page";

class WinnersPage extends Page {
  static TextObj = {
    Headline: "Winners",
  };

  static TextPage = {
    Page: "Page#",
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
    return this.container;
  }
}

export default WinnersPage;
