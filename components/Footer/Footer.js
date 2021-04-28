import { Typography } from '@material-ui/core';
import { useGlobalContext } from '../Context/theme'
import { useLanguageContext } from '../Context/language'
import useStyles from './Styles'

const Footer = () => {
    
    const { currentLanguage } = useLanguageContext();
    const { themeColor } = useGlobalContext();
    const classes = useStyles(themeColor);

    return (
        <div className={classes.root}>
            <Typography component='p' variant='subtitle2' color='textSecondary' style={{ color: themeColor.fontColor }}>{currentLanguage.footer}</Typography>
            <Typography component='p' variant='h5' color='textSecondary' style={{ fontWeight: 'bold', color: themeColor.fontColor }}>Andrés Henao</Typography>
        </div>
    )
}

export default Footer;