import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            "pages":{
                "index":{
                    "title":"NullMan",
                    "whoWeAre":{
                        "title":"I'm",
                        "description": "Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping. I can't think of much to say about my life. Thank you for reading.",
                    },
                    "main":{
                        "words":{
                            "1":"Developer",
                            "2": "Translator",
                            "3":"Freelancer"
                        }
                    },
                    "footer":{
                        "description":"Made with ❤ and NullMan"
                    },
                },
                "errors":{
                        "404":{
                            "title":"We couldn't find such a page here!",
                            "description":"The page you are looking for does not exist. You can go back to the homepage by clicking the button below."
                    }
},
            "partners":{
                "description":"We are working with some partners to make this website better. If you want to know more about them, you can have a look below.",
                "words":{
                    "1":"Partners",
                    "2":"Supporters"
                }
            },
            "projects":{
                "description":"Here you can see some of my projects. If you want to know more about them, you can have a look below.",
                "word":"Projects"
            }
},
"navbar":{
    "partners":"Partners",
    "projects":"Projects"
}
},
    },
tr: {
        translation: {
            "pages":{
                "index":{
                    "title":"NullMan",
                    "whoWeAre":{
                        "title":"Ben kimim?",
                        "description": "Merhaba, ben NullMan. Ben bir arka uç geliştiricisiyim. Lise 2. sınıf öğrencisiyim. En sevdiğim aktiviteler oyun oynamak, müzik dinlemek ve uyumak. Hayatım hakkında söyleyecek pek bir şey bulamıyorum. Okuduğunuz için teşekkürler.",
                    },
                    "main":{
                        "words":{
                            "1":"Geliştirici",
                            "2": "Çevirmen",
                            "3":"Freelancer"
                        }
                    },
                    "footer":{
                        "description":"Nullman ve ❤ ile yapıldı"
                    },
                },
                "errors":{
                        "404":{
                            "title":"Burada böyle bir sayfa bulamadık!",
                            "description":"Şuan bulunduğunuz sayfa bulunamıyor. 10saniye sonra anaya yönlendirileceksiniz."
                    }
                },
                "partners":{
                    "description":"Bu web sitesini daha iyi hale getirmek için bazı ortaklarla çalışıyoruz. Onlar hakkında daha fazla bilgi edinmek isterseniz, aşağıya bakabilirsiniz.",
                    "words":{
                        "1":"Ortaklarımız",
                        "2":"Destekçiler"
                    }
                },
            "projects":{
                "description":"Burada bazı projelerimi görebilirsiniz. Onlar hakkında daha fazla bilgi edinmek isterseniz, aşağıdan bir göz atabilirsiniz.",
                "word":"Projelerim"
            }
},
"navbar":{
    "partners":"Ortaklarımız",
    "projects":"Projelerim"
}
    }
}
    };


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        react: {
            useSuspense: true
        },
        interpolation: { escapeValue: false },
        supportedLngs: ["tr", "en"],
        lng: localStorage.getItem("language") || "en"
    });


export default i18next;
