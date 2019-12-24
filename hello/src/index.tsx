import React from 'react';
import ReactDOM from 'react-dom';
import App from  './App';
import App1 from  './Journal';
import * as serviceWorker from './serviceWorker';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App1 />, document.getElementById('root1'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
