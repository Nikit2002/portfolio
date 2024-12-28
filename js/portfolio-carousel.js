const carousel = document.querySelector(".portfolio-carousel");

const firstCardWidth = carousel.querySelector(".portfolio-item-active").offsetWidth;

const arrowButtons = document.querySelectorAll(".portfolio-arrow");

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX || e.touches[0].pageX) -startX;
    carousel.scrollLeft === "left"? -firstCardWidth : firstCardWidth;
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

arrowButtons.forEach(arrowButton => {

    arrowButton.addEventListener("click", (e) => {
        e.preventDefault();
        carousel.scrollLeft += arrowButton.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});
    
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
