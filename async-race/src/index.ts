import "./style.css";
import {
  clickCreatNewCar,
  clickRemoveNewCar,
  clickStartMove,
  // clickUpdateCar,
} from "./pages/fetch/index";
import {
  clickSelectCar,
  clickNextPage,
  clickPrevPage,
  generateCars,
} from "./basis/templates/car";

import App from "./pages/app/index";

export interface Cars {
  color: string;
  name: string;
  id: string;
}

const app = new App();
app.run();

fetch("http://127.0.0.1:3000/garage")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data[0].id);
  });

clickCreatNewCar();
clickRemoveNewCar();
clickSelectCar();
clickNextPage();
clickPrevPage();
clickStartMove();

// movePrevNext();
generateCars();
