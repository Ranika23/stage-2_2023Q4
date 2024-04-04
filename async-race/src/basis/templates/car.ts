/* eslint-disable no-alert */
// eslint-disable-next-line import/no-cycle
import {
  clickUpdateCar,
  getNumberPage,
  saveNumberPage,
  clickCreatRandomCar,
} from "../../pages/fetch/index";
// eslint-disable-next-line import/prefer-default-export
export const enum Car {
  Fill = "white",
  NameCar = "Tesla",
}

export interface Cars {
  color: string;
  name: string;
  id: string;
}

export function createGarageCar(data: Array<Cars>, ind: number) {
  const NameCar = data[ind].name as string;
  const Fill = data[ind].color as string;
  const containerGarageCar = document.createElement("div");
  const containerGarageCarFirstLine = document.createElement("div");
  const buttonTableSelect = document.createElement("button");
  const buttonTableRemove = document.createElement("button");
  const buttonNameCar = document.createElement("div");

  containerGarageCar.className = "container-garage-cars";
  buttonTableSelect.className = "button-select";
  buttonTableRemove.className = "button-remove";
  buttonTableRemove.classList.add(`${data[ind].id}`);
  buttonTableSelect.classList.add(`${data[ind].id}`);
  containerGarageCarFirstLine.className = "container-garage-cars-first-line";

  buttonTableSelect.innerText = "SELECT";
  buttonTableRemove.innerText = "REMOVE";
  buttonNameCar.innerText = `${NameCar}`;

  containerGarageCarFirstLine.append(buttonTableSelect);
  containerGarageCarFirstLine.append(buttonTableRemove);
  containerGarageCarFirstLine.append(buttonNameCar);

  containerGarageCar.append(containerGarageCarFirstLine);

  const containerGarageCarSecondLine = document.createElement("div");
  const containerGarageCarSecondLineLeft = document.createElement("div");
  const containerGarageCarSecondLineRight = document.createElement("div");
  containerGarageCarSecondLine.style.borderBottom = `1px dashed rgb(221 147 82)`;

  const buttonA = document.createElement("button");
  const buttonB = document.createElement("button");
  const carSvg = document.createElement("div");
  carSvg.style.width = "auto";
  carSvg.style.height = "auto";
  const car = `<svg fill = "${Fill}" version="1.1" class="shape1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  width="79.536px" height="59.536px" viewBox="0 0 79.536 54.536" style="enable-background:new 0 0 79.536 79.536;"
  xml:space="preserve">
<g>
 <path id="shape2" d="M15.532,56.706c-3.977,0-7.213-3.242-7.213-7.197c0-3.998,3.236-7.224,7.213-7.224
   c3.987,0,7.226,3.226,7.226,7.224C22.758,53.463,19.519,56.706,15.532,56.706z M15.532,45.604c-2.128,0-3.876,1.75-3.876,3.883
   c0,2.129,1.748,3.879,3.876,3.879c2.141,0,3.886-1.75,3.886-3.879C19.418,47.354,17.673,45.604,15.532,45.604z M64.137,56.706
   c-3.987,0-7.219-3.242-7.219-7.197c0-3.998,3.231-7.224,7.219-7.224c3.977,0,7.208,3.226,7.208,7.224
   C71.345,53.463,68.113,56.706,64.137,56.706z M64.137,45.604c-2.144,0-3.895,1.75-3.895,3.883c0,2.129,1.751,3.879,3.895,3.879
   c2.139,0,3.884-1.75,3.884-3.879C68.021,47.354,66.275,45.604,64.137,45.604z M78.138,44.091c0-7.011-4.365-7.842-4.365-7.842
   c-6.426-0.912-17.496-1.38-17.496-1.38c-1.016-1.766-5.707-12.039-8.44-12.039c-0.911,0-20.508,0-23.975,0
   c-3.472,0-9.167,10.024-10.413,12.285c0,0-4.36,0.758-6.416,1.219c-1.142,0.265-4.301,0.324-4.301,9.155H0v3.997h6.654
   c0-4.908,3.982-8.885,8.878-8.885c4.914,0,8.886,3.977,8.886,8.885h30.827c0-4.908,3.967-8.885,8.892-8.885
   c4.898,0,8.875,3.977,8.875,8.885h6.524v-5.396H78.138z M35.589,34.191H21.751c1.872-5.831,5.339-9.994,6.801-9.994
   c1.841,0,7.037,0,7.037,0V34.191z M38.168,34.191v-9.994c0,0,7.141,0,8.974,0c1.854,0,5.893,8.461,7.032,10.625L38.168,34.191z"/>
</g>
</svg>`;
  carSvg.innerHTML = car;

  const buttonFinal = document.createElement("div");

  containerGarageCarSecondLine.className = "container-garage-cars-second";
  containerGarageCarSecondLineLeft.className = "container-garage-left";
  containerGarageCarSecondLineRight.className = "container-garage-right";
  buttonA.className = "button-a";
  buttonB.className = "button-b";
  buttonA.classList.add(`${data[ind].id}`);
  buttonB.classList.add(`${data[ind].id}`);
  buttonFinal.className = "final-flag";

  buttonA.innerText = "A";
  buttonB.innerText = "B";

  containerGarageCarSecondLineLeft.append(buttonA);
  containerGarageCarSecondLineLeft.append(buttonB);
  containerGarageCarSecondLineLeft.append(carSvg);
  containerGarageCarSecondLineRight.append(buttonFinal);

  containerGarageCarSecondLine.append(containerGarageCarSecondLineLeft);
  containerGarageCarSecondLine.append(containerGarageCarSecondLineRight);

  containerGarageCar.append(containerGarageCarSecondLine);

  return containerGarageCar;
}

