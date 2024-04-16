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

    const myWS = new WebSocket("ws://localhost:4000", "protocolOne");
    myWS.onopen = () => {
      myWS.send(JSON.stringify(msg));
    };
    myWS.onmessage = (event) => {
      if (JSON.parse(event.data).type === "USER_LOGIN") {
        window.location.href = "#main";
        // saveUserSession(JSON.parse(event.data).payload.user.isLogined);
      } else ErrorPage.ErrorLogIn(JSON.parse(event.data).payload.error);
    };
  }
}

export default OpenConnection;
