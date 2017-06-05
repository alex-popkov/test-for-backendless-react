import React, { Component, PropTypes } from 'react';
import {injector} from 'react-services-injector';

/**
 * Dummy List component
 */
class DummyList extends Component {

    constructor( ){

        super( );
    }

    render( ){

        return <ul>
            <li>
                Dummy
            </li>
            <li>
                List
            </li>
        </ul>
    }
}

export default injector.connect( DummyList );
