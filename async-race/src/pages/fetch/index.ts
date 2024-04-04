// eslint-disable-next-line import/no-cycle
import {
  // createGarageCar,
  changeColorNameCar,
  disabledUpdateCar,
  getCountCars,
  movePrevNext,
  clickNextPage,
  clickPrevPage,
} from "../../basis/templates/car";

function creatNewCar() {
  const name: HTMLInputElement | null =
    document.querySelector(".input-creat-car");
  const color: HTMLInputElement | null =
    document.querySelector(".color-creat-car");

  return [name?.value, color?.value];
}

export function clickRemoveNewCar() {
  document.addEventListener("click", (e) => {
    const elem = e.target as HTMLElement;
    if (elem.classList[0] === "button-remove") {
      const id = elem.classList[1];

      fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: "DELETE",
      }).then((res) => res.json());

      getCountCars();
      clickNextPage();
      clickPrevPage();

      elem.parentElement?.parentElement?.remove();
    }
  });
}

export function clickUpdateCar(
  elem: HTMLElement,
  id: string,
  car: HTMLElement,
) {
  function check() {
    const colorNode = document.querySelector(
      ".checkbox-update-garage",
    ) as HTMLInputElement;
    const color = colorNode.value;
    const nameNode = document.querySelector(
      ".input-update-garage",
    ) as HTMLInputElement;
    const name = nameNode.value;

    if (name.length > 0 && car.classList[0] === "update") {
      fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${name}`,
          color: `${color}`,
        }),
      }).then((res) => res.json());
    } else if (name.length === 0 && car.classList[0] === "update") {
      const nameNod = elem.parentNode?.parentNode?.childNodes[0]
        .childNodes[2] as HTMLElement;
      fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${nameNod}`,
          color: `${color}`,
        }),
      }).then((res) => res.json());
    }
    // eslint-disable-next-line no-param-reassign

    changeColorNameCar(elem, color, name);
    disabledUpdateCar(car);
  }

  document
    .querySelector(".button-update-garage")
    ?.addEventListener("click", check, { once: true });
}

export function saveNumberPage(number: number) {
  const numberPage: string | null = localStorage.getItem("numberPage");
  if (numberPage === null) {
    const page = {
      numberPage: 1,
    };
    localStorage.setItem("numberPage", JSON.stringify(page));
  } else {
    const page = {
      numberPage: number,
    };
    localStorage.setItem("numberPage", JSON.stringify(page));
  }
}

export function getNumberPage() {
  const numberPage: string | null = localStorage.getItem("numberPage");
  let result;
  if (numberPage !== null) {
    result = JSON.parse(numberPage).numberPage;
  } else {
    result = 1;
  }
  return result;
}

export function clickCreatNewCar() {
  document
    .querySelector(".button-creat-garage")
    ?.addEventListener("click", () => {
      const name = creatNewCar()[0];
      const color = creatNewCar()[1];

      fetch("http://127.0.0.1:3000/garage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${name}`,
          color: `${color}`,
        }),
      }).then((res) => res.json());
      const numberPage = getNumberPage();
      getCountCars();
      movePrevNext(numberPage);
      clickNextPage();
      clickPrevPage();
    });
}

export function clickCreatRandomCar(name: string, color: string) {
  fetch("http://127.0.0.1:3000/garage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: `${name}`,
      color: `${color}`,
    }),
  }).then((res) => res.json());
}

export function clickStartMove() {
  function startMove(e: Event) {
    const elem = e.target as HTMLElement;
    if (elem.classList[0] === "button-a") {
      const buttonB = elem.parentNode?.childNodes[1] as HTMLElement;

      elem.classList.add("disabled");
      elem.setAttribute("disabled", "true");
      buttonB.classList.add("active");
      buttonB.removeAttribute("disabled");

      const idCar = elem.classList[1];
      fetch(`http://127.0.0.1:3000/engine?id=${idCar}&status=started`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          const veloSity = Number(data.velocity) * 1000;
          const disTance = Number(data.distance);
          const time = disTance / veloSity;
          const car = elem.parentNode?.childNodes[2] as HTMLElement;
          car.className = "move-car";
          car.style.animation = `moveCar forwards ${time}s`;
          fetch(`http://127.0.0.1:3000/engine?id=${idCar}&status=drive`, {
            method: "PATCH",
          })
            .then((res) => res.json())
            .catch(() => {
              car.style.animationPlayState = "paused";
            });
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    clickStopMove();
  }

  document.addEventListener("click", startMove, { once: true });
}

export function clickStopMove() {
  function stopMove(e: Event) {
    const elem = e.target as HTMLElement;
    if (elem.classList[0] === "button-b") {
      const buttonA = elem.parentNode?.childNodes[0] as HTMLElement;

      buttonA.classList.remove("disabled");
      buttonA.removeAttribute("disabled");
      elem.classList.remove("active");
      elem.setAttribute("disabled", "true");

      const idCar = elem.classList[1];
      fetch(`http://127.0.0.1:3000/engine?id=${idCar}&status=stopped`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then(() => {
          const car = elem.parentNode?.childNodes[2] as HTMLElement;
          car.style.animation = "none";
          car.classList.remove("move-car");
        });
    }
    clickStartMove();
  }

  document.addEventListener("click", stopMove, { once: true });
}
