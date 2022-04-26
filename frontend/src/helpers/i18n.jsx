import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: require("../languages/en.json")
    },
    tr: {
            translation: require("../languages/tr.json")
        },
    de: {
                translation: require("../languages/de.json")
        }
}


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        react: {
            useSuspense: true
        },
        interpolation: { escapeValue: false },
        supportedLngs: ["tr", "en", "de"],
        lng: localStorage.getItem("language") || "en"
    });


export default i18next;