// menu-burger

document.querySelector(".menu-burger").style.height = `${window.screen.height - 100}px`; // высота меню

function verticalScroll() {
    if (document.querySelector(".button-burger").classList.contains("open")) {
        document.querySelector(".body").classList.add("modal");
    } else {
        document.querySelector(".body").classList.remove("modal");
    }
}

function closeBurger() {
    document.querySelector(".menu-burger").classList.remove("open");
    document.querySelector(".button-burger").classList.remove("open");
    verticalScroll()
};



document.querySelector(".button-burger").addEventListener("click", function() {

    document.querySelector(".button-burger").classList.toggle("open");
    document.querySelector(".menu-burger").classList.toggle("open");
    verticalScroll()
});

document.querySelector(".menu-burger-nav-item1").addEventListener("click", function() {
    closeBurger();
})
document.querySelector(".menu-burger-nav-item2").addEventListener("click", function() {
    closeBurger();
});
document.querySelector(".menu-burger-nav-item3").addEventListener("click", function() {
    closeBurger();
});
document.querySelector(".menu-burger-nav-item4").addEventListener("click", function() {
    closeBurger();
});







// close  menu-burger > 768px
window.addEventListener('resize', function() {
    let w = window.innerWidth;
    if (w < 768 || w > 768) {
        closeBurger();
        verticalScroll()
    }
    
  });

