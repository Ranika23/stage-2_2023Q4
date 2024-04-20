import Pages from "../../basic/pages";
import { getUser } from "../local-storage/index";
import OpenConnection from "../web-socket/index";

class Main extends Pages {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  // eslint-disable-next-line class-methods-use-this
  private creatContainerMain() {
    const containerMain = document.createElement("div");

    const sectionMain1 = document.createElement("section");
    const sectionMain2 = document.createElement("section");
    const sectionMain3 = document.createElement("section");

    const sectionMain1Articl = document.createElement("article");
    const sectionMain1ButtonTwo = document.createElement("button");

    const sectionMain1ArticlLabel1 = document.createElement("label");
    const sectionMain1ArticlLabel2 = document.createElement("label");

    const sectionMain2Aside = document.createElement("aside");
    const sectionMain2Article = document.createElement("article");

    const sectionMain2AsideInput = document.createElement("input");
    const sectionMain2AsideUl = document.createElement("ol");

    const sectionMain2ArticlArticle1 = document.createElement("article");
    const sectionMain2ArticlArticle2 = document.createElement("article");
    const sectionMain2ArticlForm = document.createElement("form");

    const sectionMain2ArticlArticle1Label = document.createElement("label");
    const sectionMain2ArticlArticle2Label = document.createElement("label");

    const sectionMain2ArticlFormInput = document.createElement("input");
    const sectionMain2ArticlFormButton = document.createElement("button");

    const sectionMain3Label1 = document.createElement("label");
    const sectionMain3Label2 = document.createElement("a");
    const sectionMain3Label3 = document.createElement("label");

    const buttonHref = document.createElement("a");
    const buttonAbout = document.createElement("button");

    buttonAbout.className = "login-form__button-about";
    containerMain.className = "main-container";
    sectionMain1.className = "main-container__section1";
    sectionMain2.className = "main-container__section2";
    sectionMain3.className = "main-container__section3";

    sectionMain1Articl.className = "main-container__section1-article";
    sectionMain1ButtonTwo.className = "main-container__section1-button";

    sectionMain2Aside.className = "main-container__section2-aside";
    sectionMain2Article.className = "main-container__section2-article";

    sectionMain2ArticlArticle1.className = "main-container__section2-article1";
    sectionMain2ArticlArticle2.className = "main-container__section2-article2";
    sectionMain1ButtonTwo.innerText = "EXIT";
    buttonHref.href = "#login";
    sectionMain1ArticlLabel1.innerText = `User: ${getUser().name}`;
    sectionMain1ArticlLabel2.innerText = "FUN CHAT";

    sectionMain2ArticlFormInput.placeholder = "Message...";
    sectionMain2ArticlFormButton.innerText = "Submit";
    sectionMain2ArticlFormButton.setAttribute("disabled", "true");

    sectionMain2AsideInput.placeholder = "Search...";
    sectionMain2ArticlArticle2Label.innerText =
      "Select the user to send the message to...";

    sectionMain3Label1.innerText = "RSSchool";
    sectionMain3Label2.innerText = "Veronika";
    sectionMain3Label2.href = "https://github.com/Ranika23";
    sectionMain3Label3.innerText = "2024";

    buttonAbout.innerText = "ABOUT";
    const buttonAboutHref = document.createElement("a");
    buttonAboutHref.href = "#about";
    buttonAboutHref.append(buttonAbout);

    buttonHref.append(sectionMain1ButtonTwo);

    sectionMain2Aside.append(sectionMain2AsideInput);
    sectionMain2Aside.append(sectionMain2AsideUl);

    sectionMain2ArticlForm.append(sectionMain2ArticlFormInput);
    sectionMain2ArticlForm.append(sectionMain2ArticlFormButton);

    sectionMain2ArticlArticle1.append(sectionMain2ArticlArticle1Label);
    sectionMain2ArticlArticle2.append(sectionMain2ArticlArticle2Label);

    sectionMain2Article.append(sectionMain2ArticlArticle1);
    sectionMain2Article.append(sectionMain2ArticlArticle2);
    sectionMain2Article.append(sectionMain2ArticlForm);

    sectionMain1Articl.append(sectionMain1ArticlLabel1);
    sectionMain1Articl.append(sectionMain1ArticlLabel2);

    sectionMain1.append(sectionMain1Articl);
    sectionMain1.append(buttonAboutHref);
    sectionMain1.append(buttonHref);
    sectionMain2.append(sectionMain2Aside);
    sectionMain2.append(sectionMain2Article);
    sectionMain3.append(sectionMain3Label1);
    sectionMain3.append(sectionMain3Label2);
    sectionMain3.append(sectionMain3Label3);

    containerMain.append(sectionMain1);
    containerMain.append(sectionMain2);
    containerMain.append(sectionMain3);
    return containerMain;
  }

  render() {
    OpenConnection.GetUsersAuthenticated();
    OpenConnection.UsersUnauthorized();
    const main = this.creatContainerMain() as HTMLElement;
    this.container.append(main);
    return this.container;
  }
}

export default Main;
