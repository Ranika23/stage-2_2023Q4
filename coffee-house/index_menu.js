import data from './products.json' assert { type: "json" };
console.log(data[19].name)



document.querySelector(".menu-burger-cup2").addEventListener("click", function() {
    console.log('hello')
    closeBurger();
});

const BUTTON_COFFEE = document.querySelector(".container-icons-coffee");
const BUTTON_TEA = document.querySelector(".container-icons-tea");
const BUTTON_DESSERT = document.querySelector(".container-icons-dessert");
const BUTTON_REFRESH = document.querySelector(".button-wrapper-about");
const TEA_DESCRIPTION = document.querySelectorAll(".description-tea");
const DESSERT_DESCRIPTION = document.querySelectorAll(".description-dessert");
const COFFEE_DESCRIPTION = document.querySelectorAll(".description-coffee");


// кнопка refresh
BUTTON_REFRESH.addEventListener("click", function() {
    for (let i = 2; i < 9; i += 2) { // включение 4-х картинок
        document.querySelector(`.wrapper-img-coffee${i}`).style.display = "flex";
    }
    BUTTON_REFRESH.style.display = "none";
})
window.addEventListener('resize', function() {
    let w = window.innerWidth;
    if (w > 768) {
        BUTTON_REFRESH.style.display = "none";
        for (let i = 2; i < 9; i += 2) { // включение 4-х картинок
            document.querySelector(`.wrapper-img-coffee${i}`).style.display = "flex";
        }
    } else if (w <= 768) {
        BUTTON_REFRESH.style.display = "flex";
        for (let i = 2; i < 9; i += 2) { // отключение 4-х картинок
            document.querySelector(`.wrapper-img-coffee${i}`).style.display = "none";
        }
    }

  });

let elem;
let wrap;
let wrapchild1;
let wrapchild2;
// заполнение карточек dessert
function createElementDes(i) {
        elem = document.createElement('div');
        elem.classList = "price-description";
    
        wrap = document.createElement('div');
        wrap.classList = "description-wrapper";
    
        wrapchild1 = document.createElement('div');
        wrap.appendChild(wrapchild1)
        wrapchild1.classList = "title-description";
        wrapchild2 = document.createElement('div');
        wrap.appendChild(wrapchild2)
        wrapchild2.classList = "text-description";
    
        DESSERT_DESCRIPTION[i].appendChild(wrap);
        DESSERT_DESCRIPTION[i].appendChild(elem);
        DESSERT_DESCRIPTION[i].style.zIndex = "0";
        DESSERT_DESCRIPTION[i].style.opacity = "0";
    }


let n_img = 0;
for (let indjson = 12; indjson < 16; indjson++) {
    createElementDes(n_img)
    wrapchild1.innerHTML = `${data[indjson].name}`;
    wrapchild2.innerHTML =  `${data[indjson].description}`;
    elem.innerHTML = `$${data[indjson].price}`;
    console.log(DESSERT_DESCRIPTION[n_img], n_img)
    n_img += 2;

}
n_img = 1;
for (let indjson = 16; indjson < 20; indjson++) {
    createElementDes(n_img)

    wrapchild1.innerHTML = `${data[indjson].name}`;
    wrapchild2.innerHTML =  `${data[indjson].description}`;
    elem.innerHTML = `$${data[indjson].price}`;
    console.log(DESSERT_DESCRIPTION[n_img], n_img)
    n_img += 2;
}



// заполнение карточек tea
function createElementTea(i) {
    elem = document.createElement('div');
    elem.classList = "price-description";

    wrap = document.createElement('div');
    wrap.classList = "description-wrapper";

    wrapchild1 = document.createElement('div');
    wrap.appendChild(wrapchild1)
    wrapchild1.classList = "title-description";
    wrapchild2 = document.createElement('div');
    wrap.appendChild(wrapchild2)
    wrapchild2.classList = "text-description";

    TEA_DESCRIPTION[i].appendChild(wrap);
    TEA_DESCRIPTION[i].appendChild(elem);
    TEA_DESCRIPTION[i].style.zIndex = "0";
    TEA_DESCRIPTION[i].style.opacity = "0";

}
n_img = 0;
for (let indjson = 8; indjson < 12; indjson++) {
    createElementTea(n_img)
    wrapchild1.innerHTML = `${data[indjson].name}`;
    wrapchild2.innerHTML =  `${data[indjson].description}`;
    elem.innerHTML = `$${data[indjson].price}`;
    console.log(TEA_DESCRIPTION[n_img], n_img)
    n_img += 2;
}



