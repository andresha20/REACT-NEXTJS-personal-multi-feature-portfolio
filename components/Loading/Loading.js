import { Typography } from '@material-ui/core';
import useStyles from './Styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color='secondary' />
            <Typography variant='body1' color='textPrimary'>Loading...</Typography>
        </div>
    )
}

export default Loading;