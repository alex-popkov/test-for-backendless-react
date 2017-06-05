import React from 'react';
import { render } from 'react-dom';
import Application from './components/application';
import View from './components/view';
import { Router, Route, hashHistory, Redirect } from 'react-router';

render(

    (
        <Router history={hashHistory}>
            <Route component={Application}>
                <Route path='/:tab' component={View} />
            </Route>
            <Redirect from="/" to="/dummyList" />
        </Router>
    ),
    document.getElementById( 'root')
);