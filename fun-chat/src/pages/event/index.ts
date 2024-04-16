import OpenConnection from "../web-socket/index";

class EventSubmit {
  static submitForm() {
    document.querySelector(".login-form")?.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputName: HTMLInputElement | null = document.querySelector(
        ".login-form__name-input input",
      );
      const inputPassword: HTMLInputElement | null = document.querySelector(
        ".login-form__password-input input",
      );
      OpenConnection.UserAuthentication(
        `${inputName?.value}${inputPassword?.value}`,
        `${inputName?.value}`,
        `${inputPassword?.value}`,
      );
    });
  }
}

export default EventSubmit;
