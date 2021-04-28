import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexDirection: 'row',
        margin: '0rem 0rem 0rem 0rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '10vh 3vw 10vh 3vw'
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
        backgroundColor: themeColor => themeColor.backgroundColor,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: themeColor => themeColor.fontColor,
    },
    button: {
        boxSizing: 'border-box',
        margin: 'auto',
        width: '100%',
        backgroundColor: themeColor => themeColor.neonColor,
        color: '#fff',
        padding: '0.5rem',
        outline: 'none',
        borderRadius: '5px',
        border: 'none',
        fontSize: 'large',
        fontWeight: 'bold',
        transition: '0.3s ease',
        "&:hover": {
            transform: 'scale(1.1, 1.1)',
            cursor: 'pointer',
            color: '#313131'
        }
    },
    content: {
        display: 'flex', 
        flexDirection: 'column'
    },
    description: {
        textAlign: 'center', 
        color: themeColor => themeColor.fontColor
    },
    image: {
        display: 'flex', 
        justifyContent: 'center', 
        height: 150, 
        width: '100%'
    },
    itemImage: {
        display: 'flex', 
        position: 'relative', 
        justifyContent: 'flex-start', 
        height: 75, width: 75, 
        border: themeColor => `1px solid ${themeColor.neonColor}`, 
        backgroundColor: themeColor => themeColor.backgroundColor 
    },
    itemsDiv: {
        display: 'flex', 
        paddingRight: '1vw', 
        justifyContent: 'space-between', 
        padding: 5, 
        margin: 5, 
        border: themeColor => `1px dashed ${themeColor.fontColor}`, 
        boxSizing: 'border-box', flexDirection: 'row', 
        backgroundColor: themeColor => themeColor.backgroundColorLight
    },
    itemTitle: {
        color: themeColor => themeColor.fontColor, 
        textAlign: 'right'
    },
    imageFloatingNumber: {
        color: themeColor => themeColor.fontColor, 
        position: 'absolute', top: -11, left: 5 
    },
    outOfStock: {
        color: 'hsl(20, 100%, 50%)', 
        fontWeight: 'bold', 
        textAlign: 'right'
    },
    grandTotal: {
        textAlign: 'center', 
        color: themeColor => themeColor.fontColor, 
        fontWeight: 'bold', 
        flexGrow: 1 
    },
    buttonDiv: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
}))
