import Pages from "../../basic/pages";

class Login extends Pages {
  // private container: HTMLElement;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  // eslint-disable-next-line class-methods-use-this
  private creatButton() {
    const form = document.createElement("form");
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const name = document.createElement("div");
    const password = document.createElement("div");
    const nameTitle = document.createElement("label");
    const passwordTitle = document.createElement("label");
    const nameInput = document.createElement("div");
    const passwordInput = document.createElement("div");
    const nameInputPlace = document.createElement("input");
    const passwordInputPlace = document.createElement("input");
    const button = document.createElement("button");

    form.className = "login-form";
    fieldset.className = "login-form__window";
    legend.className = "login-form__title";
    name.className = "login-form__name";
    password.className = "login-form__password";
    nameTitle.className = "login-form__title";
    passwordTitle.className = "login-form__title";
    nameInput.className = "login-form__name-input";
    passwordInput.className = "login-form__password-input";
    button.className = "login-form__button";

    const buttonHref = document.createElement("a");
    buttonHref.href = "#main";
    buttonHref.innerText = "START";
    button.append(buttonHref);

    legend.innerText = "Authorization";
    fieldset.append(legend);

    nameTitle.innerText = "Name";
    name.append(nameTitle);
    nameInputPlace.placeholder = "Enter Name";
    nameInput.append(nameInputPlace);
    name.append(nameInput);
    fieldset.append(name);

    passwordTitle.innerText = "Password";
    password.append(passwordTitle);
    passwordInputPlace.placeholder = "Enter Password";
    passwordInput.append(passwordInputPlace);
    password.append(passwordInput);
    fieldset.append(password);

    form.append(fieldset);
    form.append(button);

    return form;
  }

  render() {
    const button = this.creatButton() as HTMLFormElement;
    this.container.append(button);
    return this.container;
  }
}

export default Login;
