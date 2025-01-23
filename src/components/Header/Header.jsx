import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { supportedLngs } from '../../i18n';
import BurgerIcon from '../../assets/icon-burger-menu.svg';
import XIcon from '../../assets//icon-circled-x.svg';

const Header = () => {
  const { t, i18n } = useTranslation();

  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [isOpenLangsMenu, setIsOpenLangsMenu] = useState(false);
  const [isOpenDropSocMenu, setIsOpenDropSocMenu] = useState(false);
  

  return (
    <header>
        <div className="nav-container">
        <nav>
             
            <div className={`${i18n.language === "ua" ? "full-menu-ua" : "full-menu"}`}>
                <a href="#" className="text-logo">ND</a>
                <a href="#" className="menu-item" id="home-menu">{t("home_menu")}</a>
                <a href="#about" className="menu-item" id="about-menu">{t("about_menu")}</a>
                <a href="#portfolio" className="menu-item" id="portfolio-menu">{t("portfolio_menu")}</a>
                <a href="#pricing" className="menu-item" id="pricing-menu">{t("pricing_menu")}</a>
                <a href="#contact" className="menu-item" id="contact-menu">{t("contact_menu")}</a>

                <div className="socials">
                <a href="https://www.linkedin.com/in/mykyta-dubinin-1238682a3/" className="fab fa-brands fa-linkedin-in"></a>
                <a href="https://www.linkedin.com/in/mykyta-dubinin-1238682a3/" className="fab fa-brands fa-linkedin-in"></a>
                <a href="https://www.linkedin.com/in/mykyta-dubinin-1238682a3/" className="fab fa-brands fa-linkedin-in"></a>
                </div>

                <div className="dropdown-socials">
                    <a href="#" onClick={isOpenDropSocMenu ? () => setIsOpenDropSocMenu(false) : () => setIsOpenDropSocMenu(true)} className="fab fa-regular fa-message" id="show-hide-socials"></a>
                    {isOpenDropSocMenu &&
                    <div className="dropdown-content">
                        <a href="https://www.linkedin.com/in/mykyta-dubinin-1238682a3/" className="fab fa-brands fa-linkedin-in"></a>
                        <a href="https://www.linkedin.com/in/mykyta-dubinin-1238682a3/" className="fab fa-brands fa-linkedin-in"></a>
                        <a href="https://www.linkedin.com/in/mykyta-dubinin-1238682a3/" className="fab fa-brands fa-linkedin-in"></a>
                    </div>
                    }
                  </div>

                <div className="dropdown-container" >
                    <a href="#" className="fas fa-light fa-globe" id="show-hide" onClick={isOpenLangsMenu ? () => setIsOpenLangsMenu(false) : () => setIsOpenLangsMenu(true)}></a>
                    {isOpenLangsMenu &&
                    <ul className="sub-links">
                        <li><a className="sub-link" href="#" onClick={() => i18n.changeLanguage("en")}>EN</a></li>
                        <li><a className="sub-link" href="#" onClick={() => i18n.changeLanguage("ua")}>UA</a></li>
                    </ul>
                    }
                </div>

                <img src={BurgerIcon} onClick={isOpenBurgerMenu ? () => setIsOpenBurgerMenu(false) : () => setIsOpenBurgerMenu(true)} alt="burger__icon" className="burger-icon-open" />
            </div>
            {isOpenBurgerMenu && 
            <div className="burger-menu">
                <img src={XIcon} alt="x__icon" onClick={isOpenBurgerMenu ? () => setIsOpenBurgerMenu(false) : () => setIsOpenBurgerMenu(true)} className="burger-icon" />
                
                <a href="#" className="burger-menu-item" id="burger-home-menu">{t("home_menu")}</a>
                <a href="#about" className="burger-menu-item" id="burger-about-menu">{t("about_menu")}</a>
                <a href="#portfolio" className="burger-menu-item" id="burger-portfolio-menu">{t("portfolio_menu")}</a>
                <a href="#pricing" className="burger-menu-item" id="burger-pricing-menu">{t("pricing_menu")}</a>
                <a href="#contact" className="burger-menu-item" id="burger-contact-menu">{t("contact_menu")}</a>
            
                <div className="round-buttons">

                <div className="burger-socials">
                    <a href="https://www.linkedin.com/in/mykyta-dubinin-1238682a3/" className="fab fa-brands fa-linkedin-in"></a>
                    <a href="https://www.linkedin.com/in/mykyta-dubinin-1238682a3/" className="fab fa-brands fa-linkedin-in"></a>
                    <a href="https://www.linkedin.com/in/mykyta-dubinin-1238682a3/" className="fab fa-brands fa-linkedin-in"></a>
                </div>

                <ul className="burger-sub-links">
                    <li><a className="burger-sub-link" href="#" onClick={() => i18n.changeLanguage("en")}>EN</a></li>
                    <li><a className="burger-sub-link" href="#" onClick={() => i18n.changeLanguage("ua")}>UA</a></li>
                </ul>
                
                </div>
                
            </div>
            }
        </nav>
    </div>
    </header>
  )
}

export default Header
