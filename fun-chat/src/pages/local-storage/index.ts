// eslint-disable-next-line import/prefer-default-export
export function saveUserSession(status: string) {
  localStorage.setItem("session", JSON.stringify(status));
}

// eslint-disable-next-line consistent-return
export function getUserSession() {
  const userSession: string | null = localStorage.getItem("session");
  if (userSession !== null) {
    return JSON.parse(userSession);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function saveUser(userName: string) {
  localStorage.setItem("userName", JSON.stringify(userName));
}

// eslint-disable-next-line consistent-return
export function getUser() {
  const user: string | null = localStorage.getItem("userName");
  if (user !== null) {
    return JSON.parse(user);
  }
}
