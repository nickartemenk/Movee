const hamMenu = document.querySelector(".burger-mobile__btn");
const offScreenMenu = document.querySelector(".menu");
const btnUp = document.querySelector(".btn-up");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    btnUp.classList.toggle("active");
    btnUp.onclick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
});