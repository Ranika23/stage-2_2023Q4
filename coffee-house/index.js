//import data from './products.json' assert { type: "json" };
//console.log(data[0])




// menu-burger
function closeBurger() {
    document.querySelector(".menu-burger").classList.remove("open");
    document.querySelector(".button-burger").classList.remove("open");
};

document.querySelector(".button-burger").addEventListener("click", function() {
    document.querySelector(".button-burger").classList.toggle("open");
    document.querySelector(".menu-burger").classList.toggle("open");
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
    if (w < 769) {
        closeBurger();
    }
  });

