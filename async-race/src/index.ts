import "./style.css";
import {
  clickCreatNewCar,
  clickRemoveNewCar,
  clickStartMove,
  clickStopMove,
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

clickCreatNewCar();
clickRemoveNewCar();
clickSelectCar();
clickNextPage();
clickPrevPage();
clickStartMove();
clickStopMove();

// movePrevNext();
generateCars();
