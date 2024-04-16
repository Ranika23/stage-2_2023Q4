import OpenConnection from "../web-socket/index";
import { saveUser } from "../local-storage/index";

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
      const nameUser = inputName?.value as string;
      saveUser(nameUser);

      OpenConnection.UserAuthentication(
        `${nameUser}${inputPassword?.value}`,
        `${nameUser}`,
        `${inputPassword?.value}`,
      );
    });
  }
}

export default EventSubmit;