function updateCar(elem: HTMLElement) {
  const button = document.querySelector(
    ".button-update-garage",
  ) as HTMLButtonElement;
  const color = document.querySelector(
    ".checkbox-update-garage",
  ) as HTMLInputElement;

  const nameNode = elem.parentNode?.childNodes[2] as HTMLElement;
  const name = nameNode.innerHTML;
  const input = document.querySelector(
    ".input-update-garage",
  ) as HTMLInputElement;

  color.disabled = false;
  button.disabled = false;
  input.disabled = false;
  input.value = name;

  return name;
}

export function disabledUpdateCar(car: HTMLElement) {
  const button = document.querySelector(
    ".button-update-garage",
  ) as HTMLButtonElement;
  const color = document.querySelector(
    ".checkbox-update-garage",
  ) as HTMLInputElement;
  const input = document.querySelector(
    ".input-update-garage",
  ) as HTMLInputElement;

  color.disabled = true;
  button.disabled = true;
  input.disabled = true;

  car.classList.remove("update");
}

export function changeColorNameCar(
  elem: HTMLElement,
  color: string,
  name: string,
) {
  const car = elem.parentNode?.parentNode?.childNodes[1].childNodes[0]
    .childNodes[2] as HTMLElement;
  const nameNode = elem.parentNode?.parentNode?.childNodes[0]
    .childNodes[2] as HTMLElement;
  if (name.length > 0 && car.classList[0] === "update") {
    nameNode.innerHTML = name;
  }
  if (color.length > 0 && car.classList[0] === "update") {
    car.innerHTML = `<svg fill = "${color}" version="1.1" class="shape1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="79.536px" height="59.536px" viewBox="0 0 79.536 54.536" style="enable-background:new 0 0 79.536 79.536;"
    xml:space="preserve">
  <g>
   <path id="shape2" d="M15.532,56.706c-3.977,0-7.213-3.242-7.213-7.197c0-3.998,3.236-7.224,7.213-7.224
     c3.987,0,7.226,3.226,7.226,7.224C22.758,53.463,19.519,56.706,15.532,56.706z M15.532,45.604c-2.128,0-3.876,1.75-3.876,3.883
     c0,2.129,1.748,3.879,3.876,3.879c2.141,0,3.886-1.75,3.886-3.879C19.418,47.354,17.673,45.604,15.532,45.604z M64.137,56.706
     c-3.987,0-7.219-3.242-7.219-7.197c0-3.998,3.231-7.224,7.219-7.224c3.977,0,7.208,3.226,7.208,7.224
     C71.345,53.463,68.113,56.706,64.137,56.706z M64.137,45.604c-2.144,0-3.895,1.75-3.895,3.883c0,2.129,1.751,3.879,3.895,3.879
     c2.139,0,3.884-1.75,3.884-3.879C68.021,47.354,66.275,45.604,64.137,45.604z M78.138,44.091c0-7.011-4.365-7.842-4.365-7.842
     c-6.426-0.912-17.496-1.38-17.496-1.38c-1.016-1.766-5.707-12.039-8.44-12.039c-0.911,0-20.508,0-23.975,0
     c-3.472,0-9.167,10.024-10.413,12.285c0,0-4.36,0.758-6.416,1.219c-1.142,0.265-4.301,0.324-4.301,9.155H0v3.997h6.654
     c0-4.908,3.982-8.885,8.878-8.885c4.914,0,8.886,3.977,8.886,8.885h30.827c0-4.908,3.967-8.885,8.892-8.885
     c4.898,0,8.875,3.977,8.875,8.885h6.524v-5.396H78.138z M35.589,34.191H21.751c1.872-5.831,5.339-9.994,6.801-9.994
     c1.841,0,7.037,0,7.037,0V34.191z M38.168,34.191v-9.994c0,0,7.141,0,8.974,0c1.854,0,5.893,8.461,7.032,10.625L38.168,34.191z"/>
  </g>
  </svg>`;
  }
}

