const burgerMenuBtn = document.querySelector(".burger-mobile__btn");
const menu = document.querySelector(".menu");
const btnUp = document.querySelector(".btn-up");
const menuItems = document.querySelectorAll(".menu-item");
const body = document.body;

const toggleClasses = () => {
    burgerMenuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
};

burgerMenuBtn.addEventListener("click", () => {
    toggleClasses()
});

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        toggleClasses()
        btnUp.classList.add("active");
    })
});

btnUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    btnUp.classList.remove("active");
});