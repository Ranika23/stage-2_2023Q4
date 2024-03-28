import Page from "../../basis/templates/page";

class GaragePage extends Page {
  static TextObj = {
    Headline: "Garage",
  };

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createTitleHeader(GaragePage.TextObj.Headline);
    this.container.append(title);
    return this.container;
  }
}

export default GaragePage;
