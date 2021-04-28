import { Paper, Box, Typography } from '@material-ui/core'
import { useGlobalContext } from '../Context/theme'
import { useLanguageContext } from '../Context/language'
import useStyles from './Styles'

const SectionOne = () => {

    const { themeColor } = useGlobalContext();
    const { currentLanguage } = useLanguageContext();
    const classes = useStyles(themeColor);

    return (
        <div className={classes.root} >
                <Paper className={`${classes.paper} ${classes.minHeight}`} elevation={0}>
                    <Box component='div' align='center'>
                        <Typography variant='h4'><span className={classes.span}>{currentLanguage.home.firstSection[0]}</span></Typography>
                        <Typography variant='h2' style={{ color: themeColor.fontColor }}>{currentLanguage.home.firstSection[1]} <span className={classes.span}>Andrés Henao.</span></Typography>
                        <br/>
                        <Box component='div' align='center'>
                            <Typography variant='body1' paragraph style={{ color: themeColor.fontColor }}>{currentLanguage.home.firstSection[2]}</Typography>
                        </Box>
                        <br/>
                        <button className={classes.button}>{currentLanguage.home.button}</button>
                    </Box>
                </Paper>
        </div>
    )
}

export default SectionOne;