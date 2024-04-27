/* eslint-disable import/no-cycle */
import ErrorPage from "../error/index";
import EventSubmit from "../event/index";

class OpenConnection {
  static UserAuthentication(
    idUser: string,
    nameUser: string,
    passwordUser: string,
  ) {
    const msg: object = {
      id: idUser,
      type: "USER_LOGIN",
      payload: {
        user: {
          login: nameUser,
          password: passwordUser,
        },
      },
    };

    const myWS = new WebSocket("ws://localhost:4000");

    myWS.onopen = () => {
      myWS.send(JSON.stringify(msg));
      setTimeout(() => {
        EventSubmit.clickSendMsg(myWS);
        EventSubmit.clickUserDialog(myWS);
      }, 1000);
    };
    myWS.onmessage = (event) => {
      if (JSON.parse(event.data).type === "ERROR") {
        ErrorPage.ErrorLogIn(JSON.parse(event.data).payload.error);
      } else {
        window.location.href = "#main";

        setTimeout(() => {
          if (JSON.parse(event.data).type === "MSG_SEND") {
            const dateMsg = JSON.parse(event.data).payload.message.datetime;
            const textMsg = JSON.parse(event.data).payload.message.text;
            const statusMsg = JSON.parse(event.data).payload.message.status
              .isDelivered;
            const nameUserLabel =
              document.querySelector(".user-name-label")?.innerHTML;
            const nameFromUser = nameUserLabel
              ?.slice(nameUserLabel?.indexOf(":"))
              .slice(2);
            const fromUser = JSON.parse(event.data).payload.message.from;
            const toUser = document.querySelector(
              ".main-container__section2-article1-name",
            );

            if (fromUser === nameFromUser) {
              EventSubmit.addSendMsg(dateMsg, textMsg, statusMsg);
            } else if (fromUser === toUser?.innerHTML) {
              EventSubmit.addReceivedMsg(fromUser, dateMsg, textMsg);
            }
          } else if (JSON.parse(event.data).type === "MSG_FROM_USER") {
            const windowMsgs = document.querySelector(
              ".main-container__section2-article2",
            );

            const nameUserLabel =
              document.querySelector(".user-name-label")?.innerHTML;
            const nameFromUser = nameUserLabel
              ?.slice(nameUserLabel?.indexOf(":"))
              .slice(2);

            const listMsgs = JSON.parse(event.data).payload.messages;

            if (windowMsgs !== null && listMsgs.length > 0) {
              windowMsgs.innerHTML = "";
            }

            if (windowMsgs !== null && listMsgs.length === 0) {
              windowMsgs.innerHTML =
                "Select the user to send the message to...";
            }

            for (let i = 0; i < listMsgs.length; i += 1) {
              const dateMsg = listMsgs[i].datetime;
              const textMsg = listMsgs[i].text;
              const statusMsg = listMsgs[i].status.isDelivered;

              if (listMsgs[i].from === nameFromUser) {
                EventSubmit.addSendMsg(dateMsg, textMsg, statusMsg);
              } else
                EventSubmit.addReceivedMsg(listMsgs[i].from, dateMsg, textMsg);
            }
          }
        }, 0);
      }
    };
  }

  static UserLogOut(idUser: string, nameUser: string, passwordUser: string) {
    const msg: object = {
      id: idUser,
      type: "USER_LOGOUT",
      payload: {
        user: {
          login: nameUser,
          password: passwordUser,
        },
      },
    };
    const myWS = new WebSocket("ws://localhost:4000");
    myWS.onopen = () => {
      myWS.send(JSON.stringify(msg));
    };
    myWS.onmessage = (event) => {
      if (JSON.parse(event.data).type === "ERROR") {
        ErrorPage.ErrorLogIn(JSON.parse(event.data).payload.error);
      }
    };
    myWS.onclose = () => {
      // eslint-disable-next-line no-console
      console.log("close");
    };
  }

  static GetUsersAuthenticated() {
    const msg: object = {
      id: "1",
      type: "USER_ACTIVE",
      payload: null,
    };

    const myWS = new WebSocket("ws://localhost:4000");

    myWS.onopen = () => {
      myWS.send(JSON.stringify(msg));
    };

    myWS.onmessage = (event) => {
      const userActive = JSON.parse(event.data).payload.users;
      const listUser = document.querySelector("ol");

      for (let i = 0; i < userActive.length; i += 1) {
        const name = userActive[i].login;
        const ulElement = document.createElement("li");
        ulElement.style.listStyleType = "disc";
        ulElement.style.color = "green";
        ulElement.innerText = `${name}`;

        const arr = listUser?.children;
        const nameUserLabel =
          document.querySelector(".user-name-label")?.innerHTML;
        const nameUser = nameUserLabel
          ?.slice(nameUserLabel?.indexOf(":"))
          .slice(2);

        if (arr !== undefined && arr !== null) {
          for (let y = 0; y < arr.length; y += 1) {
            if (arr[y].innerHTML === `${name}`) {
              arr[y].remove();
            }
          }
          if (ulElement.innerHTML !== nameUser) listUser?.prepend(ulElement);
          EventSubmit.searchUser();
        }
      }
    };
  }

  static UsersUnauthorized() {
    const msg: object = {
      id: "1",
      type: "USER_INACTIVE",
      payload: null,
    };

    const myWS = new WebSocket("ws://localhost:4000");

    myWS.onopen = () => {
      myWS.send(JSON.stringify(msg));
    };

    myWS.onmessage = (event) => {
      const userActive = JSON.parse(event.data).payload.users;
      const listUser = document.querySelector("ol");

      for (let i = 0; i < userActive.length; i += 1) {
        const name = userActive[i].login;
        const ulElement = document.createElement("li");
        ulElement.style.listStyleType = "disc";
        ulElement.style.color = "grey";
        ulElement.innerText = `${name}`;
        const arr = listUser?.children;

        const nameUserLabel =
          document.querySelector(".user-name-label")?.innerHTML;
        const nameUser = nameUserLabel
          ?.slice(nameUserLabel?.indexOf(":"))
          .slice(2);

        if (arr !== undefined && arr !== null) {
          for (let y = 0; y < arr.length; y += 1) {
            if (arr[y].innerHTML === `${name}`) {
              arr[y].remove();
            }
          }
          if (ulElement.innerHTML !== nameUser) listUser?.prepend(ulElement);
          EventSubmit.searchUser();
        }
      }
    };
  }

  static getMessageHistory(loginUser: string) {
    const msg: object = {
      id: "1",
      type: "MSG_FROM_USER",
      payload: {
        user: {
          login: loginUser,
        },
      },
    };
    const myWS = new WebSocket("ws://localhost:4000");

    myWS.onopen = () => {
      myWS.send(JSON.stringify(msg));
    };

    myWS.onmessage = (event) => {
      if (JSON.parse(event.data).type === "ERROR") {
        // eslint-disable-next-line no-console
        console.log(JSON.parse(event.data).payload.error);
      }
    };
  }
}

export default OpenConnection;