// categories Coffee
BUTTON_COFFEE.addEventListener("click", function() {
    BUTTON_COFFEE.classList.add("activ");
    BUTTON_DESSERT.classList.remove("activ");
    BUTTON_TEA.classList.remove("activ");

    for  (let i = 1; i < 9; i++) {
        document.querySelector(`.img_coffee-${i}`).style.opacity = "1";
        document.querySelector(`.img_tea-${i}`).style.opacity = "0";
        document.querySelector(`.img_dessert-${i}`).style.opacity = "0";
        setTimeout(function(){
            document.querySelector(`.img_coffee-${i}`).style.zIndex = "1";
            document.querySelector(`.img_tea-${i}`).style.zIndex = "0";
            document.querySelector(`.img_dessert-${i}`).style.zIndex = "0";
        }, 500)
        if (i % 2 === 0) {
           document.querySelector(`.wrapper-img-coffee${i}`).style.display = "flex";
     }
    }

    for (let i = 0; i < 8; i++) {
        COFFEE_DESCRIPTION[i].style.zIndex = "1";
        COFFEE_DESCRIPTION[i].style.opacity = "1";
        DESSERT_DESCRIPTION[i].style.zIndex = "0";
        DESSERT_DESCRIPTION[i].style.opacity = "0";
        if (i % 2 === 0) {
            TEA_DESCRIPTION[i].style.zIndex = "0";
            TEA_DESCRIPTION[i].style.opacity = "0";
        }
    }
    BUTTON_REFRESH.style.display = "flex"; // включение кнопки refresh
    for (let i = 2; i < 9; i += 2) { // отключение 4-х картинок
        document.querySelector(`.wrapper-img-coffee${i}`).style.display = "none";
    }
})


// categories Tea


BUTTON_TEA.addEventListener("click", function() {
    BUTTON_TEA.classList.add("activ");
    BUTTON_COFFEE.classList.remove("activ");
    BUTTON_DESSERT.classList.remove("activ");

    for  (let i = 1; i < 9; i++) {
        document.querySelector(`.img_coffee-${i}`).style.opacity = "0";
        document.querySelector(`.img_tea-${i}`).style.opacity = "1";
        document.querySelector(`.img_dessert-${i}`).style.opacity = "0";
        setTimeout(function(){
            document.querySelector(`.img_tea-${i}`).style.zIndex = "1";
            document.querySelector(`.img_coffee-${i}`).style.zIndex = "0";
            document.querySelector(`.img_dessert-${i}`).style.zIndex = "0";
        }, 500)
      if (i % 2 === 0) {
           document.querySelector(`.wrapper-img-coffee${i}`).style.display = "none";
    }
    }

    for (let i = 0; i < 8; i++) {
        COFFEE_DESCRIPTION[i].style.zIndex = "0";
        COFFEE_DESCRIPTION[i].style.opacity = "0";
        DESSERT_DESCRIPTION[i].style.zIndex = "0";
        DESSERT_DESCRIPTION[i].style.opacity = "0";
        if (i % 2 === 0) {
            TEA_DESCRIPTION[i].style.zIndex = "1";
            TEA_DESCRIPTION[i].style.opacity = "1";
        }
    }
    BUTTON_REFRESH.style.display = "none"; // отключение кнопки refresh
})


// categories Dessert
BUTTON_DESSERT.addEventListener("click", function() {
    BUTTON_DESSERT.classList.add("activ");
    BUTTON_TEA.classList.remove("activ");
    BUTTON_COFFEE.classList.remove("activ");

    for  (let i = 1; i < 9; i++) {

        document.querySelector(`.img_coffee-${i}`).style.opacity = "0";
        document.querySelector(`.img_tea-${i}`).style.opacity = "0";
        document.querySelector(`.img_dessert-${i}`).style.opacity = "1";
        setTimeout(function(){
            document.querySelector(`.img_coffee-${i}`).style.zIndex = "0";
            document.querySelector(`.img_tea-${i}`).style.zIndex = "0";
            document.querySelector(`.img_dessert-${i}`).style.zIndex = "1";
        }, 500)
        if (i % 2 === 0) {
          document.querySelector(`.wrapper-img-coffee${i}`).style.display = "flex";
        }
    }
    for (let i = 0; i < 8; i++) {
        COFFEE_DESCRIPTION[i].style.zIndex = "0";
        COFFEE_DESCRIPTION[i].style.opacity = "0";
        DESSERT_DESCRIPTION[i].style.zIndex = "1";
        DESSERT_DESCRIPTION[i].style.opacity = "1";
        if (i % 2 === 0) {
            TEA_DESCRIPTION[i].style.zIndex = "0";
            TEA_DESCRIPTION[i].style.opacity = "0";
        }
    }
    
    BUTTON_REFRESH.style.display = "flex"; // включение кнопки refresh
        for (let i = 2; i < 9; i += 2) { // отключение 4-х картинок
            document.querySelector(`.wrapper-img-coffee${i}`).style.display = "none";
        }


    

})