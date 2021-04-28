import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        
    },
    logo: {
        width: '33%',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    menu: {
        width: '33%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    menuItem: {
        padding: '0px 5px 0px 5px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '5px',
        alignItems: 'center',
        textAlign: 'center',
        height: '50px',
        width: '100px',
        transition: '0.3s ease-out',
        position: 'relative',
        "&:hover": {
            cursor: 'pointer',
            color: themeColor => themeColor.fontColor,

        },
        "&::before": {
            transition: 'all 0.5s ease',
            position: 'absolute',
            top: 0,
            left: '50%',
            right: '50%',
            bottom: 0,
            opacity: 0,
            content: "''",
            borderBottom: themeColor => `4px solid ${themeColor.neonColor}`,
            borderTop: themeColor => `4px solid ${themeColor.neonColor}`
        },
        "&:hover:before": {
            transition: 'all 0.5s ease',
            left: 0,
            right: 0,
            opacity: 1,
            zIndex: -1
        },
    },
    span: {
        color: themeColor => themeColor.neonColor,
        "&:hover": {
        }
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        }
    },
    link: {
        textDecoration: 'none',
        color: themeColor => themeColor.fontColor,
        fontWeight: 700,
        fontSize: '1rem',
        animation: '$fadeIn 0.9s ease-in',
        "&:hover": {
        }
    },
    buttonDiv: {
        padding: '0px 0px 10px 15px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '33%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },

    },
    button: {
        width: '100%',
        backgroundColor: themeColor => themeColor.backgroundColor,
        padding: '10px 20px 10px 20px',
        border: themeColor => `4px solid ${themeColor.neonColor}`,
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: themeColor => themeColor.fontColor,
        borderRadius: '5px',
        transition: '0.3s ease-out',
        zIndex: 1,
        outline: 'none',
        position: 'relative',
        fontWeight: 700,
        fontSize: '1rem',
        animation: '$fadeIn 0.9s ease-in',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
        "&:hover": {
            cursor: 'pointer',
            color: '#fff'
        },
        "&::before": {
            transition: 'all 0.5s ease',
            position: 'absolute',
            top: 0,
            left: '50%',
            right: '50%',
            bottom: 0,
            opacity: 0,
            content: "''",
            backgroundColor: themeColor => themeColor.neonColor
        },
        "&:hover:before": {
            transition: 'all 0.5s ease',
            left: 0,
            right: 0,
            opacity: 1,
            zIndex: -1
        }
    },
    bottomDiv: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            boxSizing: 'border-box',
            flexDirection: 'row',
            backgroundColor: themeColor => themeColor.neonColor,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            position: 'fixed',
            minHeight: '50px',
            bottom: 0,
            zIndex: 10,
            boxShadow: '0 0px 25px 0px rgba(0, 0, 0, 0.25)',
            padding: '3px 3px 3px 3px',
            borderTop: themeColor => `2px solid ${themeColor.fontColor}`,      
        },
    },
    bottomDivItem: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'flex-start'
        }
    },
    menuItemNotVisible: {
        display: 'flex',
        position: 'absolute',
        visibility: 'hidden',
        flexDirection: 'column',
        height: 0,
        width: '10rem',
        backgroundColor: '#3d3d3d',
        top: '-76px',
        zIndex: -1
    },
    menuItemVisible: {
        visibility: 'visible',
        width: '10rem',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        top: '76px',
        backgroundColor: '#3d3d3d',
        transition: '0.5s ease-in',
        border: themeColor => `2px solid ${themeColor.neonColor}`,
        zIndex: -1

    },
    dropdownItem: {
        border: '2px solid #fff',
        padding: '5px 10px 5px 10px',
        "&:hover": {
            backgroundColor: themeColor => themeColor.neonColor,
            "& $span": {
                color: '#fff'
            }
        }
    },
    floatingSwitcher: {
        display: 'flex',
        position: 'fixed',
        right: '1vh',
        bottom: '40%',
        boxSizing: 'border-box',
        flexDirection: 'column',
        paddingTop: '5px',
        backgroundColor: themeColor => themeColor.neonColor,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '9vw',
        position: 'fixed',
        minHeight: '50px',
        zIndex: 10,
        boxShadow: '0 0px 25px 0px rgba(0, 0, 0, 0.10)',
        animation: '$fadeIn 0.9s ease-in',
        // padding: '3px 3px 3px 3px',
        border: themeColor => `2px solid ${themeColor.backgroundColor}`,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }

}))