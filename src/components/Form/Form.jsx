import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t } = useTranslation();
  const formMessage = useRef();
  const success = useRef();
  const nameField = useRef();
  const emailField = useRef();
  const messageField = useRef();
  const fail = useRef();
  const form = useRef();

  const [formData, setFormData] = useState({});
  const pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  const email__support = useRef();
  const [isAvailableForWork, setIsAvailableForWork] = useState(true);

  
  
  const formMessagePrevent = () => {
      if (nameField.current.value == "" || emailField.current.value == "" || messageField.current.value == "") {
          formMessage.current.classList.add("form-message-show");
          formMessage.current.children[0].remove();
          formMessage.current.innerHTML = `<p class="form-attention">${t("empty__fields")}</p>`;
      }
      formMessage.current.classList.add("form-message-show");
      formMessage.current.innerHTML = `<p class="form-success form-message-show">${t("success_msg")}</p>`;
      nameField.current.value = "";
      emailField.current.value = "";
      messageField.current.value = "";
      success.current.classList.add("form-message-show");
  }
  
  const formMessageShow = () => {
      if (nameField.current.value == "" || emailField.current.value == "" || messageField.current.value == "") {
          formMessage.current.classList.add("form-message-show");
          formMessage.current.children[0].remove();
          formMessage.current.innerHTML = `<p class="form-attention">${t("empty__fields")}</p>`;  
      }
          
      
  }
  
  const formMessageHide = () => {
          formMessage.current.classList.remove("form-message-show");
  }

  const formMessageShowEmail = () => {
    if (nameField.current.value == "" || emailField.current.value == "" || messageField.current.value == "") {
      formMessage.current.classList.add("form-message-show");
      formMessage.current.children[0].remove();
      formMessage.current.innerHTML = `<p class="form-attention">${t("empty__fields")}</p>`;
    }
    formMessage.current.classList.add("form-message-show");
    email__support.current.classList.remove("show__hint");
  }

  const formMessageHideEmail = () => {
    formMessage.current.classList.remove("form-message-show");
    email__support.current.classList.add("show__hint");
  }

  console.dir(email__support);


  const setFormDataToObject = (value, props) => {
    setFormData({...formData, [props]: value});
  }
  

  useEffect(() => {
    if (isAvailableForWork) {
      form.current.addEventListener("submit", formMessagePrevent);
      nameField.current.addEventListener("focus", formMessageHide);
      emailField.current.addEventListener("focus", formMessageHideEmail);
      messageField.current.addEventListener("focus", formMessageHide);
      nameField.current.addEventListener("blur", formMessageShow);
      emailField.current.addEventListener("blur", formMessageShowEmail);
      messageField.current.addEventListener("blur", formMessageShow);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }
  }, [])

  
  
  
  return (
    <section className="contact reveal" id="contact">
        
            <div className="heading">
                <h2 id="contact-section-txt">{t("head__contact")}</h2>
            </div>
            <div className="diploma-bgr"></div>
            <form ref={form} action="https://api.web3forms.com/submit" method="POST" >
              {isAvailableForWork ? <>
                <input type="hidden" name="access_key" value="2d7ae73d-7b7e-4862-a921-823e1e38c6fe" />
                <input type="text" onChange={(e) => setFormDataToObject(e.target.value, "name")} name="name" id="name-field" ref={nameField} className="name-field" placeholder={t("name_field")} data-translate="name-field" required />
                <input type="email" onChange={(e) => setFormDataToObject(e.target.value, "email")} name="email" id="email-field" ref={emailField} className="email-field" placeholder={t("email_field")} data-translate="email-field" required />
                <div className="email__support" ref={email__support}>
                    <p>{t("right__email")}</p>
                </div>
                <textarea name="message" onChange={(e) => setFormDataToObject(e.target.value, "message")} id="message-field" ref={messageField} cols="30" rows="10" placeholder={t("message_field")} className="message-field" required></textarea>
                <div className="form-message" ref={formMessage}>
                    <p className="form-success" ref={success}>{t("success_msg")}</p>
                    <p className="form-fail" ref={fail}>{t("fail_msg")}</p>
                </div>
                {formData.name === "" || formData.email && formData.email.match(pattern) === null || formData.email === "" || formData.message === "" ? 
                <button type="submit" id="sub-field" disabled={true} className="submit-form__disabled">{t("sub_field")}</button>
                :
                <button type="submit" id="sub-field" className="submit-form">{t("sub_field")}</button>
                }
                </> 
                :
                <div className="form-busy-message">
                    <p className="form-unavailable">{t("unavailable")}</p>
                </div>
              }
            </form>
    </section>
  )
}

export default Form