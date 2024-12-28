const burgerIcon = document.querySelector(".burger-icon-open");
const burgerClose = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");

const burgerMenuShow = () => {
    burgerMenu.classList.toggle("burger-menu-show");
    burgerIcon.classList.toggle("burger-menu-hide");
}

burgerIcon.addEventListener("click", burgerMenuShow);
burgerClose.addEventListener("click", burgerMenuShow);