import React, { useState, useContext, useEffect } from 'react'

export const ThemeContext = React.createContext();

export const ContextThemeProvider = ({ children }) => {
    
    const [darkTheme, setDarkTheme] = useState(false);
    const [changeNeonColor, setChangeNeonColor] = useState(false);
    
    const defaultThemes = {
        lightTheme: {
            fontColor: '#313131', 
            backgroundColor: '#f5f5f5', 
            backgroundColorLight: changeNeonColor ? '#E0E2CD' : '#DCEAE2',
            // E0E2CD
            neonColor: changeNeonColor ?  '#ff7700' : '#009488',
        },  
        darkerTheme: {
            fontColor: '#fff', 
            backgroundColor: '#313131', 
            backgroundColorLight: '#414141',
            neonColor: changeNeonColor ? '#ff7700' : '#009488',
        }
    }

    const stateOfStorage = {
        neonColor: changeNeonColor, 
        theme: darkTheme, 
        style: darkTheme ? defaultThemes.darkerTheme : defaultThemes.lightTheme
    }

    const [themeColor, setThemeColor] = useState(defaultThemes.lightTheme);
    
    const hasLocalStorage = () => {
        const currentStorage = JSON.parse(localStorage.getItem("theme"));
        if (!currentStorage) {
            return;
        } else {
            setDarkTheme(currentStorage.theme);
            setChangeNeonColor(currentStorage.neonColor);
            return setThemeColor(currentStorage.style);
        }
    }

    const changeLocalStorage = () => {
        if (darkTheme) {
            localStorage.setItem("theme", JSON.stringify({ ...stateOfStorage, theme: darkTheme }))
            const newStorage = JSON.parse(localStorage.getItem("theme"));
            return setThemeColor(newStorage.style);
        } else {
            localStorage.setItem("theme", JSON.stringify({ ...stateOfStorage, theme: darkTheme}))
            const newStorage = JSON.parse(localStorage.getItem("theme"));
            return setThemeColor(newStorage.style);
        }
    }
    
    const values = {
        darkTheme, setDarkTheme, themeColor, setChangeNeonColor, changeNeonColor
    }

    useEffect(() => {
        hasLocalStorage();
    }, [])

    useEffect(() => {
        changeLocalStorage();
    }, [darkTheme, changeNeonColor])

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useGlobalContext = () => useContext(ThemeContext);
