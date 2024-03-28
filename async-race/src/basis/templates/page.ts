abstract class Page {
  protected container: HTMLElement;

  static TextObj = {};

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

  render() {
    return this.container;
  }
}

export default Page;
