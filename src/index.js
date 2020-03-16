import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import * as serviceWorker from './serviceWorker';
import DateFnsUtils from "@date-io/date-fns";
import { render } from "react-dom";

import './fonts/MitrRegular.ttf'
import './fonts/OpenSans-Regular.ttf'


ReactDOM.render(
<MuiPickersUtilsProvider utils={DateFnsUtils}>
    <App />
  </MuiPickersUtilsProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
