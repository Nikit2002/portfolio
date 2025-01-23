import React from 'react'
import HTML5 from '../../hard-skills logos/icon-html5.svg';
import CSS3 from '../../hard-skills logos/icon-css3.svg';
import JavaScript from '../../hard-skills logos/icon-javascript.svg';
import PHP from '../../hard-skills logos/icon-php.svg';
import Portfolio__Arrow__Left from '../../portfolio/portfolio-arrow-left.svg';
import Portfolio__Arrow__Right from '../../portfolio/portfolio-arrow-right.svg';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Portfolio = () => {
    const { t } = useTranslation();
    const [showFullInfo, setShowFullInfo] = useState(false);

    const showFullDesc = () => {
        setShowFullInfo(true);
    }

    const carousel = useRef();
    const firstCard = useRef(null);
    const [firstCardWidth, setFirstCardWidth] = useState(0);

    useEffect(() => {
        setFirstCardWidth(firstCard.current.offsetWidth)
    }, []);

    const arrowButtonLeft = useRef();
    const arrowButtonRight = useRef();
    
    const scrollCarousel = (e, id) => {
        console.log(id);
        e.preventDefault();
        carousel.current.scrollLeft += id === "left" ? -firstCardWidth : firstCardWidth;
    }
    
  return (
    <>
    <section className="portfolio reveal" id="portfolio">
            
            <div className="port-heading">
                <h2 id="head-portfolio">{t("head_portfolio")}</h2>
            </div>

            <div className="diploma-bgr"></div>

            <div className="portfolio-carousel" ref={carousel}>
                <div className="portfolio-item-active" ref={firstCard}>
                    <div className="screens">
                       <div className="tablet" draggable="false"></div>
                       <div className="macbook" draggable="false">
                        <div className="screen">
                          <div className="viewport">
                          </div>
                        </div>
                        <div className="base"></div>
                        <div className="notch"></div>
                      </div>
                        
                        <div className="phone" draggable="false"></div>

                    </div>

                    <div className="portfolio-title-active" draggable="false">
                        <h2 id="portfol-title-1">{t("portfol_title_1")}</h2>
                    </div>
                    <div className="portfolio-name-active" draggable="false">
                        <span>Gear Autoparts</span>
                    </div>
                    <div className="portfolio-desc-active" draggable="false">
                        <p id="portfol-desc-1">Lorem ipsum dolor sit amet...</p>
                    </div>

                    {showFullInfo &&
                    <>
                    <div className="portfolio-full-desc-active"  draggable="false">
                        <p id="portfol-desc-1">Main task: Create responsive, user-friendly website for autoparts store <br /> Stack used: HTML, CSS, JS, PHP</p>
                    </div>

                    <div className="portfolio-lang-icons"  draggable="false">
                        <div className="lang-icon">
                            <a href="#"><img src={HTML5} alt="html5" /></a>
                        </div>
                        <div className="lang-icon">
                            <a href="#"><img src={CSS3} alt="css3" className="usual icon" /></a>
                        </div>
                        <div className="lang-icon">
                            <a href="#"><img src={JavaScript} alt="javascript" /></a>
                        </div>
                        <div className="lang-icon">
                            <a href="#"><img src={PHP} alt="php" className="php icon" /></a>
                        </div>
                    </div>
                    </>
                    }
                    <div className="portfolio-buttons-active" draggable="false">
                        <a href="#" className="view-active" id="demo-but">{t("demo_btn")}</a>
                        <button className="full-active" id="full-but" onClick={showFullDesc}>{t("full_btn")}</button>
                    </div>
                       
                </div>



                <div className="portfolio-item-active" ref={firstCard}>
                    <div className="screens">
                        <div className="tablet-2" draggable="false"></div>
                        <div className="macbook-2" draggable="false">
                            <div className="screen-2">
                              <div className="viewport-2">
                              </div>
                            </div>
                            <div className="base-2"></div>
                            <div className="notch-2"></div>
                          </div>
                        
                        <div className="phone-2" draggable="false"></div>
 
                     </div>
                    
                    <div className="portfolio-title-active" draggable="false">
                        <h2 id="portfol-title-2">{t("portfol_title_2")}</h2>
                    </div>
                    <div className="portfolio-name-active" draggable="false">
                        <span>Luxury Watches</span>
                    </div>
                    <div className="portfolio-desc-active" draggable="false">
                        <p id="portfol-desc-2">Lorem ipsum dolor sit amet...</p>
                    </div>

                    {showFullInfo &&
                    <>
                    <div className="portfolio-full-desc-active"  draggable="false">
                        <p id="portfol-desc-1">Main task: Create responsive, user-friendly website for watches store <br /> Stack used: HTML, CSS, JS</p>
                    </div>

                    <div className="portfolio-lang-icons"  draggable="false">
                        <div className="lang-icon">
                            <a href="#"><img src={HTML5} alt="html5" /></a>
                        </div>
                        <div className="lang-icon">
                            <a href="#"><img src={CSS3} alt="css3" className="usual icon" /></a>
                        </div>
                        <div className="lang-icon">
                            <a href="#"><img src={JavaScript} alt="javascript" /></a>
                        </div>
                    </div>
                    </>
                    }
                    <div className="portfolio-buttons-active" draggable="false">
                        <a href="#" className="view-active" id="demo-but">View Demo</a>
                        <button className="full-active" id="full-but" onClick={showFullDesc}>Full Description</button>
                    </div> 
                </div>


                


                <div className="portfolio-item-active" ref={firstCard}>
                        <div className="screens">
                            <div className="tablet-3" draggable="false"></div>
                            <div className="macbook-3" draggable="false">
                                <div className="screen-3">
                                  <div className="viewport-3">
                                  </div>
                                </div>
                                <div className="base-3"></div>
                                <div className="notch-3"></div>
                              </div>
                            
                            <div className="phone-3" draggable="false"></div>
     
                         </div>
                    
                    <div className="portfolio-title-active" draggable="false">
                        <h2 id="portfol-title-3">{t("portfol_title_3")}</h2>
                    </div>
                    <div className="portfolio-name-active" draggable="false">
                        <span>Luxo</span>
                    </div>
                    <div className="portfolio-desc-active" draggable="false">
                        <p id="portfol-desc-3">Lorem ipsum dolor sit amet...</p>
                    </div>
                    {showFullInfo &&
                    <>
                    <div className="portfolio-full-desc-active"  draggable="false">
                        <p id="portfol-desc-1">Main task: Create responsive, user-friendly business card website<br /> Stack used: HTML, CSS</p>
                    </div>

                    <div className="portfolio-lang-icons"  draggable="false">
                        <div className="lang-icon">
                            <a href="#"><img src={HTML5} alt="html5" /></a>
                        </div>
                        <div className="lang-icon">
                            <a href="#"><img src={CSS3} alt="css3" className="usual icon" /></a>
                        </div>
                    </div>
                    </>
                    }
                    <div className="portfolio-buttons-active" draggable="false">
                        <a href="#" className="view-active" id="demo-but">View Demo</a>
                        <button className="full-active" id="full-but" onClick={showFullDesc}>Full Description</button>
                    </div>  
                </div>
              </div>

              <div className="portfolio-arrows">
                <a href="#" className="portfolio-arrow" ref={arrowButtonLeft} id="left"  onClick={(e) => scrollCarousel(e, "left")}><img src={Portfolio__Arrow__Left} alt="portfolio__arrow" /></a>
                <a href="#" className="portfolio-arrow" ref={arrowButtonRight} id="right" onClick={(e) => scrollCarousel(e, "right")}><img src={Portfolio__Arrow__Right} alt="portfolio__arrow" /></a>
              </div>

              

           <div id="portfolio-shelf">

           <div className="top"></div>
           <div className="front"></div>
           <div className="shadow"></div>
           </div>
           
        </section>
        </>
  )
}

export default Portfolio
