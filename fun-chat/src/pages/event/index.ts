import OpenConnection from "../web-socket/index";
import { saveUser, getUser } from "../local-storage/index";

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
      saveUser(
        nameUser,
        `${inputPassword?.value}`,
        `${nameUser}${inputPassword?.value}`,
      );

      OpenConnection.UserAuthentication(
        `1`,
        `${nameUser}`,
        `${inputPassword?.value}`,
      );
    });
  }

  static clickLogOut() {
    document
      .querySelector(".main-container__section1-button")
      ?.addEventListener("click", () => {
        OpenConnection.UserLogOut(
          `${1}`,
          `${getUser().name}`,
          `${getUser().password}`,
        );
      });
  }
}

export default EventSubmit;
