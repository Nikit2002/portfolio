import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Render from '../../assets/render.png'
import Resume from '../../resume/Frontend Developer.pdf';
const Photo__Render = () => {
  const { t } = useTranslation();
  return (
    <>
    <section className="image">
            <marquee behavior="" direction="right" id="first-name">{t("first_name")}</marquee>
            <div className="photo-block reveal">
                <div className="photo-bckgrd">
                </div>
                <img src={Render} alt="render__photo" />
                <br />                
            </div>
            <marquee behavior="" direction="left" id="last-name">{t("last_name")}</marquee>
        </section>
        <section className="role">
            <h2 className="role-name reveal" id="role">{t("role")}</h2>
            <a href={Resume} title=""download className="resume reveal"><i className="fa fa-download"></i>{t("resume_text")}</a>
        </section>
    </>
  )
}

export default Photo__Render
