import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexDirection: 'row',
        margin: '0rem 0rem 0rem 0rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            margin: '10vh 3vw 10vh 3vw'
        }
    },
    inputText: {
        color: themeColor => themeColor.fontColor
    },
    input2: {
        '& .MuiOutlinedInput-root': {
            backgroundColor: themeColor => themeColor.backgroundColorLight,
            color: themeColor => themeColor.fontColor,
            '& fieldset': {
              borderColor: themeColor => themeColor.neonColor,
            },
            '&:hover fieldset': {
                borderColor: themeColor => themeColor.neonColor,
              },
        }
    },
    notchedOutline: {},
    goBack: {
        display: 'flex',
        flowDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem'
    },
    customSelect: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 40,
        backgroundColor: themeColor => themeColor.backgroundColor,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    defaultSelect: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 40,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: themeColor => themeColor.fontColor,
    },
    inputContainer: {
        width: '100%',
        placeItems: 'center',
        alignItems: 'stretch',
        display: 'grid',
        gap: '1rem',
        gridTemplateAreas: `
                            'input input'
                            'randomCoupon newCoupon'
                            `
    },
    couponInput: {
        gridArea: 'input',
        width: '100%',
        padding: 1,
    },
    submitCoupon: {
        gridArea: 'newCoupon',
        width: '100%'
    },
    randomCoupon: {
        gridArea: 'randomCoupon',
        width: '100%'
    },
    buttonSubmitCoupon: {
        margin: 'auto',
        width: '100%',
        backgroundColor: themeColor => themeColor.neonColor,
        color: '#fff',
        padding: '0.5rem',
        outline: 'none',
        borderRadius: '5px',
        border: 'none',
        fontWeight: 'bold',
        transition: '0.3s ease',
        "&:hover": {
            transform: 'scale(1.1, 1.1)',
            backgroundColor: 'hsl(50, 20%, 100%)',
            cursor: 'pointer',
            color: '#313131'
        }
    },
    link: {
        color: themeColor => themeColor.neonColor, 
        fontWeight: 'bold', 
        textDecoration: 'underline',
        "&:hover": {
            cursor: 'pointer'
        }
    }
}))