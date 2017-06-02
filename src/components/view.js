import React, { Component, PropTypes } from 'react';
import {injector} from 'react-services-injector';
import dummyChart from '../tabs/dummyChart';
import dummyList from '../tabs/dummyList';
import dummyTable from '../tabs/dummyTable';
import { browserHistory } from 'react-router'

/**
 * View component
 */
class View extends Component {

    constructor( ){

        super( );
    }

    render( ){

        var Tab;

        if( window.location.href.search( /table/g ) ){

            Tab = new dummyTable( );

        }else if( window.location.href.search( /list/g ) ){

            Tab = new dummyList( );
            
        }else if( window.location.href.search( /chart/g ) ) {

            Tab = new dummyChart( );
        }

        return <div
                    className = "view">
                    <Tab />
                </div>
    }

    componentDidMount( ){

        
    }
}

export default injector.connect( View );