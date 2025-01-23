import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



export const supportedLngs = {
       en: "English",
       ua: "Ukrainian",
     };

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: Object.keys(supportedLngs),

    interpolation: {
      escapeValue: false, 
    },

    resources: {
        en: {
            translation: {
                home_menu: "Home",
                about_menu: "About",
                portfolio_menu: "Portfolio",
                pricing_menu: "Pricing",
                contact_menu: "Contact",
                pricing_section_txt: "Pricing",
                contact_section_txt: "Contact",
                first_name: "Nikita",
                last_name: "Dubinin",
                role: "Fullstack developer",
                resume_text: "Download My resume",
                head_diplomas: "Diplomas and Certificates",
                head_portfolio: "Portfolio",
                portfol_title_1: "Ecommerce Shop", 
                portfol_desc_1: "Lorem ipsum dolor sit amet...",
                portfol_title_2: "Ecommerce Shop", 
                portfol_desc_2: "Lorem ipsum dolor sit amet...",
                portfol_title_3: "Business Card", 
                portfol_desc_3: "Lorem ipsum dolor sit amet...",
                demo_btn: "View Demo",
                full_btn: "Full Description",
                head_work: "Work Experience",
                timeline_role: "Backend developer",
                head_prefer: "Preferences",
                web_dev: "Web Development",
                respons_dev: "Responsive Development",
                head__price: "Pricing",
                bas_pricing: "Basic Pricing",
                pr_pricing: "Premium Pricing",
                name_field: "Your Name",
                email_field: "Your Email",
                message_field: "Enter your Message",
                sub_field: "Submit",
                success_msg: "Form submitted successfully!",
                empty__fields: "Some fields are empty. Please, fill them and then continue",
                head__contact: "Contact",
                right__email: "Valid email address: yourName@mail.com",
                fail_msg: "Error occuried. Please, try again.",
                unavailable: "I temporary unavailable for work. Please, connect with me later"
            }
        },
        ua: {
            translation: {
                home_menu: "Головна",
                about_menu: "Інформація",
                portfolio_menu: "Портфоліо",
                pricing_menu: "Ціни",
                contact_menu: "Контакти",
                pricing_section_txt: "Ціни",
                contact_section_txt: "Контакти",
                first_name: "Микита",
                last_name: "Дубінін",
                role: "Fullstack розробник",
                resume_text: "Завантажити резюме",
                head_diplomas: "Дипломи та Сертифікати",
                head_portfolio: "Портфоліо",
                portfol_title_1: "Інтернет магазин", 
                portfol_desc_1: "Lorem ipsum dolor sit amet...",
                portfol_title_2: "Інтернет магазин", 
                portfol_desc_2: "Lorem ipsum dolor sit amet...",
                portfol_title_3: "Сайт-візитка", 
                portfol_desc_3: "Lorem ipsum dolor sit amet...",
                demo_btn: "Демо",
                full_btn: "Повний опис",
                head_work: "Досвід роботи",
                timeline_role: "Backend розробник",
                head_prefer: "Переваги",
                web_dev: "Web розробка",
                respons_dev: "Адаптивна розробка",
                head__price: "Цінові плани",
                bas_pricing: "Базовий план",
                pr_pricing: "Premium план",
                name_field: "Ваше ім'я",
                email_field: "Ваша пошта",
                message_field: "Введіть повідомлення",
                sub_field: "Відправити",
                success_msg: "Форма успішно відправлена",
                empty__fields: "Виявлені незаповнені поля. Будь ласка, заповніть їх",
                head__contact: "Залишити повідомлення",
                right__email: "Правильна email адреса: yourName@mail.com",
                fail_msg: "Виникла помилка. Будь ласка, спробуйте ще раз",
                unavailable: "Наразі я недоступний для роботи. Будь ласка, зв'яжіться зі мною згодом"
            }
        }
    }
  });


export default i18n;