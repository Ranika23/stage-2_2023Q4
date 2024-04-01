import "./style.css";

import App from "./pages/app/index";

const app = new App();
app.run();

fetch("http://127.0.0.1:3000/garage")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  });
// eslint-disable-next-line no-console
