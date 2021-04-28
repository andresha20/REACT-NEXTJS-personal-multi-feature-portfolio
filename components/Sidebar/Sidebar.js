import useStyles from './Styles'
import { useGlobalContext } from '../Context/theme'

const Sidebar = ({ content, visible }) => {
    
    const { themeColor } = useGlobalContext();
    const classes = useStyles(themeColor);

    return (
        <div className={classes.root}>
            <h1 style={{ 
                visibility: visible ? 'visible' : 'hidden',
                color: themeColor.backgroundColor, 
                transform: 'rotate(90deg)',
                paddingLeft: '45vh',
                paddingTop: '25vh'
            }}
            >{content}</h1>
        </div>
    )
}

export default Sidebar;