import {
  clickCreatNewCar,
  clickRemoveNewCar,
  clickStartMove,
  clickStopMove,
} from "../fetch/index";
import {
  clickSelectCar,
  clickNextPage,
  clickPrevPage,
  generateCars,
} from "../../basis/templates/car";

import Page from "../../basis/templates/page";
import GaragePage from "../garage/index";
import WinnersPage from "../winners/index";
import ErrorPage from "../error/index";
// eslint-disable-next-line import/no-cycle
import Header from "../../basis/components/header/index";

export const enum IdsPage {
  StrGaragePage = "garage-page",
  StrWinnersPage = "winners-page",
}

class App {
  private container: HTMLElement;

  private static defaultIdPage: string = "current-page";

  private initialPage: GaragePage;

  private header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultIdPage}`);
    if (currentPageHTML) currentPageHTML.remove();

    let page: Page | null = null;

    if (idPage === IdsPage.StrGaragePage) {
      page = new GaragePage(idPage);
    } else if (idPage === IdsPage.StrWinnersPage) {
      page = new WinnersPage(idPage);
    } else {
      page = new ErrorPage(idPage, "404");
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultIdPage;
      pageHTML.className = App.defaultIdPage;
      document.body.append(pageHTML);

      clickCreatNewCar();
      clickRemoveNewCar();
      clickSelectCar();
      clickNextPage();
      clickPrevPage();
      clickStartMove();
      clickStopMove();

      generateCars();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private enableRouteChange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.container = document.body;
    this.initialPage = new GaragePage(IdsPage.StrGaragePage);
    this.header = new Header("header", "header-container");
  }

  run() {
    this.container.append(this.header.render());
    App.renderNewPage(IdsPage.StrGaragePage);
    this.enableRouteChange();
  }
}

// Main, Statistics

export default App;
