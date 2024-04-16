import Pages from "../../basic/pages";

class ErrorPage extends Pages {
  private errorType: string;

  constructor(id: string, errorType: string) {
    super(id);
    this.errorType = errorType;
  }

  // eslint-disable-next-line class-methods-use-this
  private createTitleHeader() {
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = "Error! The Page was not found or was deleted...";
    headerTitle.style.color = `rgb(202 233 202)`;
    headerTitle.style.marginTop = `30px`;
    headerTitle.style.color = `#ffeded`;
    return headerTitle;
  }

  static ErrorLogIn(error: string) {
    const divError = document.querySelector(".error-login-form") as HTMLElement;
    divError.classList.add("open");
    divError.innerText = error;
  }

  render() {
    const title = this.createTitleHeader();
    this.container.append(title);
    return this.container;
  }
}

export default ErrorPage;
