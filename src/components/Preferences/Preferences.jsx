import React from 'react'
import { useTranslation } from 'react-i18next';

const Preferences = () => {
  const { t } = useTranslation();
  return (
    <section className="preferences reveal">
        
            <div className="pref-heading">
                <h2 id="head-prefer">{t("head_prefer")}</h2>
            </div>

            <div className="diploma-bgr"></div>
        
        <div className="preferences-items">
            <div className="preferences-item reveal">
                <div className="round-icon-coding"></div>
                <div className="heading-pref">
                    <h2 id="web-dev">{t("web_dev")}</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
            </div>

            <div className="preferences-item reveal">
                <div className="round-icon-responsive"></div>
                <div className="heading-pref">
                    <h2 id="respons-dev">{t("respons_dev")}</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="text-pref">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
            </div>

            
            
        </div>
    </section>
  )
}

export default Preferences