import React, { Component, PropTypes } from 'react';
import {injector} from 'react-services-injector';

/**
 * View component
 */
class View extends Component {

    constructor( ){

        super( );
    }

    render( ){


        return <div
                    className = "view">
                    {/*{tab}*/}
                </div>
    }

    componentDidMount( ){

        
    }
}

export default injector.connect( View );