// eslint-disable-next-line import/prefer-default-export
export function saveUserSession(status: string) {
  sessionStorage.setItem("session", JSON.stringify(status));
}

// eslint-disable-next-line consistent-return
export function getUserSession() {
  const userSession: string | null = sessionStorage.getItem("session");
  if (userSession !== null) {
    return JSON.parse(userSession);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function saveUser(userName: string, inputPassword: string, id: string) {
  const user = {
    idUser: id,
    name: userName,
    password: inputPassword,
  };
  sessionStorage.setItem("userName", JSON.stringify(user));
}

// eslint-disable-next-line consistent-return
export function getUser() {
  const user: string | null = sessionStorage.getItem("userName");
  if (user !== null) {
    return JSON.parse(user);
  }
}
