// eslint-disable-next-line import/no-cycle
import { clickUpdateCar } from "../../pages/fetch/index";
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
  // eslint-disable-next-line no-console
  console.log(data);
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
