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

  static clickUserDialog() {
    const listUser = document.querySelector("ol");
    const titleDialog = document.querySelector(
      ".main-container__section2-article1",
    );
    const submitSendMsg: HTMLButtonElement | null = document.querySelector(
      ".main-container__section2-article-form button",
    );

    listUser?.addEventListener("click", (e) => {
      if (titleDialog !== null) titleDialog.innerHTML = "";
      const elem = e.target as HTMLElement;
      const name = document.createElement("div");
      const status = document.createElement("div");
      name.className = "main-container__section2-article1-name";
      name.innerHTML = elem.innerHTML;

      if (elem.style.color === "green") {
        status.style.color = "green";
        status.innerHTML = "Online";
      }
      if (elem.style.color === "grey") {
        status.style.color = "grey";
        status.innerHTML = "Offline";
      }

      titleDialog?.append(name);
      titleDialog?.append(status);

      if (submitSendMsg !== null) submitSendMsg.disabled = false;
    });
  }

  static clickSendMsg(myWS: WebSocket) {
    const submitSendMsg = document.querySelector(
      ".main-container__section2-article-form button",
    );

    function sendMessage(e: Event) {
      e.preventDefault();

      const toName = document.querySelector(
        ".main-container__section2-article1-name",
      )?.innerHTML;
      const textSendMsg = document.querySelector(
        ".main-container__section2-article-form input",
      ) as HTMLInputElement;

      const sendMsg: object = {
        id: "1",
        type: "MSG_SEND",
        payload: {
          message: {
            to: toName,
            text: textSendMsg.value,
          },
        },
      };

      myWS.send(JSON.stringify(sendMsg));

      textSendMsg.value = "";
    }
    submitSendMsg?.addEventListener("click", sendMessage);
  }

  static addSendMsg(dateMsg: number, textMsg: string, statusMsg: boolean) {
    const windowMsgs = document.querySelector(
      ".main-container__section2-article2",
    );
    const windowMsgsLabel = document.querySelector(
      ".main-container__section2-article2 label",
    );

    const containerMsg = document.createElement("div");
    const containInf = document.createElement("div");
    const fromUser = document.createElement("div");
    const date = document.createElement("div");
    const msg = document.createElement("div");
    const status = document.createElement("div");

    containerMsg.className = "container-send-text-msgs";
    containInf.className = "container-send-text-msgs-inf";
    date.className = "container-send-text-msgs-date";
    status.className = "container-send-text-msgs-status";
    msg.className = "send-text-msgs";

    function formatDate() {
      const newDate = new Date(dateMsg);
      const month = newDate.getMonth() + 1;
      const day = newDate.getUTCDate();
      const year = newDate.getFullYear();
      const time = newDate.toLocaleTimeString("ru-RU");

      let resultMonth = `${month}`;
      if (month < 10) resultMonth = `0${month}`;
      return `${day}.${resultMonth}.${year}, ${time}`;
    }

    fromUser.innerText = "you";
    date.innerText = formatDate();
    msg.innerText = textMsg;
    if (statusMsg === false) status.innerText = "undelivered";
    else if (statusMsg === true) status.innerText = "delivered";

    windowMsgsLabel?.remove();

    containInf.append(fromUser);
    containInf.append(date);
    containerMsg.append(containInf);
    containerMsg.append(msg);
    containerMsg.append(status);
    windowMsgs?.append(containerMsg);
  }
}

export default EventSubmit;
