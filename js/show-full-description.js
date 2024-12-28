const fullDesc = document.querySelectorAll(".portfolio-full-desc-active");
const showFullButton = document.querySelectorAll(".full-active");
const langIcons = document.querySelectorAll(".portfolio-lang-icons");

const showFullDescLeft = (e) => {
    fullDesc[0].classList.add("visual-visible");
    langIcons[0].classList.add("visual-shown");
}

const showFullDescCenter = (e) => {
    fullDesc[1].classList.add("visual-visible");
    langIcons[1].classList.add("visual-shown");
}

const showFullDescRight = (e) => {
    fullDesc[2].classList.add("visual-visible");
    langIcons[2].classList.add("visual-shown");
}

showFullButton[0].addEventListener("click", showFullDescLeft);
showFullButton[1].addEventListener("click", showFullDescCenter);
showFullButton[2].addEventListener("click", showFullDescRight);