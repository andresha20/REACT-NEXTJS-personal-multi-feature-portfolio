import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        height: '100vh',
        width: '10%',
        position: 'fixed',
        backgroundColor: themeColor => themeColor.neonColor,
        top: 0,
        padding: 0,
        margin: 0,
        borderRight: themeColor => `2px solid ${themeColor.neonColor}`,
    },
}))