import React from 'react';
import { render } from 'react-dom';
import Application from './components/application';
import 'babel-polyfill';
import { Router, Route, hashHistory } from 'react-router';

render(

    (
        <Router history={hashHistory}>
            <Route path="/" component={Application}/>
        </Router>
    ),
    document.getElementById( 'root')
);