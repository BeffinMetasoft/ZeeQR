import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // supportedLngs: ['en', 'de', 'ar'],
        fallbackLng: 'en',
        debug: true,
        saveMissing: true,
        detection: {
            order: [ 'localStorage','cookie', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
        backend: {
            loadPath: `${process.env.REACT_APP_API_AXIOS}language/{{lng}}`, // Replace with your backend API endpoint
            // loadPath: 'http://localhost:8000/api/language/{{lng}}', // Replace with your backend API endpoint
        },
       
    });


export default i18next