import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexDirection: 'row',
        margin: '0rem 0rem 0rem 0rem',
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
            justifyContent: 'center',
        }
    },
    goBack: {
        display: 'flex',
        flowDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem'
    },
    customSelect: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 40,
        color: themeColor => themeColor.fontColor,
        backgroundColor: themeColor => themeColor.backgroundColor,
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    defaultSelect: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 40,
        color: themeColor => themeColor.fontColor,
        backgroundColor: themeColor => themeColor.backgroundColor,
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    customSelectContentDIV: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0rem 0rem 1rem 0rem',
        textAlign: 'center',
    },
    colorOne: {
        height: 20,
        width: 20,
        border: themeColor => `2px solid ${themeColor.fontColor}`,
        borderRadius: '50%',
        backgroundColor: '#FF6347',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.3, 1.3)'
        }    
    },
    colorTwo: {
        height: 20,
        width: 20,
        border: themeColor => `2px solid ${themeColor.fontColor}`,
        borderRadius: '50%',
        backgroundColor: '#FF8C00',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.3, 1.3)'
        }
    },
    colorThree: {
        height: 20,
        width: 20,
        border: themeColor => `2px solid ${themeColor.fontColor}`,
        borderRadius: '50%',
        backgroundColor: '#ff78cb',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.3, 1.3)'
        }
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: themeColor => themeColor.fontColor
    },
    boxes: {
        borderRadius: '5px',
        border: themeColor => `2px solid ${themeColor.fontColor}`,
        backgroundColor: '#7e7e7e',
        color: 'white',
        fontWeight: 'bold',
        padding: 6,
        minWidth: '33%',
        transition: '0.3s ease',
        "&:hover": {
            backgroundColor: themeColor => themeColor.neonColor,
            cursor: 'pointer',
            transform: 'scale(1.1, 1.1)'
        }
    },
    icon: {
        color: themeColor => themeColor.neonColor ,
        "&:hover": {
            cursor: 'pointer'
        }
    },
    slider: {
        "& .MuiSlider-markLabel": {
            color: themeColor => themeColor.fontColor,
        },
    }
}))