import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        width: '100%',
        border: `2px solid #3d3d3d`,
        display: 'flex',
        justifyContent: 'space-between',    
        alignItems: 'center',
        flexDirection: 'row',
        paddingT: 0,
        margin: 0,
        outline: 'none',    
        borderRadius: '5px',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    innerDiv: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    icon: {
        width: '10%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    
}))