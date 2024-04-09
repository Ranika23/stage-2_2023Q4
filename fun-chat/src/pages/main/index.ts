import Pages from "../../basic/pages";

class Main extends Pages {
  // private container: HTMLElement;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  // eslint-disable-next-line class-methods-use-this
  private creatButton() {
    const button = document.createElement("button");
    const buttonHref = document.createElement("a");
    buttonHref.href = "#login";
    buttonHref.innerText = "finish";
    button.append(buttonHref);
    return button;
  }

  render() {
    const main = this.creatButton() as HTMLButtonElement;
    this.container.append(main);
    return this.container;
  }
}

export default Main;
