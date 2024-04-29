// menu-burger

function verticalScroll() {
    if (document.querySelector(".button-burger").classList.contains("open")) {
        bodyFixModal();
    } else {
        bodyClosefixModal();
    }
}
function bodyFixModal() {

    setTimeout(function () {
        document.querySelector(".body").classList.add("modal");
        document.querySelector(".body").style.top = '0 px';

    }, 15);
}

// отмена фиксации экрана
function bodyClosefixModal() {


    document.querySelector(".body").style.top = '';
    document.querySelector(".body").classList.remove("modal");


    window.scroll(0, 0);


}

document.querySelector(".menu-burger-cup").addEventListener("click", function() {
    closeBurger();
});
function closeBurger() {
    document.querySelector(".menu-burger").classList.remove("open");
    document.querySelector(".button-burger").classList.remove("open");
    verticalScroll()
};


// carousel

const CAROUSEL = document.querySelector(".wrapper-slides");
const CAROUSEL_LINE = document.querySelector(".about-slides");
const ARROW_LEFT = document.querySelector(".arrow-left div");
const ARROW_RIGHT= document.querySelector(".arrow-right div");


let countImg = 0; // счетчик слайдеров
let widthCarousel = CAROUSEL.offsetWidth; // ширина видимого контента

ARROW_LEFT.addEventListener("click", prevImg);
ARROW_RIGHT.addEventListener("click", nextImg);

function prevImg() {
    countImg --;
    if (countImg < 0) {
        countImg = 2;
    }
    runIMG();
    roll_controls();
    roll_controls_delete();
    startTimer();
}
function nextImg() {

    countImg ++;
    if (countImg >= 3) {
        countImg = 0;
    }
    runIMG();
    roll_controls();
    roll_controls_delete();
    startTimer();
}

function runIMG() { // сдвиг карусели
    CAROUSEL_LINE.style.left = `${-widthCarousel * countImg}px`;
}


// настройка контролов
const CONTROLS_ARR = document.querySelectorAll(".control-slide div");
const CONTROLS_PROGRESS = document.querySelectorAll(".progress-control");


function roll_controls(sec) {
    CONTROLS_ARR[countImg].style.backgroundColor = "#665F55";
    const PROGRESS = 100 / 6 * sec;
    CONTROLS_PROGRESS[countImg].style.width = `${PROGRESS}%`;
}
function roll_controls_delete() {
    if (countImg === 0) {
        CONTROLS_ARR[1].style.backgroundColor = "#C1B6AD";
        CONTROLS_PROGRESS[1].style.width = "0";
        CONTROLS_ARR[2].style.backgroundColor = "#C1B6AD";
        CONTROLS_PROGRESS[2].style.width = "0";
    } else if (countImg === 1) {
        CONTROLS_ARR[0].style.backgroundColor = "#C1B6AD";
        CONTROLS_PROGRESS[0].style.width = "0";
        CONTROLS_ARR[2].style.backgroundColor = "#C1B6AD";
        CONTROLS_PROGRESS[2].style.width = "0";
    } else if (countImg === 2) {
        CONTROLS_ARR[0].style.backgroundColor = "#C1B6AD";
        CONTROLS_PROGRESS[0].style.width = "0";
        CONTROLS_ARR[1].style.backgroundColor = "#C1B6AD";
        CONTROLS_PROGRESS[1].style.width = "0";
    };
}

// автоматическое перелистывание карусели
let timer = 0;
let sec = 0;
let isPaused = false;
startTimer();
function startTimer() {

    sec = 0;
    clearInterval(timer);
    timer = setInterval(function() {
        if(!isPaused){
            sec++;
            roll_controls(sec);
            if (sec > 6) {
                next();
            }
        }        
    }, 1000);
    
}
function next() {
    clearInterval(timer);
    nextImg()
}


// остановка заполнения контролла при наведении/удержании
CAROUSEL.addEventListener('touchstart', stopSlide);
CAROUSEL.addEventListener('touchend', startSlide);
CAROUSEL.addEventListener('mouseover', stopSlide);
CAROUSEL.addEventListener('mouseout', startSlide);

function stopSlide () {
    isPaused = true;
}
function startSlide () {
    isPaused = false;
}






// touch and mouse
CAROUSEL.addEventListener('touchstart', swipeStart, false);
CAROUSEL.addEventListener('touchmove', swipeMove, false);
CAROUSEL.addEventListener('touchend', swipeEnd);
CAROUSEL.addEventListener('mousedown', mouseStart, false);
CAROUSEL.addEventListener('mousemove', mouseMove, false);
CAROUSEL.addEventListener('mouseup', mouseEnd,false);

let positionX1 = null;
let positionDiff = null;

// for touch
function swipeStart(event) {
    const oneTouch = event.touches[0];
    positionX1 = oneTouch.clientX;
}
function swipeMove (event) {
    if (!positionX1) {
        return false;
    }
    let positionX2 = event.touches[0].clientX;
    positionDiff = positionX2 - positionX1;
    CAROUSEL_LINE.style.left = `${-widthCarousel * countImg + positionDiff}px`;
    CAROUSEL.addEventListener('touchend', swipeEnd);
}

function swipeEnd () {
   
    if (-positionDiff >= widthCarousel * 0.4) {
           nextImg()
   
   ;
       } else if (positionDiff >= widthCarousel * 0.4) {
           prevImg()
       
   
       } else if((-positionDiff <= widthCarousel * 0.4) && positionDiff <= widthCarousel * 0.4) {
           CAROUSEL_LINE.style.left = `${-widthCarousel * countImg}px`;
          
       }

    positionX1 = null;
    positionDiff = null;
}

// for mouse
function mouseStart(event) {
    CAROUSEL.addEventListener('mousedown', mouseStart, false);
    positionX1 = event.clientX;
}
function mouseMove (event) {
    if (!positionX1) {
        return false;
    }
    let positionX2 = event.clientX;
    positionDiff = positionX2 - positionX1;
    CAROUSEL_LINE.style.left = `${-widthCarousel * countImg + positionDiff}px`;
    CAROUSEL.addEventListener('mouseout', mouseEnd);
}
function mouseEnd () {
    if (-positionDiff >= widthCarousel * 0.4) {
        nextImg()

;
    } else if (positionDiff >= widthCarousel * 0.4) {
        prevImg()
    

    } else if((-positionDiff <= widthCarousel * 0.4) && positionDiff <= widthCarousel * 0.4) {
        CAROUSEL_LINE.style.left = `${-widthCarousel * countImg}px`;
       
    }

    positionX1 = null;
    positionDiff = null;

}

