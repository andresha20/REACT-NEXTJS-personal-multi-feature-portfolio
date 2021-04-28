import { Paper, Box, Typography, Divider } from '@material-ui/core';
import { useGlobalContext } from '../Context/theme'
import { useLanguageContext } from '../Context/language'
import useStyles from './Styles'

const SectionFour = () => {
    
    const { currentLanguage } = useLanguageContext();
    const { themeColor } = useGlobalContext();
    const classes = useStyles(themeColor);

    return (
        <div className={classes.root} id='contact'>
            <Box component='div' align='center'>
                <Typography variant='h3' style={{ fontWeight: 'bold', color: themeColor.fontColor }}><span className={classes.span}>03.</span> {currentLanguage.home.fourthSection[0]}</Typography>
                <Divider />
                <br/>
            </Box>
            <Paper className={classes.paper} elevation={0}>
                <Box component='div' align='center'>
                <div>
                    <Typography variant='h4'><span className={classes.span}>{currentLanguage.home.fourthSection[1]}</span></Typography>
                    <br/>
                    <Typography variant='body1' paragraph style={{ padding: '0px 30% 20px 30%', color: themeColor.fontColor }}>{currentLanguage.home.fourthSection[2]}</Typography>
                    <button className={classes.button}>{currentLanguage.home.button}</button>
                </div>
                </Box>
            </Paper>
        </div>
    )
}

export default SectionFour;