import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import layoutEs from './languages/es/layout.json';
import layoutEn from './languages/en/layout.json';
import heroEs from './languages/es/hero.json';
import heroEn from './languages/en/hero.json';
import servicesEs from './languages/es/services.json';
import servicesEn from './languages/en/services.json';
import contactEs from './languages/es/contact.json';
import contactEn from './languages/en/contact.json';
import faqEs from './languages/es/faq.json';
import faqEn from './languages/en/faq.json';
import homeEs from './languages/es/home.json';
import homeEn from './languages/en/home.json';
import whychooseusEs from './languages/es/whychooseus.json';
import whychooseusEn from './languages/en/whychooseus.json';
import servicespageEs from './languages/es/servicespage.json';
import servicespageEn from './languages/en/servicespage.json';
import footerEs from './languages/es/footer.json';
import footerEn from './languages/en/footer.json';
import aboutUsEs from './languages/es/aboutUs.json';
import aboutUsEn from './languages/en/aboutUs.json';
import statisticsEs from './languages/es/statistics.json';
import statisticsEn from './languages/en/statistics.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'es',
        resources: {
            es: {
                layout: layoutEs,
                hero: heroEs,
                services: servicesEs,
                contact: contactEs,
                faq: faqEs,
                home: homeEs,
                whychooseus: whychooseusEs,
                servicespage: servicespageEs,
                footer: footerEs,
                aboutUs: aboutUsEs,
                statistics: statisticsEs,
            },
            en: {
                layout: layoutEn,
                hero: heroEn,
                services: servicesEn,
                contact: contactEn,
                faq: faqEn,
                home: homeEn,
                whychooseus: whychooseusEn,
                servicespage: servicespageEn,
                footer: footerEn,
                aboutUs: aboutUsEn,
                statistics: statisticsEn,
            },
        },
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['path', 'localStorage', 'navigator'],
            lookupFromPathIndex: 0, // detecta idioma desde /en/...
        },
    });

export default i18n;
