import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

  const curUA = useRef();
  const curUSD = useRef();
  const priceUSD = useRef();
  const priceUAH = useRef();
  
  const curUApr = useRef();
  const curUSDpr = useRef();
  const priceUSDpr = useRef();
  const priceUAHpr = useRef();
  
  
  const changeUA = () => {
    priceUAH.current.classList.remove("uah-hide");
    priceUSD.current.classList.remove("usd-active");
    priceUSD.current.classList.add("usd-hide");
    priceUAH.current.classList.add("uah-active");
}

const changeUSD = () => {
    priceUSD.current.classList.remove("usd-hide");
    priceUAH.current.classList.remove("uah-active");
    priceUAH.current.classList.add("uah-hide");
    priceUSD.current.classList.add("usd-active");
}

const changeUApr = () => {
    priceUAHpr.current.classList.remove("uah-hide-pr");
    priceUSDpr.current.classList.remove("usd-active-pr");
    priceUSDpr.current.classList.add("usd-hide-pr");
    priceUAHpr.current.classList.add("uah-active-pr");
}

const changeUSDpr = () => {
    priceUSDpr.current.classList.remove("usd-hide-pr");
    priceUAHpr.current.classList.remove("uah-active-pr");
    priceUAHpr.current.classList.add("uah-hide-pr");
    priceUSDpr.current.classList.add("usd-active-pr");
}
  return (
    <section className="pricing reveal" id="pricing">
        
            <div className="heading">
                <h2 id="pricing-section-txt">{t("head__price")}</h2>
            </div>

            <div className="diploma-bgr"></div>

        <div className="pricing-blocks">
            <div className="pricing-block reveal">
                <div className="heading-pricing">
                    <h2 id="bas-pricing">{t("bas_pricing")}</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="price-pricing">
                    <span className="price-pricing-span-usd" ref={priceUSD}>$1000</span>
                    <span className="price-pricing-span-uah" ref={priceUAH}>40 000₴</span>
                </div>
                <div className="currency-selector">
                    <button className="usd" ref={curUSD} onClick={changeUSD}>$USD</button>
                    <button className="uah" ref={curUA} onClick={changeUA}>UAH ₴</button>
                </div>
            </div>

            <div className="pricing-block reveal">
                <div className="heading-pricing">
                    <h2 id="pr-pricing">{t("pr_pricing")}</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pricing">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="price-pricing">
                    <span className="price-pricing-span-usd-premium" ref={priceUSDpr}>$2000</span>
                    <span className="price-pricing-span-uah-premium" ref={priceUAHpr}>80 000₴</span>
                </div>
                <div className="currency-selector">
                    <button className="usd-premium" ref={curUSDpr} onClick={changeUSDpr}>$USD</button>
                    <button className="uah-premium" ref={curUApr} onClick={changeUApr}>UAH ₴</button>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Pricing