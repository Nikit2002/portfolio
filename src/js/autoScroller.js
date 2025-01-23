             export const addAnimation = () => {
                let scrollerElements = document.querySelectorAll(".scroller");
                const scrollers = [...scrollerElements];
                  scrollers.map((scroller) => {
                    scroller.setAttribute("data-animated", true);
                    const scrollerInner = scroller.querySelector(".scroller__inner");
                    const scrollerContent = Array.from(scrollerInner.children);
                    scrollerContent.forEach((item) => {
                      const duplicatedItem = item.cloneNode(true);
                      duplicatedItem.setAttribute("aria-hidden", true);
                      scrollerInner.appendChild(duplicatedItem);
                    });
                  });
                }