export function clickSelectCar() {
  function select(e: Event) {
    const elem = e.target as HTMLElement;
    if (elem.classList[0] === "button-select") {
      updateCar(elem);

      const car = elem.parentNode?.parentNode?.childNodes[1].childNodes[0]
        .childNodes[2] as HTMLElement;

      car.classList.add("update");
      clickUpdateCar(elem, elem.classList[1], car);
    }
  }
  document.addEventListener("click", select);
}

export function getCountCars() {
  fetch("http://127.0.0.1:3000/garage")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const lenDate = data.length;
      const garage = document.querySelector("h1") as HTMLElement;
      // const page = document.querySelector("h2") as HTMLElement;

      garage.innerHTML = `Garage (${lenDate})`;
      // page.innerHTML = `Page #${1}`;
    });
}

export function movePrevNext(numberPage: number) {
  const cars = document.querySelectorAll(".container-garage-cars");
  const pageActive = numberPage;
  fetch("http://127.0.0.1:3000/garage")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const lenDate = data.length;
      const pages = Math.floor((lenDate - (lenDate % 7)) / 7) + 1;
      const page = document.querySelector("h2") as HTMLElement;

      page.innerHTML = `Page #${numberPage}`;

      for (let y = 1; y <= pages; y += 1) {
        if (y === pageActive) {
          const startPoint = lenDate - (pageActive - 1) * 7;

          let endPoint;
          if (lenDate - (pageActive - 1) * 7 - 7 < 0) endPoint = 0;
          else endPoint = lenDate - (pageActive - 1) * 7 - 7;

          for (let i = endPoint; i < startPoint; i += 1) {
            for (let k = 0; k < cars.length; k += 1) {
              cars[k].remove();
            }
            const containerGarageCar = createGarageCar(data, i);
            document.querySelector(".number-page")?.after(containerGarageCar);

            getCountCars();
          }
        }
      }
    });
  return pageActive;
}

export function clickNextPage() {
  fetch("http://127.0.0.1:3000/garage")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const maxCountPage = Math.ceil(data.length / 7);
      const next = document.querySelector(".next-button");
      function clickNext() {
        const numberPage = Number(getNumberPage());
        if (numberPage < maxCountPage) {
          movePrevNext(numberPage + 1);
          saveNumberPage(numberPage + 1);
        }
      }
      next?.addEventListener("click", clickNext);
    });
}

export function clickPrevPage() {
  fetch("http://127.0.0.1:3000/garage")
    .then((response) => {
      return response.json();
    })
    .then(() => {
      const next = document.querySelector(".prev-button");
      function clickNext() {
        const numberPage = Number(getNumberPage());
        if (numberPage > 1) {
          movePrevNext(numberPage - 1);
          saveNumberPage(numberPage - 1);
        }
      }
      next?.addEventListener("click", clickNext);
    });
}

