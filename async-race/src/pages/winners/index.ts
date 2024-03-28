import Page from "../../basis/templates/page";

class WinnersPage extends Page {
  static TextObj = {
    Headline: "Winners",
  };

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createTitleHeader(WinnersPage.TextObj.Headline);
    this.container.append(title);
    return this.container;
  }
}

export default WinnersPage;
