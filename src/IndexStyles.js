import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    mainWrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '7vh 0vh 0vh 0vh',
        [theme.breakpoints.down('md')]: {
            padding: '0vh 0vh 0vh 0vh',
        },

    },
    leftColumn: {
        display: 'flex',
        width: '20%',
        padding: 0,
        margin: 0,
        backgroundColor: themeColor => themeColor.backgroundColorLight,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },    
    mainColumn: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        width: '60%',
        backgroundColor: themeColor => themeColor.backgroundColorLight,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '0vw 5vw 0vw 5vw'
        },
    },
    rightColumn: {
        display: 'flex',
        padding: 0,
        margin: 0,
        justifyContent: 'flex-end',
        width: '20%',
        backgroundColor: themeColor => themeColor.backgroundColorLight,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))