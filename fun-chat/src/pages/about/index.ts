import Pages from "../../basic/pages";
import { getUserSession } from "../local-storage/index";

enum TextAbout {
  title = "FUN CHAT",
  description = "The application was developed as part of the curriculum for the RSSchool JS/FE 2023Q3 course",
  author = "Veronika",
  authorLink = "https://github.com/ranika23",
}

class About extends Pages {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  // eslint-disable-next-line class-methods-use-this
  private creatMsg() {
    const windowMsg = document.createElement("div");
    const msg = document.createElement("div");
    const msgTitle = document.createElement("div");
    const msgDescr = document.createElement("div");
    const msgAuthor = document.createElement("a");
    const button = document.createElement("button");
    const buttonHref = document.createElement("a");

    windowMsg.className = "about-container";
    msg.className = "about-container__msg";
    msgTitle.className = "about-container__msg-title";
    msgAuthor.className = "about-container__msg-author";
    buttonHref.className = "about-container__msg-button-link";
    button.className = "about__button";

    if (getUserSession() === "true") buttonHref.href = "#main";
    if (getUserSession() === "false") buttonHref.href = "#login";

    button.innerText = "BACK";

    msgTitle.innerText = TextAbout.title;
    msgDescr.innerText = TextAbout.description;
    msgAuthor.innerText = TextAbout.author;
    msgAuthor.href = TextAbout.authorLink;
    msg.append(msgTitle);
    msg.append(msgDescr);
    msg.append(msgAuthor);

    buttonHref.append(button);
    windowMsg.append(msg);
    windowMsg.append(buttonHref);

    return windowMsg;
  }

  render() {
    const about = this.creatMsg() as HTMLElement;
    this.container.append(about);
    return this.container;
  }
}

export default About;
