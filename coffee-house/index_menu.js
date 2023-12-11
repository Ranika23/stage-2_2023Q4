// menu-burger
function verticalScroll() {
    if (document.querySelector(".button-burger").classList.contains("open")) {
        bodyFixModal();
    } else {
        bodyClosefixModal();
    }
}


document.querySelector(".menu-burger-cup2").addEventListener("click", function() {
    closeBurger();
});
function closeBurger() {
    document.querySelector(".menu-burger").classList.remove("open");
    document.querySelector(".button-burger").classList.remove("open");
    verticalScroll()
};



import data from './products.json' assert { type: "json" };




document.querySelector(".menu-burger-cup2").addEventListener("click", function () {
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

BUTTON_REFRESH.addEventListener("click", function () {
    for (let i = 2; i < 9; i += 2) { // включение 4-х картинок
        let elem = document.querySelector(`.wrapper-img-coffee${i}`).cloneNode(true);
        elem.classList.add("refresh-img");
        document.querySelector(".images-container2").appendChild(elem);
        elem.style.display = "flex";
        elem.style.opacity = "0";
        setTimeout(function () {
            elem.style.opacity = "1";
        }, 200)
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
window.addEventListener('resize', function () {
    let w = window.innerWidth;
    if (w < 1500) {
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
    wrapchild2.innerHTML = `${data[indjson].description}`;
    elem.innerHTML = `$${data[indjson].price}`;
    n_img += 2;

}
n_img = 1;
for (let indjson = 16; indjson < 20; indjson++) {
    createElementDes(n_img)

    wrapchild1.innerHTML = `${data[indjson].name}`;
    wrapchild2.innerHTML = `${data[indjson].description}`;
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
    wrapchild2.innerHTML = `${data[indjson].description}`;
    elem.innerHTML = `$${data[indjson].price}`;
    n_img += 2;
}



// categories Coffee
BUTTON_COFFEE.addEventListener("click", function () {
    BUTTON_COFFEE.classList.add("activ");
    BUTTON_DESSERT.classList.remove("activ");
    BUTTON_TEA.classList.remove("activ");
    addDelClass("coffee", "tea", "dessert"); //удаление/добавление класса для модального окна
    deleteRefreshImg();

    for (let i = 1; i < 9; i++) {
        document.querySelector(`.img_coffee-${i}`).style.opacity = "1";
        document.querySelector(`.img_tea-${i}`).style.opacity = "0";
        document.querySelector(`.img_dessert-${i}`).style.opacity = "0";
        setTimeout(function () {
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


BUTTON_TEA.addEventListener("click", function () {
    BUTTON_TEA.classList.add("activ");
    BUTTON_COFFEE.classList.remove("activ");
    BUTTON_DESSERT.classList.remove("activ");
    addDelClass("tea", "coffee", "dessert"); //удаление/добавление класса для модального окна
    deleteRefreshImg()

    for (let i = 1; i < 9; i++) {
        document.querySelector(`.img_coffee-${i}`).style.opacity = "0";
        document.querySelector(`.img_tea-${i}`).style.opacity = "1";
        document.querySelector(`.img_dessert-${i}`).style.opacity = "0";
        setTimeout(function () {
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
BUTTON_DESSERT.addEventListener("click", function () {
    BUTTON_DESSERT.classList.add("activ");
    BUTTON_TEA.classList.remove("activ");
    BUTTON_COFFEE.classList.remove("activ");
    addDelClass("dessert", "tea", "coffee"); //удаление/добавление класса для модального окна
    deleteRefreshImg()

    for (let i = 1; i < 9; i++) {

        document.querySelector(`.img_coffee-${i}`).style.opacity = "0";
        document.querySelector(`.img_tea-${i}`).style.opacity = "0";
        document.querySelector(`.img_dessert-${i}`).style.opacity = "1";
        setTimeout(function () {
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

// фиксация экрана
function bodyFixModal() {

    setTimeout( function() {
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
        document.querySelector(".body").classList.add("modal"); 
        document.querySelector(".body").style.top = '-' + scrollPosition + 'px';
  
    }, 15 ); 
  }
  
// отмена фиксации экрана
  function bodyClosefixModal() {
  
      let scroll = document.querySelector(".body").style.top;
      let scrollPosition = Number(scroll.slice(0, scroll.length - 2))

  
  document.querySelector(".body").style.top = '';
  document.querySelector(".body").classList.remove("modal"); 
  

     document.querySelectorAll("*").forEach((element) => element.style.scrollBehavior = "auto")
   
      
      window.scroll(0, -scrollPosition);
      document.querySelectorAll("*").forEach((element) => element.style.removeProperty('scroll-behavior'))

  
  }

  






let CARD_PRODACT_REFRESH;
document.querySelector(".button-wrapper-about").addEventListener("click", function () {
    CARD_PRODACT_REFRESH = document.querySelectorAll('[class*="refresh-img"]');
    let r = CARD_PRODACT_REFRESH.length;
    for (let i = 0; i < r; i++) { // открытие модалки Для карточек refresh

        if (CARD_PRODACT_REFRESH != undefined) {
            CARD_PRODACT_REFRESH[i].addEventListener("click", event => {
                const CARD_CONTENT_REFRESH = CARD_PRODACT_REFRESH[i].children;

      
             
             
             //   document.querySelector(".body").classList.add("modal");  // фиксация экрана
             bodyFixModal();
             
             
             
             
             
             
                let classScreen = screen(); // определение расширения (для выбора окна модалки)
                creatModal(classScreen);  //создание и открытие модалки
                if (classScreen != "modal-mobile") {
                    addImgModal(i);
                }



                let widthPadding = widthModal(classScreen); // определение ширины и padding для description
                addDescriptModal(widthPadding, i);


                // переключение кнопок 
                OpenCloseButtonModal()

                //условие закрытия модального окна
                event._isClickProfile = true;
                document.querySelector(".modal-background div").addEventListener("click", event => {
                    event._isClickProfile = true;
                })
                document.querySelector(".modal-background").addEventListener("click", event => {
                    if (event._isClickProfile) return;
                    closeModal();
                })
                document.querySelector(".modal-description-button").addEventListener("click", event => {
                    if (event._isClickProfile) return;
                    closeModal();
                })

            })
        }
    }

})


const CARD_PRODACT = document.querySelectorAll('[class*="wrapper-img-coffee"]'); // массив карточек товаров
let n = CARD_PRODACT.length;

for (let i = 0; i < n; i++) { // открытие модалки
    CARD_PRODACT[i].addEventListener("click", event => {

        const CARD_CONTENT = CARD_PRODACT[i].children;





          //   document.querySelector(".body").classList.add("modal");  // фиксация экрана
          bodyFixModal();
        
        
        
        
        
        let classScreen = screen(); // определение расширения (для выбора окна модалки)
        creatModal(classScreen);  //создание и открытие модалки

        if (classScreen != "modal-mobile") {
            addImgModal(i);
        }



        let widthPadding = widthModal(classScreen); // определение ширины и padding для description
        addDescriptModal(widthPadding, i);


        // переключение кнопок 
        OpenCloseButtonModal()

        //условие закрытия модального окна
        event._isClickProfile = true;
        document.querySelector(".modal-background div").addEventListener("click", event => {
            event._isClickProfile = true;
        })
        document.querySelector(".modal-background").addEventListener("click", event => {
            if (event._isClickProfile) return;
            closeModal();
        })
        document.querySelector(".modal-description-button").addEventListener("click", event => {
            if (event._isClickProfile) return;
            closeModal();
        })

    })


}

function widthModal(width) {   // определение ширины для description
    let widPadd = [];


    if (width === "modal-desktop") {
        widPadd = ["458px", "20px"];
    }
    if (width === "modal-tablet") {
        widPadd = ["346px", "20px"];
    }
    if (width === "modal-mobile") {
        widPadd = ["310px", "0px"];
    }
    return widPadd;
}


function creatModal(cls) { // создание модалки
    // window
    let elem = document.createElement('div'); // фон
    elem.classList.add("modal-background");
    elem.classList.add("open");

    let modal = document.createElement('div'); // модальное окно контур
    modal.classList.add(`${cls}`);

    elem.appendChild(modal);
    document.querySelector(".body-container").appendChild(elem);


};




function closeModal() {  // закрытие модалки

    document.querySelector(".modal-background").classList.add("close");
    setTimeout(function () {
        document.querySelector(".modal-background").classList.remove("open");
        document.querySelector(".body-container").removeChild(document.querySelector(".modal-background"));
    }, 500)

   // document.querySelector(".body").classList.remove("modal");
   bodyClosefixModal();
}





function addImgModal(i) {// добавление картинки модального окна
    let image = document.createElement('div');
    document.querySelector(".modal-background div").appendChild(image);
    image.classList.add("modal-img");

    function ImgforCoffee() {   /// картинки для coffee
        let n = i + 1;
        if (n % 2 != 0) {
            let k = Math.floor(n / 2) + 1;
            image.style.backgroundImage = `url(assets/img/menu_coffee-${k}.png)`;

        } else {
            if (n === 2) { image.style.backgroundImage = `url(assets/img/menu_coffee-${5}.png)` };
            if (n === 4) { image.style.backgroundImage = `url(assets/img/menu_coffee-${6}.png)` };
            if (n === 6) { image.style.backgroundImage = `url(assets/img/menu_coffee-${7}.png)` };
            if (n === 8) { image.style.backgroundImage = `url(assets/img/menu_coffee-${8}.png)` };
        }

        if (CARD_PRODACT_REFRESH != undefined) {
            if (n === 1) { image.style.backgroundImage = `url(assets/img/menu_coffee-${5}.png)` };
            if (n === 2) { image.style.backgroundImage = `url(assets/img/menu_coffee-${6}.png)` };
            if (n === 3) { image.style.backgroundImage = `url(assets/img/menu_coffee-${7}.png)` };
            if (n === 4) { image.style.backgroundImage = `url(assets/img/menu_coffee-${8}.png)` };
        }
    }
    function ImgforTea() {  /// картинки для tea
        let n = i + 1;

        if (n % 2 != 0) {
            let k = Math.floor(n / 2) + 1;
            image.style.backgroundImage = `url(assets/img/tea-${k}.png)`;

        } else {
            if (n === 2) { image.style.backgroundImage = `url(assets/img/tea-${3}.png)` };
            if (n === 4) { image.style.backgroundImage = `url(assets/img/tea-${4}.png)` };
        }
    }
    function ImgforDessert() {    /// картинки для dessert
        let n = i + 1;
        if (n % 2 != 0) {
            let k = Math.floor(n / 2) + 1;
            image.style.backgroundImage = `url(assets/img/dessert-${k}.png)`;

        } else {
            if (n === 2) { image.style.backgroundImage = `url(assets/img/dessert-${5}.png)` };
            if (n === 4) { image.style.backgroundImage = `url(assets/img/dessert-${6}.png)` };
            if (n === 6) { image.style.backgroundImage = `url(assets/img/dessert-${7}.png)` };
            if (n === 8) { image.style.backgroundImage = `url(assets/img/dessert-${8}.png)` };
        }

        if (CARD_PRODACT_REFRESH != undefined) {
            if (n === 1) { image.style.backgroundImage = `url(assets/img/dessert-${5}.png)` };
            if (n === 2) { image.style.backgroundImage = `url(assets/img/dessert-${6}.png)` };
            if (n === 3) { image.style.backgroundImage = `url(assets/img/dessert-${7}.png)` };
            if (n === 4) { image.style.backgroundImage = `url(assets/img/dessert-${8}.png)` };
        }
    }


    if (document.querySelector(".images-container2").classList.contains("coffee")) {
        ImgforCoffee();
    }


    if (document.querySelector(".images-container2").classList.contains("tea")) {
        ImgforTea();
    }

    if (document.querySelector(".images-container2").classList.contains("dessert")) {
        ImgforDessert();
    }

}

function addDescriptModal(widthPad, i) {
    let description = document.createElement('div');    // карточка модального окна_описание
    description.style.width = widthPad[0];
    description.style.paddingLeft = widthPad[1];
    document.querySelector(".modal-background div").appendChild(description);
    description.classList.add("modal-description");







    descriptionTitle();
    descriptionSize();
    descriptionAdditives();
    descriptionTotal();
    descriptionAlert();
    descriptionButton();




    let indCard = i;
    function descriptionforCoffee() {   /// описание для coffee
        let arrCardInd = [0, 4, 1, 5, 2, 6, 3, 7]; // индексация в json
        let arrCardIndRefresh = [4, 5, 6, 7];

        let ind = arrCardInd[indCard];

        document.querySelector(".modal-description-title").firstChild.innerHTML = `${data[ind].name}`;
        document.querySelector(".modal-description-title").lastChild.innerHTML = `${data[ind].description}`;
        document.querySelector(".modal-description-total").lastChild.innerHTML = `$${data[ind].price}`;


        if (CARD_PRODACT_REFRESH != undefined) {
            ind = arrCardIndRefresh[indCard];
            document.querySelector(".modal-description-title").firstChild.innerHTML = `${data[ind].name}`;
            document.querySelector(".modal-description-title").lastChild.innerHTML = `${data[ind].description}`;
            document.querySelector(".modal-description-total").lastChild.innerHTML = `$${data[ind].price}`;
        }

    }

    function descriptionforTea() {   /// описание для coffee
        let arrCardInd = [8, , 9, , 10, , 11,]; // индексация в json

        let ind = arrCardInd[indCard];
       
        document.querySelector(".modal-description-title").firstChild.innerHTML = `${data[ind].name}`;
        document.querySelector(".modal-description-title").lastChild.innerHTML = `${data[ind].description}`;
        document.querySelector(".modal-description-total").lastChild.innerHTML = `$${data[ind].price}`;
    }


    function descriptionforDessert() {   /// описание для dessert
        let arrCardInd = [12, 16, 13, 17, 14, 18, 15, 19]; // индексация в json
        let arrCardIndRefresh = [16, 17, 18, 19];

        let ind = arrCardInd[indCard];
  
        document.querySelector(".modal-description-title").firstChild.innerHTML = `${data[ind].name}`;
        document.querySelector(".modal-description-title").lastChild.innerHTML = `${data[ind].description}`;
        document.querySelector(".modal-description-total").lastChild.innerHTML = `$${data[ind].price}`;


        if (CARD_PRODACT_REFRESH != undefined) {
            ind = arrCardIndRefresh[indCard];
            document.querySelector(".modal-description-title").firstChild.innerHTML = `${data[ind].name}`;
            document.querySelector(".modal-description-title").lastChild.innerHTML = `${data[ind].description}`;
            document.querySelector(".modal-description-total").lastChild.innerHTML = `$${data[ind].price}`;
        }


    }




    if (document.querySelector(".images-container2").classList.contains("coffee")) {
        descriptionforCoffee();
    }
    if (document.querySelector(".images-container2").classList.contains("tea")) {
        descriptionforTea();
    }
    if (document.querySelector(".images-container2").classList.contains("dessert")) {
        descriptionforDessert();
    }

}


function descriptionTitle() {     // карточка модального окна_описание_TITLE
    let descriptionTitle = document.createElement('div');
    document.querySelector(".modal-description").appendChild(descriptionTitle);
    descriptionTitle.classList.add("modal-description-title");
    let title = document.createElement('div');    // TITLE
    title.style.fontSize = "24px";
    title.style.fontWeight = "600";
    title.style.lineHeight = "125%";
    // addTitle();
    //  title.innerHTML = "Irish coffee";
    document.querySelector(".modal-description-title").appendChild(title);

    let descript = document.createElement('div'); // DESCRIPT
    descript.style.fontSize = "16px";
    descript.style.fontWeight = "400";
    descript.style.lineHeight = "150%";
    // addDescript();
    //  descript.innerHTML = "Fragrant black coffee with Jameson Irish whiskey and whipped milk";
    document.querySelector(".modal-description-title").appendChild(descript);

};
function descriptionSize() {     // карточка модального окна_описание_SIZE
    let descriptionSize = document.createElement('div');
    document.querySelector(".modal-description").appendChild(descriptionSize);
    descriptionSize.classList.add("modal-description-size");



    let title = document.createElement('div');    // TITLE
    title.style.fontSize = "16px";
    title.style.fontWeight = "400";
    title.style.lineHeight = "150%";
    title.innerHTML = "Size";
    document.querySelector(".modal-description-size").appendChild(title);


    let tabs = document.createElement('div'); // TABS
    tabs.classList.add("modal-size-tabs");
    document.querySelector(".modal-description-size").appendChild(tabs);

    let tabSize1 = document.createElement('div');
    let tabSize2 = document.createElement('div');
    let tabSize3 = document.createElement('div');
    tabSize1.classList.add("tab1-size");
    tabSize1.classList.add("open");
    tabSize2.classList.add("tab2-size");
    tabSize3.classList.add("tab3-size");
    document.querySelector(".modal-size-tabs").appendChild(tabSize1);
    document.querySelector(".modal-size-tabs").appendChild(tabSize2);
    document.querySelector(".modal-size-tabs").appendChild(tabSize3);


    let LettertabSize1 = document.createElement('div');
    let LettertabSize2 = document.createElement('div');
    let LettertabSize3 = document.createElement('div');
    LettertabSize1.innerHTML = "S";
    LettertabSize2.innerHTML = "M";
    LettertabSize3.innerHTML = "L";
    document.querySelector(".tab1-size").appendChild(LettertabSize1);
    document.querySelector(".tab2-size").appendChild(LettertabSize2);
    document.querySelector(".tab3-size").appendChild(LettertabSize3);
    LettertabSize1.classList.add("tab1-size-letter");
    LettertabSize1.classList.add("open");
    LettertabSize2.classList.add("tab2-size-letter");
    LettertabSize3.classList.add("tab3-size-letter");


    let gramsTabSize1 = document.createElement('div');
    let gramsTabSize2 = document.createElement('div');
    let gramsTabSize3 = document.createElement('div');
    if (document.querySelector(".images-container2").classList.contains("coffee")) {
        gramsTabSize1.innerHTML = "200 ml";
        gramsTabSize2.innerHTML = "300 ml";
        gramsTabSize3.innerHTML = "400 ml";
    }
    if (document.querySelector(".images-container2").classList.contains("tea")) {
        gramsTabSize1.innerHTML = "200 ml";
        gramsTabSize2.innerHTML = "300 ml";
        gramsTabSize3.innerHTML = "400 ml";
    }
    if (document.querySelector(".images-container2").classList.contains("dessert")) {
        gramsTabSize1.innerHTML = "50 g";
        gramsTabSize2.innerHTML = "100 g";
        gramsTabSize3.innerHTML = "200 g";

    }

    document.querySelector(".tab1-size").appendChild(gramsTabSize1);
    document.querySelector(".tab2-size").appendChild(gramsTabSize2);
    document.querySelector(".tab3-size").appendChild(gramsTabSize3);


}
function descriptionAdditives() {     // карточка модального окна_описание_ADDITIVES
    let descriptionAdditives = document.createElement('div');
    document.querySelector(".modal-description").appendChild(descriptionAdditives);
    descriptionAdditives.classList.add("modal-description-additives");

    let title = document.createElement('div');    // TITLE
    title.style.fontSize = "16px";
    title.style.fontWeight = "400";
    title.style.lineHeight = "150%";
    title.innerHTML = "Additives";
    document.querySelector(".modal-description-additives").appendChild(title);


    let tabs = document.createElement('div'); // TABS
    tabs.classList.add("modal-additives-tabs");
    document.querySelector(".modal-description-additives").appendChild(tabs);

    let tabAdditives1 = document.createElement('div');
    let tabAdditives2 = document.createElement('div');
    let tabAdditives3 = document.createElement('div');
    tabAdditives1.classList.add("tab1-additives");
    tabAdditives2.classList.add("tab2-additives");
    tabAdditives3.classList.add("tab3-additives");
    document.querySelector(".modal-additives-tabs").appendChild(tabAdditives1);
    document.querySelector(".modal-additives-tabs").appendChild(tabAdditives2);
    document.querySelector(".modal-additives-tabs").appendChild(tabAdditives3);


    let LettertabAdditives1 = document.createElement('div');
    let LettertabAdditives2 = document.createElement('div');
    let LettertabAdditives3 = document.createElement('div');
    LettertabAdditives1.innerHTML = "1";
    LettertabAdditives2.innerHTML = "2";
    LettertabAdditives3.innerHTML = "3";
    document.querySelector(".tab1-additives").appendChild(LettertabAdditives1);
    document.querySelector(".tab2-additives").appendChild(LettertabAdditives2);
    document.querySelector(".tab3-additives").appendChild(LettertabAdditives3);
    LettertabAdditives1.classList.add("tab1-additives-letter");
    LettertabAdditives2.classList.add("tab2-additives-letter");
    LettertabAdditives3.classList.add("tab3-additives-letter");


    let gramsTabAdditives1 = document.createElement('div');
    let gramsTabAdditives2 = document.createElement('div');
    let gramsTabAdditives3 = document.createElement('div');
    if (document.querySelector(".images-container2").classList.contains("coffee")) {
        gramsTabAdditives1.innerHTML = "Sugar";
        gramsTabAdditives2.innerHTML = "Cinnamon";
        gramsTabAdditives3.innerHTML = "Syrup";
    }
    if (document.querySelector(".images-container2").classList.contains("tea")) {
        gramsTabAdditives1.innerHTML = "Sugar";
        gramsTabAdditives2.innerHTML = "Lemon";
        gramsTabAdditives3.innerHTML = "Syrup";
    }
    if (document.querySelector(".images-container2").classList.contains("dessert")) {
        gramsTabAdditives1.innerHTML = "Berries";
        gramsTabAdditives2.innerHTML = "Nuts";
        gramsTabAdditives3.innerHTML = "Jam";

    }

    document.querySelector(".tab1-additives").appendChild(gramsTabAdditives1);
    document.querySelector(".tab2-additives").appendChild(gramsTabAdditives2);
    document.querySelector(".tab3-additives").appendChild(gramsTabAdditives3);

}
function descriptionTotal() {  // карточка модального окна_описание_TOTAL
    let descriptionTotal = document.createElement('div');
    document.querySelector(".modal-description").appendChild(descriptionTotal);
    descriptionTotal.classList.add("modal-description-total");

    let total = document.createElement('div');
    let price = document.createElement('div');
    total.innerHTML = "Total:";
    //   price.innerHTML = "$3.50"; // totalPrice()

    document.querySelector(".modal-description-total").appendChild(total);
    document.querySelector(".modal-description-total").appendChild(price);

}
function descriptionAlert() {  // карточка модального окна_описание_ALERT
    let descriptionAlert = document.createElement('div');
    document.querySelector(".modal-description").appendChild(descriptionAlert);
    descriptionAlert.classList.add("modal-description-alert");

    let infoImg = document.createElement('div');
    let infoText = document.createElement('div');
    infoImg.style.width = "16px";
    infoImg.style.height = "16px";
    infoImg.style.backgroundImage = "url(assets/img/info-empty.png)";
    infoText.innerHTML = "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.";
    infoText.classList.add("modal-description-alert-text");
    document.querySelector(".modal-description-alert").appendChild(infoImg);
    document.querySelector(".modal-description-alert").appendChild(infoText);


}
function descriptionButton() {   // карточка модального окна_описание_BUTTON
    let descriptionButton = document.createElement('button');
    document.querySelector(".modal-description").appendChild(descriptionButton);
    descriptionButton.classList.add("modal-description-button");
    document.querySelector(".modal-description-button").innerHTML = "Close";
}



function screen() { // определение разрешения
    let cls;

    let w = window.innerWidth;

    if (w <= 730) {
        cls = "modal-mobile";
    }
    if (w <= 850 && w > 730) {
        cls = "modal-tablet";
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



window.addEventListener('resize', function () {  // закрытие модалки при смене разрешения
    let w = window.innerWidth;
    if (document.querySelectorAll('[class*="modal-background"]').length > 0) {
        if (w <= 2000 && document.querySelector(".modal-background").classList.contains("close") === false) {

            closeModal();
        }
    }
})




// переключение кнопок модального окна

function OpenCloseButtonModal() {
    let price = Number(document.querySelector(".modal-description-total").lastChild.innerHTML.slice(1))


    document.querySelector(".tab1-size").addEventListener("click", function () {
        openS(price)
    })
    document.querySelector(".tab2-size").addEventListener("click", function () {
        openM(price)
    })
    document.querySelector(".tab3-size").addEventListener("click", function () {
        openL(price)
    })




    document.querySelector(".tab1-additives").addEventListener("click", function () {
        open1();

    })
    document.querySelector(".tab2-additives").addEventListener("click", function () {
        open2();
    })
    document.querySelector(".tab3-additives").addEventListener("click", function () {
        open3();
    })


}
function openS(price) {
    document.querySelector(".tab1-size").classList.add("open");
    document.querySelector(".tab2-size").classList.remove("open");
    document.querySelector(".tab3-size").classList.remove("open");
    document.querySelector(".tab1-size-letter").classList.add("open");
    document.querySelector(".tab2-size-letter").classList.remove("open");
    document.querySelector(".tab3-size-letter").classList.remove("open");

    let count = startPrice();
    let pr = price + 0 + count;

    innerPrice(pr);

}
function openM(price) {
    document.querySelector(".tab1-size").classList.remove("open");
    document.querySelector(".tab2-size").classList.add("open");
    document.querySelector(".tab3-size").classList.remove("open");
    document.querySelector(".tab1-size-letter").classList.remove("open");
    document.querySelector(".tab2-size-letter").classList.add("open");
    document.querySelector(".tab3-size-letter").classList.remove("open");

    let count = startPrice();
    let pr = price + 0.5 + count;

    innerPrice(pr);


}
function openL(price) {
    document.querySelector(".tab1-size").classList.remove("open");
    document.querySelector(".tab2-size").classList.remove("open");
    document.querySelector(".tab3-size").classList.add("open");
    document.querySelector(".tab1-size-letter").classList.remove("open");
    document.querySelector(".tab2-size-letter").classList.remove("open");
    document.querySelector(".tab3-size-letter").classList.add("open");

    let count = startPrice();
    let pr = price + 1 + count;


    innerPrice(pr);

}



function open1() {
    document.querySelector(".tab1-additives").classList.toggle("open");
    document.querySelector(".tab1-additives-letter").classList.toggle("open");

    let pr = countForAdditives(1);

    innerPrice(pr);

}
function open2() {
    document.querySelector(".tab2-additives").classList.toggle("open");
    document.querySelector(".tab2-additives-letter").classList.toggle("open");

    let pr = countForAdditives(2);

    innerPrice(pr);
}
function open3() {
    document.querySelector(".tab3-additives").classList.toggle("open");
    document.querySelector(".tab3-additives-letter").classList.toggle("open");

    let pr = countForAdditives(3);

    innerPrice(pr);
}



function startPrice() {  // фиксация выбора additives
    let count = 0;
    for (let i = 1; i < 4; i++) {
        if (document.querySelector(`.tab${i}-additives`).classList.contains("open")) {
            count += 0.5;
        }
    }
    return count;
}

function countForAdditives(n) {  // счетчик для additives
    let pr = Number(document.querySelector(".modal-description-total").lastChild.innerHTML.slice(1));
    if (document.querySelector(`.tab${n}-additives`).classList.contains("open")) {
        pr += 0.5;
    } else {
        pr -= 0.5;
    }
    return pr;
}

function innerPrice(pr) {  // прорисовка результата price
    if (String(pr * 100)[2] === "0" && String(pr * 100)[1] === "0") {
        document.querySelector(".modal-description-total").lastChild.innerHTML = `$${pr}.00`;

    }
    if (String(pr * 100)[2] === "0" && String(pr * 100)[1] != "0") {
        document.querySelector(".modal-description-total").lastChild.innerHTML = `$${pr}0`;

    }
    if (String(pr * 100)[2] != "0" && String(pr * 100)[1] != "0") {
        document.querySelector(".modal-description-total").lastChild.innerHTML = `$${pr}`;

    }
}