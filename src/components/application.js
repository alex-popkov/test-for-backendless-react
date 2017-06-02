import React, { Component, PropTypes } from 'react';
import {injector} from 'react-services-injector';
import services from '../services';
import Layout from './layout';
import View from './view';
import style from"../styles/application.scss";

injector.register( services );

/**
 * Root application component
 */
class Application extends Component {

    constructor( ){

        super( );

        this.state = {

            data: []
        };
    }

    render( ){

        return <div
                    className = "application">
                    <Layout data = { this.state.data } />
                </div>
    }

    componentDidMount( ){

        this.services.ServerApi.getJson( this );
    }
}

export default injector.connect( Application );