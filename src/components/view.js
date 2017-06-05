import React, { Component, PropTypes } from 'react';
import {injector} from 'react-services-injector';
import dummyChart from '../tabs/dummyChart';
import dummyList from '../tabs/dummyList';
import dummyTable from '../tabs/dummyTable';

/**
 * View component
 */
class View extends Component {

    constructor( ){

        super( );
    }

    render( ){

        var Tab = dummyList;

        if( window.location.href.indexOf( 'table' ) > 0 ){

            Tab = dummyTable;

        }else if( window.location.href.indexOf( 'list' ) > 0 ){

            Tab = dummyList;

        }else if( window.location.href.indexOf( 'chart' ) > 0 ) {

            Tab = dummyChart;
        }

        return <div
                    className = "view">
                    <Tab />
                </div>
    }
}

export default injector.connect( View );