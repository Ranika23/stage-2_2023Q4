// eslint-disable-next-line import/no-cycle
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

  static searchUser() {
    const search: HTMLInputElement | null = document.querySelector(
      ".main-container__section2-search",
    );

    function searchUsers() {
      const listUser = document.querySelector("ol")?.children;

      if (listUser !== undefined && search?.value.length !== undefined) {
        if (search?.value.length > 0) {
          for (let i = 0; i < listUser?.length; i += 1) {
            const elem = listUser[i] as HTMLElement;
            const name = elem.innerHTML;
            if (
              name[0].toLowerCase() !== search?.value.toLowerCase()[0] &&
              name[1].toLowerCase() !== search?.value.toLowerCase()[1]
            ) {
              elem.style.display = "none";
            } else if (
              name[0].toLowerCase() !== search?.value.toLowerCase()[0]
            ) {
              elem.style.display = "none";
            }
          }
        } else {
          for (let i = 0; i < listUser?.length; i += 1) {
            const elem = listUser[i] as HTMLElement;
            elem.style.display = "list-item";
          }
        }
      }
    }
    searchUsers();
    search?.addEventListener("input", searchUsers);
  }
}

export default EventSubmit;
