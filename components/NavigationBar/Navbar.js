import { useState, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core';
import { useGlobalContext } from '../Context/theme'
import { LanguageContext, useLanguageContext } from '../Context/language'
import Link from 'next/link'
import Image from 'next/image'
import useStyles from './Styles'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PaletteIcon from '@material-ui/icons/Palette';
import LanguageIcon from '@material-ui/icons/Language';

const Navbar = () => {

    const [offset, setOffset] = useState(0);
    const [previousOffset, setPreviousOffset] = useState(1);
    const { themeColor, darkTheme, setDarkTheme, changeNeonColor, setChangeNeonColor } = useGlobalContext();
    const { currentLanguage, setChangeLanguage } = useLanguageContext();
    const classes = useStyles(themeColor);
    const offsetsArray = [];


    useEffect(() => {
        window.addEventListener('scroll', () => {
            let newOffset = window.pageYOffset;
            if (offsetsArray.length >= 3) {
                offsetsArray.splice(0, 1);
            }
            offsetsArray.push(newOffset);
            setPreviousOffset(offsetsArray[1])
            setOffset(newOffset);
        })
        return window.removeEventListener('scroll', () => {
            setOffset(0);
        })
    }, [])


    return (
        <>
        <div style={{ margin: 0,
            padding: '20px 50px 20px 50px',
            // padding: '20vh 50vh 20vh 50vh',
            backgroundColor: themeColor.backgroundColor,
            borderBottom: `1px solid ${themeColor.neonColor}`,
            minWidth: '100vw',
            boxShadow: '0 0px 25px 0px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'space-evenly',
            position: 'fixed',
            transition: '0.3s ease-in-out',
            top: 0,
            zIndex: 1,
            transform: previousOffset < offset && 'translateY(-190px)',
            
             }}>
                <div className={classes.logo}>
                    <div >
                        <Link href='/'>
                        <Image 
                            priority
                            src="/images/logo.png"
                            alt="Andres Henao - Web Developer"
                            width={50}
                            height={50}
                        />
                        </Link>
                    </div>   
                </div>
                <div className={classes.menu}>
                        <Link href='#about'>
                            <div className={classes.menuItem}>
                                <a className={classes.link}><span className={classes.span}>01.&nbsp;</span>{currentLanguage.navigation.menuItems[0]}</a>
                            </div>                    
                        </Link>   
                        <Link href='#work'>
                            <div className={classes.menuItem} >
                                <a className={classes.link}><span className={classes.span}>02.&nbsp;</span>{currentLanguage.navigation.menuItems[1]}</a>
                            </div>                    
                        </Link>
                        <Link href='#contact'>
                            <div className={classes.menuItem}>
                                <a className={classes.link}><span className={classes.span}>03.&nbsp;</span>{currentLanguage.navigation.menuItems[2]}</a>
                            </div>                    
                        </Link>   
                </div>
                <div className={classes.buttonDiv}>
                    <div>
                        <button className={classes.button}>
                            {currentLanguage.navigation.button}
                        </button>
                    </div>
                </div>
        </div>
        <div className={classes.bottomDiv}>
            <div className={classes.bottomDivItem}>
                <div className={classes.button} onClick={() => setDarkTheme(theme => !theme)}>
                    {!darkTheme ? <Brightness4Icon/> : <Brightness7Icon/> }
                    <Typography variant='caption' style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;{!darkTheme ? 'Darkness' : 'Light'}</Typography>
                </div>
            </div>
            <div className={classes.bottomDivItem} onClick={() => setChangeNeonColor(neon => !neon)}>
                <div className={classes.button}>
                    <PaletteIcon />
                    <Typography variant='caption' style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;{!changeNeonColor ? 'Orange' : 'Emerald'}</Typography>
                </div>
            </div>
            <div className={classes.bottomDivItem}>
                <div className={classes.button}>
                    <PictureAsPdfIcon />
                    <Typography variant='caption' style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;{currentLanguage.navigation.button}</Typography>
                </div>
            </div>
            <div className={classes.bottomDivItem}>
                <div className={classes.button} onClick={() => setChangeLanguage(state => !state)}>
                    <LanguageIcon />
                    <Typography variant='caption' style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;{currentLanguage.lang}</Typography>
                </div>
            </div>
        </div>
        <div className={classes.floatingSwitcher}>
            <Typography align='center' variant='caption' style={{ marginTop: '5', color: '#fff', fontWeight: 'bold' }}>{currentLanguage.navigation.theme[0]}</Typography>
            <div className={classes.bottomDivItem}>
                <div className={classes.button} onClick={() => setDarkTheme(theme => !theme)}>
                    {!darkTheme ? <Brightness4Icon/> : <Brightness7Icon/> }
                    <Typography variant='caption' style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;{!darkTheme ? 'Darkness' : 'Light'}</Typography>
                </div>
            </div>
            <div className={classes.bottomDivItem} onClick={() => setChangeNeonColor(neon => !neon)}>
                <div className={classes.button}>
                    <PaletteIcon />
                    <Typography variant='caption' style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;{!changeNeonColor ? 'Orange' : 'Emerald'}</Typography>
                </div>
            </div>
            <div className={classes.bottomDivItem}>
                <div className={classes.button}>
                    <PictureAsPdfIcon />
                    <Typography variant='caption' style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;{currentLanguage.navigation.theme[2]}</Typography>
                </div>
            </div>
            <div className={classes.bottomDivItem}>
                <div className={classes.button} onClick={() => setChangeLanguage(state => !state)}>
                    <LanguageIcon />
                    <Typography variant='caption' style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;{currentLanguage.lang}</Typography>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;