import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context/theme'
import { useLanguageContext } from '../Context/language'
import useStyles from './Styles'

const Coupon = ({ code, deleteCoupon }) => {
    
    const { currentLanguage } = useLanguageContext();
    const { themeColor } = useGlobalContext();
    const [showAd, setShowAd] = useState(false);
    const [expired, setExpired] = useState(false);
    const [seconds, setMinutes] = useState(60);
    const classes = useStyles(themeColor);

    const setFalse = () => setShowAd(false);

    const decreaseMinutes = () => setMinutes(seconds => seconds - 1);
 
    const openAd = () => {
        setShowAd(true);
        setTimeout(() => setFalse(), 5000);
    }

    useEffect(() => {
        if (seconds < 1) {
            setExpired(true);
            return deleteCoupon(code);
        } else {
            const newInterval = setInterval(() => decreaseMinutes(), 1000);
            return () => clearInterval(newInterval);
        }
    }, [seconds])
    
    return (
        <>
            <div className={classes.coupon} onClick={() => {
                navigator.clipboard.writeText(code);
                openAd();
                }}>
                <h1 style={{ textAlign: 'center' }}><span style={{ color: themeColor.neonColor, fontWeight: 'bold', fontSize: '2em'}}>&nbsp;{code}</span></h1>
                {expired 
                ? <Typography component='caption' ><span style={{ fontWeight: 'bold', color: themeColor.fontColor, }}>{currentLanguage.coupon.info[12]}</span> </Typography>
                : <Typography component='caption' style={{ color: themeColor.fontColor }} >{currentLanguage.coupon.info[13]} <span style={{ fontWeight: 'bold', color: seconds <= 30 && themeColor.neonColor }}>{seconds}s</span> </Typography>
                }
            </div>
            {
                showAd && 
                <div className={classes.popUp}>
                    <h4 style={{ color: themeColor.fontColor, fontWeight: 'bold' }}>{currentLanguage.coupon.info[14]} {code} {currentLanguage.coupon.info[15]}</h4>
                </div>
            }
        </>
    )
}

export default Coupon;