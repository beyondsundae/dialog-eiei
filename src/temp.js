import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// Material UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import moment from 'moment-timezone';
global.moment = require('moment-timezone')
// Create a new theme using Nunito Sans
const theme = createMuiTheme({
  typography: {
    fontFamily: ' Montserrat,Mitr ',
    // fontFamily: ",Roboto,  sans-serif,Montserrat"

  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4791db',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#e57373',
      main: '#e33371',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#f2f2f2',
    },
    // Used by getContrastText() to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

ReactDOM.render(
  <React.Fragment>
    <MuiThemeProvider theme={theme}>

      <App />
    </MuiThemeProvider>
  </React.Fragment>



  , document.getElementById('root'));