import React, { Component, PropTypes } from 'react';
import {injector} from 'react-services-injector';

/**
 * Dummy table component
 */
class DummyTable extends Component {

    constructor( ){

        super( );
    }

    render( ){

        return <table><tr><td>Dummy</td><td>Table</td></tr></table>
    }
}

export default injector.connect( DummyTable );