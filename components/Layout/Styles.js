import { makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    root: {
        margin: 0,
        padding: 0
    },
    main: {
        padding: '120px 0px 50px 0px',
        backgroundColor: themeColor => themeColor.backgroundColorLight,
        minHeight: '70vh',
        [theme.breakpoints.down('sm')]: {
        }
    }
}))