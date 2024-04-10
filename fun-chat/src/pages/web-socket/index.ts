class OpenConnection {
  static Open(idUser: string, nameUser: string, passwordUser: string) {
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
      }
    };
  }
}

export default OpenConnection;
