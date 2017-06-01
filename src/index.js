import React from 'react'
import { render } from 'react-dom'
import App from './containers/application'
import 'babel-polyfill'


render(
    <App />,
    document.getElementById('root')
);