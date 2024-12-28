const socShowHide = document.querySelector("#show-hide-socials");
const socials = document.querySelector(".dropdown-content");

const socialsShowHide = () => {
    socials.classList.toggle("sub-links-show");
}

socShowHide.addEventListener("click", socialsShowHide);