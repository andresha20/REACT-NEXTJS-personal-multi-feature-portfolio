import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: themeColor => `1px solid ${themeColor.neonColor}`,
        padding: 0,
        margin: 0,
        height: '30vh',
        backgroundColor: themeColor => themeColor.backgroundColor,
        [theme.breakpoints.down('sm')]: {
            height: '40vh',
        },
    }
}))