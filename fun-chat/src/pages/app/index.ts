import Pages from "../../basic/pages";
import Login from "../login/index";
import Main from "../main/index";
import ErrorPage from "../error/index";

class App {
  private container: HTMLElement;

  private initialPage: Login;

  static renderNewPage(idPage: string) {
    document.body.innerHTML = "";
    let page: Pages | null = null;

    if (idPage === "login") {
      page = new Login(idPage);
    } else if (idPage === "main") {
      page = new Main(idPage);
    } else {
      page = new ErrorPage(idPage, "404");
    }

    if (page) {
      const pageHTML = page.render();
      document.body.append(pageHTML);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private changeRoute() {
    function hashChange() {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    }
    window.addEventListener("hashchange", hashChange);
  }

  constructor() {
    this.container = document.body;
    this.initialPage = new Login("login");
  }

  // eslint-disable-next-line class-methods-use-this
  run() {
    App.renderNewPage("login");
    this.changeRoute();
  }
}

export default App;
