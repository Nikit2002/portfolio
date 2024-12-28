const curUA = document.querySelector(".uah");
const curUSD = document.querySelector(".usd");
const priceUSD = document.querySelector(".price-pricing-span-usd");
const priceUAH = document.querySelector(".price-pricing-span-uah");

const curUApr = document.querySelector(".uah-premium");
const curUSDpr = document.querySelector(".usd-premium");
const priceUSDpr = document.querySelector(".price-pricing-span-usd-premium");
const priceUAHpr = document.querySelector(".price-pricing-span-uah-premium");


const changeUA = (e) => {
    priceUAH.classList.remove("uah-hide");
    priceUSD.classList.remove("usd-active");
    priceUSD.classList.add("usd-hide");
    priceUAH.classList.add("uah-active");
}

const changeUSD = (e) => {
    priceUSD.classList.remove("usd-hide");
    priceUAH.classList.remove("uah-active");
    priceUAH.classList.add("uah-hide");
    priceUSD.classList.add("usd-active");
}

const changeUApr = (e) => {
    priceUAHpr.classList.remove("uah-hide-pr");
    priceUSDpr.classList.remove("usd-active-pr");
    priceUSDpr.classList.add("usd-hide-pr");
    priceUAHpr.classList.add("uah-active-pr");
}

const changeUSDpr = (e) => {
    priceUSDpr.classList.remove("usd-hide-pr");
    priceUAHpr.classList.remove("uah-active-pr");
    priceUAHpr.classList.add("uah-hide-pr");
    priceUSDpr.classList.add("usd-active-pr");
}

curUA.addEventListener("click", changeUA);
curUSD.addEventListener("click", changeUSD);
curUApr.addEventListener("click", changeUApr);
curUSDpr.addEventListener("click", changeUSDpr);