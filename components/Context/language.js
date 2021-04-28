import React, { useState, useContext, useEffect } from 'react'
import languageData from './langData'

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {

    const [currentLanguage, setCurrentLanguage] = useState(languageData.english);
    const [changeLanguage, setChangeLanguage] = useState(false);

    const switchLanguage = () => {
        localStorage.setItem('lang', changeLanguage)
        const getLangInStorage = localStorage.getItem('lang');
        if (getLangInStorage === true || changeLanguage) {
            return setCurrentLanguage(languageData.spanish)
        } else {
            return setCurrentLanguage(languageData.english)
        }
    }

    const hasLanguageInLocalStorage = () => {
        const currentStorage = localStorage.getItem('lang');
        if (!currentStorage) {
            return;
        } else {
            return setChangeLanguage(currentStorage);
        }
    }

    const values = {
        currentLanguage, setChangeLanguage
    }
    
    useEffect(() => {
        hasLanguageInLocalStorage();
    }, [])

    useEffect(() => {
        switchLanguage();
    }, [changeLanguage])

    return (
        <LanguageContext.Provider value={values}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext = () => useContext(LanguageContext);
