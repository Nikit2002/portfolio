import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import TJC from '../../timeline/company logos/tjc.png'

const Work__Tiimeline = () => {
  const { t } = useTranslation();

  const items = document.querySelectorAll(".timeline-list-item");
  const items__list = [...items];
  const line = document.querySelector("hr");
  const dots = document.querySelectorAll(".dot");
  const dots__list = [...dots];
  const [animation, setAnimation] = useState(false);

  const triggerBottom = (window.innerHeight / 5) * 4;
  
  const displayTimelineItems = () => {


   items__list.map(item => {
       const topItem = item.getBoundingClientRect().top;
       if (topItem < triggerBottom) {
           line.classList.remove("set-usual-line");
           line.classList.add("animate-line");
           dots__list.map(dot => dot.style.opacity = "1");
           item.classList.remove("timeline-list-item");
           setTimeout(2000);
           item.classList.add("content-up-opacity");
       } else{
           dots__list.map(dot => dot.style.opacity = "0");
           item.classList.remove("content-up-opacity");
           setTimeout(2000);
           line.classList.remove("animate-line");
           line.classList.add("set-usual-line");
           item.classList.add("timeline-list-item");
       }
   })



   
}



  useEffect(() => {
   animation == "false" ? setAnimation(false) : setAnimation(true);
   document.addEventListener('scroll', displayTimelineItems);
 }, [animation])

  return (
    <section className="timeline reveal">
            
            <div className="heading">
                <h2 id="head-work">{t("head_work")}</h2>
            </div>

            <div className="diploma-bgr"></div>

            <hr/>
            
            
            <div className="timeline-elements">

            <ul className="timeline-list-items-odd">
                    <li className="timeline-list-item">  
                        <div className="content-up">
                         <img src={TJC} alt="tjc" />
                         <div className="content-text">
                         <h4>TJC</h4>
                         <span id="timeline-role">{t("timeline_role")}</span>
                         <p>2022-2023</p>
                         </div>
                        </div>
                     </li>
                     <li className="timeline-list-item">  
                        <div className="content-up">
                         <img src={TJC} alt="tjc" />
                         <div className="content-text">
                         <h4>TJC</h4>
                         <span id="timeline-role">{t("timeline_role")}</span>
                         <p>2022-2023</p>
                         </div>
                        </div>
                     </li>
                     <li className="timeline-list-item">  
                        <div className="content-up">
                         <img src={TJC} alt="tjc" />
                         <div className="content-text">
                         <h4>TJC</h4>
                         <span id="timeline-role">{t("timeline_role")}</span>
                         <p>2022-2023</p>
                         </div>
                        </div>
                     </li>
            </ul>
            
            <ul className="dots">
                <li className="timeline-list-dot"><a href="#" className="dot"></a></li>
                <li className="timeline-list-dot"><a href="#" className="dot"></a></li>
                <li className="timeline-list-dot"><a href="#" className="dot"></a></li>
                <li className="timeline-list-dot"><a href="#" className="dot"></a></li>
                <li className="timeline-list-dot"><a href="#" className="dot"></a></li>
                <li className="timeline-list-dot"><a href="#" className="dot"></a></li>
            </ul>

            <ul className="timeline-list-items-even">
                    <li className="timeline-list-item">  
                        <div className="content-up">
                         <img src={TJC} alt="tjc" />
                         <div className="content-text">
                         <h4>TJC</h4>
                         <span id="timeline-role">{t("timeline_role")}</span>
                         <p>2022-2023</p>
                         </div>
                        </div>
                     </li>
                     <li className="timeline-list-item">  
                        <div className="content-up">
                         <img src={TJC} alt="tjc" />
                         <div className="content-text">
                         <h4>TJC</h4>
                         <span id="timeline-role">{t("timeline_role")}</span>
                         <p>2022-2023</p>
                         </div>
                        </div>
                     </li>
                     <li className="timeline-list-item">  
                        <div className="content-up">
                         <img src={TJC} alt="tjc" />
                         <div className="content-text">
                         <h4>TJC</h4>
                         <span id="timeline-role">{t("timeline_role")}</span>
                         <p>2022-2023</p>
                         </div>
                        </div>
                     </li>
            </ul>
        </div>
        </section>
  )
}

export default Work__Tiimeline