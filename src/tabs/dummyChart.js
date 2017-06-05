import React, { Component, PropTypes } from 'react';
import {injector} from 'react-services-injector';
import style from "../styles/dummychart.scss";

/**
 * Dummy Chart component
 */
class DummyChart extends Component {

    constructor( ){

        super( );
    }

    render( ){

        return <div className = 'chart'></div>
    }
}

export default injector.connect( DummyChart );

