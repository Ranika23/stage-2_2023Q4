import data from './products.json' assert { type: "json" };
console.log(data[19].name)



document.querySelector(".menu-burger-cup2").addEventListener("click", function() {
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
            let elem = document.querySelector(`.wrapper-img-coffee${i}`).cloneNode(true);
            elem.classList.add("refresh-img");
            document.querySelector(".images-container2").appendChild(elem);
            elem.style.display = "flex";
            elem.style.opacity = "0";
            setTimeout(function() {
                elem.style.opacity = "1";
            },200)
        }
        BUTTON_REFRESH.classList.add("tea");
})

function deleteRefreshImg() { // удаление refresh-картинок
    if (document.querySelector(".images-container2").children.length > 4) {

                for (let i = 2; i < 9; i += 2) { // отключение 4-х картинок
                    let elemDelet = document.querySelector(`.wrapper-img-coffee${i}.refresh-img`);
                    document.querySelector(".images-container2").removeChild(elemDelet);
                BUTTON_REFRESH.classList.remove("tea");
            }
    }
}
window.addEventListener('resize', function() {
    let w = window.innerWidth;
    if (w > 768) {
        deleteRefreshImg();
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
    n_img += 2;

}
n_img = 1;
for (let indjson = 16; indjson < 20; indjson++) {
    createElementDes(n_img)

    wrapchild1.innerHTML = `${data[indjson].name}`;
    wrapchild2.innerHTML =  `${data[indjson].description}`;
    elem.innerHTML = `$${data[indjson].price}`;
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
    n_img += 2;
}



// categories Coffee
BUTTON_COFFEE.addEventListener("click", function() {
    BUTTON_COFFEE.classList.add("activ");
    BUTTON_DESSERT.classList.remove("activ");
    BUTTON_TEA.classList.remove("activ");
    addDelClass("coffee", "tea", "dessert"); //удаление/добавление класса для модального окна
    deleteRefreshImg();

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
            document.querySelector(`.wrapper-img-coffee${i}`).classList.remove("tea");
            BUTTON_REFRESH.classList.remove("tea");
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
})


// categories Tea


BUTTON_TEA.addEventListener("click", function() {
    BUTTON_TEA.classList.add("activ");
    BUTTON_COFFEE.classList.remove("activ");
    BUTTON_DESSERT.classList.remove("activ");
    addDelClass( "tea", "coffee", "dessert"); //удаление/добавление класса для модального окна
    deleteRefreshImg()

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
            document.querySelector(`.wrapper-img-coffee${i}`).classList.add("tea");
            BUTTON_REFRESH.classList.add("tea");
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
})


// categories Dessert
BUTTON_DESSERT.addEventListener("click", function() {
    BUTTON_DESSERT.classList.add("activ");
    BUTTON_TEA.classList.remove("activ");
    BUTTON_COFFEE.classList.remove("activ");
    addDelClass( "dessert", "tea", "coffee"); //удаление/добавление класса для модального окна
    deleteRefreshImg()

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
            document.querySelector(`.wrapper-img-coffee${i}`).classList.remove("tea");
            BUTTON_REFRESH.classList.remove("tea");


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

})




// модальные окна






let CARD_PRODACT_REFRESH;
document.querySelector(".button-wrapper-about").addEventListener("click", function() {
    CARD_PRODACT_REFRESH = document.querySelectorAll('[class*="refresh-img"]');
    let r = CARD_PRODACT_REFRESH.length;
    for (let i = 0; i < r; i++) { // открытие модалки Для карточек refresh

    if (CARD_PRODACT_REFRESH != undefined) {
        CARD_PRODACT_REFRESH[i].addEventListener("click", function() {
            const CARD_CONTENT_REFRESH = CARD_PRODACT_REFRESH[i].children;
    
     //       console.log(CARD_PRODACT[i].children)
            document.querySelector(".body").classList.add("modal");  // фиксация экрана
            let classScreen = screen(); // определение расширения (для выбора окна модалки)
            creatModal (classScreen);  //создание и открытие модалки
            addImgModal(i);
            document.querySelector(".modal-background").addEventListener("click", function() {   //закрытие модалки
                closeModal (); 
            })
       
            })
    } 
    }

})


const CARD_PRODACT = document.querySelectorAll('[class*="wrapper-img-coffee"]'); // массив карточек товаров
let n = CARD_PRODACT.length;

for (let i = 0; i < n; i++) { // открытие модалки
    CARD_PRODACT[i].addEventListener("click", function() {
      const CARD_CONTENT = CARD_PRODACT[i].children;

 //       console.log(CARD_PRODACT[i].children)
        document.querySelector(".body").classList.add("modal");  // фиксация экрана
        let classScreen = screen(); // определение расширения (для выбора окна модалки)
        creatModal (classScreen);  //создание и открытие модалки
        addImgModal(i);
        document.querySelector(".modal-background").addEventListener("click", function() {   //закрытие модалки
            closeModal (); 
        })
   
        })

   
}





function creatModal (cls) { // создание модалки
    // window
        let elem = document.createElement('div'); // фон
        elem.classList.add("modal-background");
        elem.classList.add("open");
    
        let modal = document.createElement('div'); // модальное окно контур
        modal.classList.add(`${cls}`);
    
        elem.appendChild(modal);
        document.querySelector(".body-container").appendChild(elem);
    
      //  addImgModal()
    
    }
let count = 1;
    function closeModal () { 
        // закрытие модалки

    document.querySelector(".modal-background").classList.add("close");
    setTimeout(function() {
        document.querySelector(".modal-background").classList.remove("open");
        document.querySelector(".body-container").removeChild(document.querySelector(".modal-background"));
    }, 500)

    document.querySelector(".body").classList.remove("modal");

    }





function addImgModal(i) {// картинка модального окна
    let image = document.createElement('div'); 
    document.querySelector(".modal-background div").appendChild(image);
   // document.querySelector(".modal-desktop").appendChild(image);
    image.classList.add("modal-img");






  if (document.querySelector(".images-container2").classList.contains("coffee")) {  /// картинки для coffee
       let n = i + 1;
        if (n % 2 != 0) {
            let k = Math.floor(n / 2) + 1;
            image.style.backgroundImage = `url(assets/img/menu_coffee-${k}.png)`;

        } else {
            if(n === 2) {image.style.backgroundImage = `url(assets/img/menu_coffee-${5}.png)`};
            if(n === 4) {image.style.backgroundImage = `url(assets/img/menu_coffee-${6}.png)`};
            if(n === 6) {image.style.backgroundImage = `url(assets/img/menu_coffee-${7}.png)`};
            if(n === 8) {image.style.backgroundImage = `url(assets/img/menu_coffee-${8}.png)`};
        }
       
        if(CARD_PRODACT_REFRESH != undefined) {
            if(n === 1) {image.style.backgroundImage = `url(assets/img/menu_coffee-${5}.png)`};
            if(n === 2) {image.style.backgroundImage = `url(assets/img/menu_coffee-${6}.png)`};
            if(n === 3) {image.style.backgroundImage = `url(assets/img/menu_coffee-${7}.png)`};
            if(n === 4) {image.style.backgroundImage = `url(assets/img/menu_coffee-${8}.png)`};
        }
    } 
   

    if (document.querySelector(".images-container2").classList.contains("tea")) {  /// картинки для tea
        let n = i + 1;

        if (n % 2 != 0) {
             let k = Math.floor(n / 2) + 1;
             console.log(k)
             image.style.backgroundImage = `url(assets/img/tea-${k}.png)`;
 
         } else {
             if(n === 2) {image.style.backgroundImage = `url(assets/img/tea-${3}.png)`};
             if(n === 4) {image.style.backgroundImage = `url(assets/img/tea-${4}.png)`};
         }
        
     } 

     if (document.querySelector(".images-container2").classList.contains("dessert")) {  /// картинки для dessert
        let n = i + 1;
         if (n % 2 != 0) {
             let k = Math.floor(n / 2) + 1;
             console.log(k)
             image.style.backgroundImage = `url(assets/img/dessert-${k}.png)`;
 
         } else {
             if(n === 2) {image.style.backgroundImage = `url(assets/img/dessert-${5}.png)`};
             if(n === 4) {image.style.backgroundImage = `url(assets/img/dessert-${6}.png)`};
             if(n === 6) {image.style.backgroundImage = `url(assets/img/dessert-${7}.png)`};
             if(n === 8) {image.style.backgroundImage = `url(assets/img/dessert-${8}.png)`};
         }

         if(CARD_PRODACT_REFRESH != undefined) {
            if(n === 1) {image.style.backgroundImage = `url(assets/img/dessert-${5}.png)`};
            if(n === 2) {image.style.backgroundImage = `url(assets/img/dessert-${6}.png)`};
            if(n === 3) {image.style.backgroundImage = `url(assets/img/dessert-${7}.png)`};
            if(n === 4) {image.style.backgroundImage = `url(assets/img/dessert-${8}.png)`};
        }
        
     } 



}


function screen() { // определение разрешения
    let cls;

        let w = window.innerWidth;
    
        if (w <= 730) {
            cls = "modal-mobile";
        }
        if (w <= 850 && w > 730) {
            cls =  "modal-tablet";
        }
        if (w > 850) {
            cls = "modal-desktop"; 
        }
       
      return cls;
}


function addDelClass(add, remove1, remove2) {   // добавление_удаление класса для модального окна
    document.querySelector(".images-container2").classList.add(`${add}`);
    document.querySelector(".images-container2").classList.remove(`${remove1}`);
    document.querySelector(".images-container2").classList.remove(`${remove2}`);
};


    
window.addEventListener('resize', function() {  // закрытие модалки при смене разрешения
    let w = window.innerWidth;
    if (document.querySelectorAll('[class*="modal-background"]').length > 0) {
        if (w <= 2000 && document.querySelector(".modal-background").classList.contains("close") === false) {

            closeModal ();
        }
    }
})

/*if (document.querySelector(".images-container2").children.length > 4) {
    for (let i = 2; i < 9; i += 2) { 

}
}*/
