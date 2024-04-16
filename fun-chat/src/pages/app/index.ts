import Pages from "../../basic/pages";
import Login from "../login/index";
import Main from "../main/index";
import About from "../about/index";
import ErrorPage from "../error/index";
import EventSubmit from "../event/index";
import { saveUserSession, getUserSession } from "../local-storage/index";

class App {
  private container: HTMLElement;

  private initialPage: Login;

  static renderNewPage(idPage: string) {
    document.body.innerHTML = "";
    let page: Pages | null = null;

    if (idPage === "login") {
      page = new Login(idPage);
      saveUserSession("false");
    } else if (idPage === "main") {
      page = new Main(idPage);
      saveUserSession("true");
    } else if (idPage === "about") {
      page = new About(idPage);
    } else {
      page = new ErrorPage(idPage, "404");
    }

    if (page) {
      const pageHTML = page.render();
      document.body.append(pageHTML);
    }
  }

  static changeRoute() {
    function hashChange() {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
      EventSubmit.submitForm();
    }
    window.addEventListener("hashchange", hashChange);
  }

  constructor() {
    this.container = document.body;
    this.initialPage = new Login("login");
  }

  // eslint-disable-next-line class-methods-use-this
  run() {
    if (getUserSession() === "true") App.renderNewPage("main");
    else if (getUserSession() === "false") App.renderNewPage("login");
    else App.renderNewPage("login");
    App.changeRoute();
    EventSubmit.submitForm();
  }
}

export default App;
