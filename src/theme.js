import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#009488',
        },
        secondary: {
          main: '#ff7700',
          contrastText: "#ffffff"
        },
        text: {
          primary: '#000'
        }
    }
});

export default theme;