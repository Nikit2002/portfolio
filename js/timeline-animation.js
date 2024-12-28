const items = document.querySelectorAll(".timeline-list-item");



const displayTimelineItems = (e) => {

    const triggerBottom = (window.innerHeight / 5) * 4;

    items.forEach((item) => {
        const topItem = item.getBoundingClientRect().top;
        
        if (topItem < triggerBottom) {
            item.classList.remove("timeline-list-item");
            setTimeout(2000);
            item.classList.add("content-up-opacity");
        }
        else{
            item.classList.remove("content-up-opacity");
            setTimeout(2000);
            item.classList.add("timeline-list-item");
        }
    });
}



document.addEventListener("scroll", displayTimelineItems);