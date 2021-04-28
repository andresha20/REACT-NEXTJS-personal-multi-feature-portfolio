import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    coupon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        border: themeColor => `2px dashed ${themeColor.fontColor}`,
        backgroundColor: themeColor => themeColor.backgroundColorLight,
        margin: '1rem 0rem 1rem 0rem',
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: 'hsl(0, 0%, 50%)'
        }
    },
    popUp: { 
        borderRadius: 5, 
        width: '90vw', 
        display: 'flex', 
        position: 'fixed', 
        padding: '0.5rem', 
        backgroundColor: 'hsl(120, 70%, 30%)', 
        bottom: '1rem', 
        right: '0rem', 
        justifyContent: 'center', 
        [theme.breakpoints.down('xs')]: {
            bottom: '5.5rem'
        }
    }
}))