import Pages from "../../basic/pages";

enum FormValidation {
  NamePattern = `^\\s*[A-Z][a-z]+('[a-z]+|-[A-Z][a-z]+)?\\s*$`,
  PasswordPattern = `(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,
  NameTitle = "Indicate the first letter with an uppercase letter. Use only letters of the English alphabet and hyphen. Capitalize the first letter after the hyphen.",
  PasswordTitle = "Must contain at least one numeral, one capital and one small letter of the Latin alphabet and be at least 8 characters long",
}

class Login extends Pages {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  // eslint-disable-next-line class-methods-use-this
  private creatLoginForm() {
    const containerLoginForm = document.createElement("div");
    const error = document.createElement("div");
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
    const button = document.createElement("input");
    const buttonAbout = document.createElement("button");

    containerLoginForm.className = "container-login-form";
    error.className = "error-login-form";
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
    buttonAbout.className = "login-form__button-about";
    buttonAbout.classList.add("login");

    button.setAttribute("type", "submit");
    button.setAttribute("value", "START");
    const buttonHref = document.createElement("a");
    buttonHref.href = "#main";
    buttonHref.append(button);

    buttonAbout.innerText = "ABOUT";
    const buttonAboutHref = document.createElement("a");
    buttonAboutHref.href = "#about";
    buttonAboutHref.append(buttonAbout);

    legend.innerText = "Authorization";
    fieldset.append(legend);

    nameTitle.innerText = "Name";
    name.append(nameTitle);
    nameInputPlace.placeholder = "Enter Name";
    nameInputPlace.setAttribute("required", "");
    nameInputPlace.setAttribute("minlength", "3");
    nameInputPlace.setAttribute("pattern", FormValidation.NamePattern);
    nameInputPlace.title = FormValidation.NameTitle;
    nameInputPlace.setAttribute("autocomplete", "off");
    nameInput.append(nameInputPlace);
    name.append(nameInput);
    fieldset.append(name);

    passwordTitle.innerText = "Password";
    password.append(passwordTitle);
    passwordInputPlace.placeholder = "Enter Password";
    passwordInputPlace.setAttribute("required", "");
    passwordInputPlace.setAttribute("pattern", FormValidation.PasswordPattern);
    passwordInputPlace.title = FormValidation.PasswordTitle;
    passwordInputPlace.setAttribute("autocomplete", "off");
    passwordInput.append(passwordInputPlace);
    password.append(passwordInput);
    fieldset.append(password);

    form.append(fieldset);
    form.append(button);

    containerLoginForm.append(form);
    containerLoginForm.append(buttonAboutHref);
    containerLoginForm.append(error);

    return containerLoginForm;
  }

  render() {
    const loginForm = this.creatLoginForm() as HTMLElement;
    this.container.append(loginForm);
    return this.container;
  }
}

export default Login;
