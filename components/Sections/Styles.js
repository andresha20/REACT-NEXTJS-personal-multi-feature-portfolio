import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        // minHeight: '100vh',
        margin: '0vh 0vh 50vh 0vh',
        overflow: 'none',
        [theme.breakpoints.down('md')]: {
            margin: '30px 0px 100px 0px'
        },
    },
    paper: {
        backgroundColor: themeColor => themeColor.backgroundColorLight,
        position: 'relative',
        padding: '10px 0px 10px 0px',
        [theme.breakpoints.down('md')]: {
            top: '2vh',
        },
    },        
    paperTwo: {
        position: 'relative',
        backgroundColor: themeColor => themeColor.backgroundColor,
        padding: '30px 0px 10px 0px'
    },    
    paperWithBorder: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: '4px solid #efefef',
        position: 'relative',
        top: '100px'
    },
    sectionTwoParagraphContainer: {
        display: 'flex', 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        padding: '0px 30px 0px 30px',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            padding: '10px 0px 0px 0px',
            flexDirection: 'column-reverse'
        },
    },
    paragraphSectionTwo: {
        width: '65%', 
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            padding: '30px 20px 0px 20px',
            width: '100%',
            align: 'left'
        },
    },
    span: {
        color: themeColor => themeColor.neonColor,
        fontWeight: 'bold'
    },
    button: {
        width: '100%',
        backgroundColor: themeColor => themeColor.backgroundColorLight,
        padding: '10px 20px 10px 20px',
        border: themeColor => `4px solid ${themeColor.neonColor}`,
        textTransform: 'uppercase',
        color: themeColor => themeColor.fontColor,
        borderRadius: '5px',
        transition: '0.3s ease-out',
        zIndex: 0,
        outline: 'none',
        position: 'relative',
        fontWeight: 700,
        fontSize: '1rem',
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
    minHeight: {
        marginTop: '15vh',
        [theme.breakpoints.down('md')]: {
            marginTop: 0
        },
    },
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: 20,
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
    },
    boldTitle: {
        fontWeight: 'bold', 
        color: '#fff', 
        backgroundColor: themeColor => themeColor.neonColor,
        padding: '5px 0px 5px 0px'
    },
    projectImages: {
        transition: 'all 0.3s ease-in',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(0.8, 0.8)'
        }
    },
    image: {
        display: 'flex',
        position: 'relative',
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        backgroundColor: themeColor => themeColor.neonColor,
        filter: 'opacity(100%)',
        transition: '0.3s',
        padding: 20,
        "&:hover": {
            cursor: 'help',
            backgroundColor: 'rgba(0, 148, 136, 0)',
            // "& $tooltip": {
            //     display: 'block',
            //     visibility: 'visible',
            //     opacity: 1,
            //     zIndex: 10,
            // }
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            margin: '5px 0px 5px 0px'
        },
    },
    tooltip: {
        position: 'absolute',
        backgroundColor: '#fff',
        visibility: 'hidden',
        opacity: 0,
        width: '50vh',
        boxSizing: 'border-box',
        border: '2px solid #e0e0e0',
        padding: '5px 20px 15px 20px',
        transition: '0.3s all',
        transitionDelay: '0.3s',
        borderRadius: 5,
        "&:hover": {}
    },
    profileImage: {
        position: 'relative',
        minWidth: '50%',
        minHeight: '50%',
        borderRadius: '5px',
        border: themeColor => `4px solid ${themeColor.neonColor}`,
        backgroundColor: themeColor => themeColor.backgroundColorLight,
        padding: 20,
        zIndex: 0,
        "&:hover": {
            transform: 'translateX(-5px) translateY(-5px)',
            "& $profileImageBorder": {
                transform: 'translateX(5px) translateY(5px)',
            }
        },
        [theme.breakpoints.down('md')]: {
            margin: '0px 30px 0px 30px'
        },
    },
    profileImageBorder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        backgroundColor: '#fff',
        border: themeColor => `4px solid ${themeColor.neonColor}`,
        borderRadius: '5px',
        top: -15,
        left: -15,
        zIndex: 1
    }
}))