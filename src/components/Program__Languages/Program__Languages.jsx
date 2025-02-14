import React from 'react'
import HTML5 from '../../hard-skills logos/icon-html5.svg';
import HTML5__Coloured from '../../hard-skills logos/icon-html5-coloured.svg';
import CSS3 from '../../hard-skills logos/icon-css3.svg';
import CSS3__Coloured from '../../hard-skills logos/icon-css3-coloured.svg';
import Git from '../../hard-skills logos/icon-git.svg';
import Git__Coloured from '../../hard-skills logos/icon-git-coloured.svg';
import JavaScript from '../../hard-skills logos/icon-javascript.svg';
import JavaScript__Coloured from '../../hard-skills logos/icon-javascript-coloured.svg';
import SASS from '../../hard-skills logos/icon-sass.svg';
import SASS__Coloured from '../../hard-skills logos/icon-sass-coloured.svg';
import jQuery from '../../hard-skills logos/icon-jquery.svg';
import jQuery__Coloured from '../../hard-skills logos/icon-jquery-coloured.svg';
import TypeScript from '../../hard-skills logos/icon-typescript.svg';
import TypeScript__Coloured from '../../hard-skills logos/icon-typescript-coloured.svg';
import PHP from '../../hard-skills logos/icon-php.svg';
import PHP__Coloured from '../../hard-skills logos/icon-php-coloured.svg';
import React__logo from '../../hard-skills logos/icon-react-native.svg';
import React__logo__Coloured from '../../hard-skills logos/icon-react-native-coloured.svg';
import { addAnimation} from '../../js/autoScroller';
import { useEffect } from 'react';

const Program__Languages = () => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }
  }, [])
  return (
    <section className="program-languages reveal">
            
            <div className="heading">
                <h2>Hard skills</h2>
            </div>
            <div className="diploma-bgr"></div>

            <div className="scroller">
                <div className="tag-list scroller__inner">
                    <a href="#"><img className="logo" src={HTML5} /></a>
                    <a href="#"><img className="logo-hover" src={HTML5__Coloured} /></a>
                    <a href="#"><img className="logo" src={CSS3} /></a>
                    <a href="#"><img className="logo-hover" src={CSS3__Coloured} /></a>
                    <a href="#"><img className="logo" src={Git} /></a>
                    <a href="#"><img className="logo-hover" src={Git__Coloured} /></a>
                    <a href="#"><img className="logo" src={JavaScript} /></a>
                    <a href="#"><img className="logo-hover" src={JavaScript__Coloured} /></a>
                    <a href="#"><img className="logo" src={SASS} /></a>
                    <a href="#"><img className="logo-hover" src={SASS__Coloured} /></a>
                    <a href="#"><img className="logo" src={TypeScript} /></a>
                    <a href="#"><img className="logo-hover" src={TypeScript__Coloured} /></a>
                    <a href="#"><img className="logo" src={PHP} /></a>
                    <a href="#"><img className="logo-hover" src={PHP__Coloured} /></a>
                    <a href="#"><img className="logo" src={React__logo} /></a>
                    <a href="#"><img className="logo-hover" src={React__logo__Coloured} /></a>
                    <a href="#"><img className="logo" src={HTML5} /></a>
                    <a href="#"><img className="logo-hover" src={HTML5__Coloured} /></a>
                    <a href="#"><img className="logo" src={CSS3} /></a>
                    <a href="#"><img className="logo-hover" src={CSS3__Coloured} /></a>
                    <a href="#"><img className="logo" src={Git} /></a>
                    <a href="#"><img className="logo-hover" src={Git__Coloured} /></a>
                    <a href="#"><img className="logo" src={JavaScript} /></a>
                    <a href="#"><img className="logo-hover" src={JavaScript__Coloured} /></a>
                    <a href="#"><img className="logo" src={SASS} /></a>
                    <a href="#"><img className="logo-hover" src={SASS__Coloured} /></a>
                    <a href="#"><img className="logo" src={TypeScript} /></a>
                    <a href="#"><img className="logo-hover" src={TypeScript__Coloured} /></a>
                    <a href="#"><img className="logo" src={PHP} /></a>
                    <a href="#"><img className="logo-hover" src={PHP__Coloured} /></a>
                    <a href="#"><img className="logo" src={React__logo} /></a>
                    <a href="#"><img className="logo-hover" src={React__logo__Coloured} /></a>
                </div>
              </div>
             
           <div id="shelf">

           <div className="top"></div>
           <div className="front"></div>
           <div className="shadow"></div>
           </div>
           
        </section>
  )
}

export default Program__Languages
