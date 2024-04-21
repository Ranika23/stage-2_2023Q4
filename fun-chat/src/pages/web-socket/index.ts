import ErrorPage from "../error/index";
// import { saveUserSession } from "../local-storage/index";

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
    };
    myWS.onmessage = (event) => {
      if (JSON.parse(event.data).type === "ERROR") {
        ErrorPage.ErrorLogIn(JSON.parse(event.data).payload.error);
      } else window.location.href = "#main";
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
        }
      }
    };
  }
}

export default OpenConnection;
