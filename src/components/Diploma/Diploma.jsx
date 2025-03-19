import React from 'react'
import Certificate_1 from '../../certificates/Certificate-1.jpg';
import Certificate_2 from '../../certificates/Certificate-2.jpg';
import Certificate_3 from '../../certificates/Certificate-3.jpg';
import Certificate_4 from '../../certificates/Certificate-4.jpg';
import Certificate_5 from '../../certificates/Certificate-5.jpg';
import Certificate_6 from '../../certificates/Certificate-6.jpg';
import Certificate_7 from '../../certificates/Certificate-7.jpg';
import Certificate_8 from '../../certificates/Certificate-8.jpg';
import Certificate_9 from '../../certificates/Certificate-9.jpg';
import Certificate_10 from '../../certificates/Certificate-10.jpg';
import Certificate_11 from '../../certificates/Certificate-11.jpg';
import Certificate_12 from '../../certificates/Certificate-12.jpg';
import { useTranslation } from 'react-i18next';

const Diploma = () => {
  const { t } = useTranslation();
  return (
    <section className="diploma reveal" id="about">
            <div className="heading">
                <h2 id="head-diplomas">{t("head_diplomas")}</h2>
            </div>
            <div className="diploma-bgr"></div>
            <section className="diploma-and-titles">
            <div className="diploma-row">
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_10}><img src={Certificate_10} /></a>
                <div className="titles">
                    <h2>Frontend Developer (React)</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_1}><img src={Certificate_1} /></a>
                <div className="titles">
                    <h2>HTML5 & CSS3 Starter</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_2}><img src={Certificate_2} /></a>
                <div className="titles">
                    <h2>JAVASCRIPT Starter</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_3}><img src={Certificate_3} /></a>
                <div className="titles">
                    <h2>Figma.Online store design</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_4}><img src={Certificate_4} /></a>
                <div className="titles">
                    <h2>The basics of using Git</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_5}><img src={Certificate_5} /></a>
                <div className="titles">
                    <h2>JAVASCRIPT Essential</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_6}><img src={Certificate_6} /></a>
                <div className="titles">
                    <h2>HTML5 & CSS3 Advanced</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_9}><img src={Certificate_9} /></a>
                <div className="titles">
                    <h2>React Essential</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_11}><img src={Certificate_11} /></a>
                <div className="titles">
                    <h2>TypeScript Fundamentals</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_12}><img src={Certificate_12} /></a>
                <div className="titles">
                    <h2>Angular Essential</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_7}><img src={Certificate_7} /></a>
                <div className="titles">
                    <h2>IT English</h2>
                </div>
                </div>
                <div className="diploma__obj">
                <a data-fancybox="gallery" href={Certificate_8}><img src={Certificate_8} /></a>
                <div className="titles">
                    <h2>Business English</h2>
                </div>
                </div>
            </div>
        </section>

        <section className="diploma-and-titles-desktop">
            
            <div className="shelf__diploma">

        	<div className="diploma-row-desktop">
                <a data-fancybox="gallery" href={Certificate_10}><img src={Certificate_10} /></a>
            </div>

            <div className="titles-row-desktop">
                <div className="titles">
                    <h2>Frontend Developer (React)</h2>
                </div>
            </div>

            <div id="shelf-diploma">

                <div className="top"></div>
                <div className="front"></div>
                <div className="shadow"></div>
                </div>
            
            </div>

            <div className="shelf__diploma">

            <div className="diploma-row-desktop">
                <a data-fancybox="gallery" href={Certificate_1}><img src={Certificate_1} /></a>
		        <a data-fancybox="gallery" href={Certificate_2}><img src={Certificate_2} /></a>
		        <a data-fancybox="gallery" href={Certificate_3}><img src={Certificate_3} /></a>
            </div>

            <div className="titles-row-desktop">
                <div className="titles">
                    <h2>HTML5 & CSS3 Starter</h2>
                </div>
                <div className="titles">
                    <h2>JAVASCRIPT Starter</h2>
                </div>
                <div className="titles">
                    <h2>Figma.Online store design</h2>
                </div>
            </div>

            <div id="shelf-diploma">

                <div className="top"></div>
                <div className="front"></div>
                <div className="shadow"></div>
                </div>

            </div>

            <div className="shelf__diploma">

            <div className="diploma-row-desktop">
                <a data-fancybox="gallery" href={Certificate_4}><img src={Certificate_4} /></a>
		        <a data-fancybox="gallery" href={Certificate_5}><img src={Certificate_5} /></a>
		        <a data-fancybox="gallery" href={Certificate_6}><img src={Certificate_6} /></a>
            </div>

            <div className="titles-row-desktop">
                <div className="titles">
                    <h2>The basics of using Git</h2>
                </div>
                <div className="titles">
                    <h2>JAVASCRIPT Essential</h2>
                </div>
                <div className="titles">
                    <h2>HTML5 & CSS3 Advanced</h2>
                </div>
            </div>

            <div id="shelf-diploma">

                <div className="top"></div>
                <div className="front"></div>
                <div className="shadow"></div>
                </div>

            </div>

            <div className="shelf__diploma">

            <div className="diploma-row-desktop">
                <a data-fancybox="gallery" href={Certificate_9}><img src={Certificate_9} /></a>
		        <a data-fancybox="gallery" href={Certificate_11}><img src={Certificate_11} /></a>
		        <a data-fancybox="gallery" href={Certificate_12}><img src={Certificate_12} /></a>
            </div>

            <div className="titles-row-desktop">
                <div className="titles">
                    <h2>React Essential</h2>
                </div>
                <div className="titles">
                    <h2>TypeScript Fundamentals</h2>
                </div>
                <div className="titles">
                    <h2>Angular Essential</h2>
                </div>
            </div>

            <div id="shelf-diploma">

                <div className="top"></div>
                <div className="front"></div>
                <div className="shadow"></div>
                </div>

            </div>

            <div className="shelf__diploma">

            <div className="diploma-row-desktop">
                <a data-fancybox="gallery" href={Certificate_7}><img src={Certificate_7} /></a>
		        <a data-fancybox="gallery" href={Certificate_8}><img src={Certificate_8} /></a>
            </div>

            <div className="titles-row-desktop">
                <div className="titles">
                    <h2>IT English</h2>
                </div>
                <div className="titles">
                    <h2>Business English</h2>
                </div>
            </div>

            <div id="shelf-diploma">

                <div className="top"></div>
                <div className="front"></div>
                <div className="shadow"></div>
                </div>

            </div>
        </section>

            <div className="shelfs-row">

            	<div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>

                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>
                
                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>    

                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>

                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>
                
                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>    

                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>

                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>

                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>

                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>

                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>

                <div id="shelfs">

                    <div className="top-shelfs"></div>
                    <div className="front-shelfs"></div>
                    <div className="shadow-shelfs"></div>
                </div>
            </div>
            

           

           
        </section>
  )
}

export default Diploma
