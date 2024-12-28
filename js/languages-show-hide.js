const langShowHide = document.querySelector("#show-hide");
const langs = document.querySelector(".sub-links");

const showHide = () => {
    langs.classList.toggle("sub-links-show");
}

langShowHide.addEventListener("click", showHide);

