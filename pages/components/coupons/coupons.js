import { Paper, TextField } from '@material-ui/core'
import { useState, useRef } from 'react'
import { useGlobalContext } from '../../../components/Context/theme'
import { useLanguageContext } from '../../../components/Context/language'
import useStyles from './Styles'
import Link from 'next/link'
import Head from 'next/head'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import Coupon from '../../../components/Coupon/Coupon'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Coupons = () => {
    
    const { currentLanguage } = useLanguageContext();
    const { themeColor, changeNeonColor } = useGlobalContext();
    const classes = useStyles(themeColor);
    const successMessage = 'Congratulations! Click any of the boxes below to copy a coupon code on your clipboard';
    const errorMessageOne = 'Coupons must have at least 5 characters!';
    const errorMessageTwo = 'That coupon already exists!';
    const errorMessageThree = 'Coupon redeemed successfully!';
    const errorMessageFour = 'That coupon code does not exist or already expired!';
    const [generatedCoupon, setGeneratedCoupon] = useState(false);
    const [isRandomCoupon, setIsRandomCoupon] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [error, setError] = useState(errorMessageOne);
    const [couponCodes, setCouponCodes] = useState([]);
    const [expiredCoupons, setExpiredCoupons] = useState([]);
    const couponRef = useRef();
    const redeemRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(successMessage);
        if (isRandomCoupon) {
            const randomCoupon = (Math.random() + 1).toString(36).substring(7);
            const upperCasedCoupon = randomCoupon.replace(' ', '').toUpperCase();
            const repeatedCoupon = couponCodes.find(coupon => coupon === upperCasedCoupon)
            if (repeatedCoupon) return setError(errorMessageTwo);
            setCouponCodes([...couponCodes, upperCasedCoupon]);
            return setGeneratedCoupon(true);
        }
        const coupon = couponRef.current.value.replace(' ', '').toUpperCase();

        if (coupon.length < 5) return setError(errorMessageOne);
        const repeatedCoupon = couponCodes.find(couponF => couponF === coupon)
        if (repeatedCoupon) return setError(errorMessageTwo);
        setCouponCodes([ ...couponCodes, coupon ]);
        return setGeneratedCoupon(true);
    }

    const deleteCoupon = (code) => {
        const couponToDelete = couponCodes.find(coupon => coupon === code);
        setExpiredCoupons([ ...expiredCoupons, couponToDelete ]);
        console.log(`Coupon code ${couponToDelete} expired!`)
    }

    const closeDialog = () => setOpenDialog(false);

    const handleRedeem = () => {
        const redeemCoupon = redeemRef.current.value.replace(' ', '').toUpperCase();
        const isCouponExpired = expiredCoupons.find(coupon => coupon === redeemCoupon);
        const findCoupon = couponCodes.find(coupon => coupon === redeemCoupon);
        if (!findCoupon || isCouponExpired) {
            setError(errorMessageFour)
            return closeDialog()}
        return setError(errorMessageThree);
    };

    return (
        <>
        <Head>
        <title>Coupon Generator</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" key='title'/>
        </Head>
            <div className={classes.goBack}>
                <ArrowBackIosRoundedIcon style={{ color: themeColor.neonColor }}/>
                <Link href='/'>
                    <a style={{ textDecoration: 'none', fontWeight: 'bold', color: themeColor.neonColor }}>{currentLanguage.coupon.goBack}</a>
                </Link>
            </div>
            <div className={classes.root}>
                <Paper className={classes.customSelect} elevation={1}>
                    <h1 className={classes.title}>{currentLanguage.coupon.info[0]}</h1>
                    <p style={{ textAlign: 'center', color: themeColor.fontColor }}>{currentLanguage.coupon.info[1]}</p>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.inputContainer}>
                            <div className={classes.couponInput}>
                                <TextField 
                                    autoFocus
                                    inputRef={couponRef} 
                                    variant='outlined' 
                                    color={changeNeonColor ? 'secondary' : 'primary'} 
                                    label='Coupon code' 
                                    fullWidth 
                                    InputLabelProps={{ className: classes.inputText }} 
                                    className={ classes.input2 }
                                />
                            </div>
                            <div className={classes.submitCoupon}>
                                <button className={classes.buttonSubmitCoupon} onClick={() => setIsRandomCoupon(false)}>{currentLanguage.coupon.info[2]}</button>
                            </div>
                            <div className={classes.randomCoupon}>
                                <button className={classes.buttonSubmitCoupon} onClick={() => {
                                    setIsRandomCoupon(true);
                                    }}>{currentLanguage.coupon.info[3]}</button>
                            </div>
                        </div>
                    </form>
                    <p style={{ textAlign: 'center', color: themeColor.fontColor }}>{currentLanguage.coupon.info[4]} <span className={classes.link} onClick={() => setOpenDialog(true)}>{currentLanguage.coupon.info[5]}</span> {currentLanguage.coupon.info[6]}</p>
                    {
                    generatedCoupon && 
                    <div style={{ marginTop: '1rem'}}>
                        {couponCodes.length >= 1 && 
                            <h4 style={{ color: themeColor.fontColor, textAlign: 'center', padding: '0.5em', backgroundColor: error === errorMessageOne || error === errorMessageTwo || error === errorMessageFour ? 'hsl(0, 100%, 30%)' : 'hsl(120, 70%, 30%)', color: '#fff', borderRadius: 5 }}>{error}</h4>
                        }
                        {couponCodes.map((coupon, index) => (
                            <Coupon key={index} code={couponCodes[index]} deleteCoupon={deleteCoupon}/>
                        ))}
                        {couponCodes.length >= 1 && 
                        <div className={classes.submitCoupon}>
                                <button className={classes.buttonSubmitCoupon} onClick={() => setCouponCodes([])}>{currentLanguage.coupon.info[7]}</button>
                        </div>}
                        
                    </div>
                    }
                </Paper>
            </div>
            <div>
                <Dialog open={openDialog} onClose={closeDialog} aria-labelledby="form-dialog-title" maxWidth='xs' PaperProps={{ style: { backgroundColor: themeColor.backgroundColor }}}>
                    <DialogTitle id="form-dialog-title"  style={{ color: themeColor.fontColor, textAlign: 'center' }}>{currentLanguage.coupon.info[8]}</DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{ color: themeColor.fontColor }}>
                        {currentLanguage.coupon.info[9]}
                        </DialogContentText>
                        <TextField 
                            inputRef={redeemRef} 
                            variant='outlined' 
                            label='Coupon code' 
                            color={changeNeonColor ? 'secondary' : 'primary'} 
                            fullWidth
                            InputLabelProps={{ className: classes.inputText }} 
                            className={ classes.input2 }
                            />
                        {error === errorMessageFour || error === errorMessageThree && 
                        <h4 style={{ color: '#7e7e7e', textAlign: 'center', padding: '0.5em', backgroundColor: error === errorMessageFour ? 'hsl(0, 100%, 30%)' : 'hsl(120, 70%, 30%)', color: '#fff', borderRadius: 5 }}>{error}</h4>
                        }
                    </DialogContent>
                    <DialogActions style={{ padding: 25 }}>
                        <button className={classes.buttonSubmitCoupon} onClick={handleRedeem}>{currentLanguage.coupon.info[10]}</button>
                        <button className={classes.buttonSubmitCoupon} onClick={closeDialog}>{currentLanguage.coupon.info[11]}</button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

export default Coupons;