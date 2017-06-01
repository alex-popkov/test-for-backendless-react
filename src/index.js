import React from 'react';
import { render } from 'react-dom';
import Application from './components/application';
import View from './components/view';
import 'babel-polyfill';
import { Router, Route, hashHistory } from 'react-router';

render(

    (
        <Router history={hashHistory}>
            <Route path="/" component={Application}>
                <Route path='/:tab' component={View} />
            </Route>
        </Router>
    ),
    document.getElementById( 'root')
);