function shuffle(arr: string[]) {
  const array = arr.slice();
  let j;
  let temp;
  for (let i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function generateCars() {
  const nameCars = [
    "BMW IX",
    "BMW XM",
    "BMW 3GT",
    "BMW 5GT",
    "BMW 6GT",
    "BMW X1",
    "BMW X2",
    "BMW X3",
    "BMW X4",
    "BMW X5",
    "CHERY COWIN",
    "CHERY EASTAR",
    "CHERY INDIS",
    "CHERY M11",
    "CHERY QQ",
    "CHERY TIGGO",
    "CHERY VERY",
    "CHERY FORA",
    "CHERY XAMULET5",
    "CHERY TIGGO 7",
    "ALFA ROMEO 147",
    "ALFA ROMEO 155",
    "ALFA ROMEO 156",
    "ALFA ROMEO 159",
    "ALFA ROMEO 166",
    "ALFA ROMEO BRERA",
    "ALFA ROMEO GIULIETTA",
    "ALFA ROMEO MITO",
    "ALFA ROMEO SPIDER",
    "ALFA ROMEO STELVIO Q4",
    "CADILLAC ESCALADE",
    "CADILLAC SRX",
    "CADILLAC CTX",
    "CADILLAC STS",
    "CADILLAC ATS",
    "CADILLAC XTS",
    "CADILLAC XLR",
    "CADILLAC ELR",
    "CADILLAC CATERA",
    "CADILLAC CT6",
    "CHEVROLET AVEO",
    "CHEVROLET VOLT",
    "CHEVROLET VIVA",
    "CHEVROLET TRAILBLAZER",
    "CHEVROLET TAHOE",
    "CHEVROLET SPARK",
    "CHEVROLET SONIC",
    "CHEVROLET ORLANDO",
    "CHEVROLET NIVA",
    "CHEVROLET MATIZ",
    "CITROEN C-CROSSER",
    "CITROEN XSARA",
    "CITROEN SAXO",
    "CITROEN JUMPER",
    "CITROEN DS5",
    "CITROEN DS4",
    "CITROEN DS3",
    "CITROEN C8",
    "CITROEN C4 PICASSO",
    "CITROEN C-ZERO",
    "DODGE AVENGER",
    "DODGE CALIBER",
    "DODGE CHARGER",
    "DODGE DURANGO",
    "DODGE CARAVAN",
    "DODGE INTREPID",
    "DODGE MAGNUM",
    "DODGE NEON",
    "DODGE NITRO",
    "DODGE RAM",
    "FORD ECOSPORT",
    "FORD TAURUS",
    "FORD SHELBY",
    "FORD S-MAX",
    "FORD PUMA",
    "FORD MUSTANG",
    "FORD MONDEO",
    "FORD MAVERICK",
    "FORD KUGA",
    "FORD KA",
    "HONDA CIVIC",
    "HONDA S2000",
    "HONDA RIDGELINE",
    "HONDA PRELUDE",
    "HONDA PILOT",
    "HONDA PASSPORT",
    "HONDA ODYSSEY",
    "HONDA LEGEND",
    "HONDA JAZZ",
    "HONDA PROLOGUE",
    "MERCEDES EQS SUV",
    "MERCEDES EQS 580",
    "MERCEDES GLA",
    "MERCEDES GLC",
    "MERCEDES GLE",
    "MERCEDES GLS",
    "MERCEDES SLS",
    "MERCEDES SLK",
    "MERCEDES SL",
    "MERCEDES GLK",
  ];
  document.querySelector(".generate-button")?.addEventListener("click", () => {
    const randomCars = shuffle(nameCars);
    for (let i = 0; i < randomCars.length; i += 1) {
      const color = getRandomColor();
      const name = randomCars[i];
      clickCreatRandomCar(name, color);
    }
    const numberPage = getNumberPage();
    getCountCars();
    movePrevNext(numberPage);
    clickNextPage();
    clickPrevPage();
  });
}
