import Page from "../../basis/templates/page";

class ErrorPage extends Page {
  private errorType: string;

  static TextObj = "Error! The Page was not found or was deleted";

  constructor(id: string, errorType: string) {
    super(id);
    this.errorType = errorType;
  }

  render() {
    const title = this.createTitleHeader(ErrorPage.TextObj);
    this.container.append(title);
    return this.container;
  }
}

export default ErrorPage;
