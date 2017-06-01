import {Service} from 'react-services-injector';

/**
 * Service for server requests
 */
export default class ServerApi extends Service {

    constructor( ){

        super( );
        this.REQUEST_JSON = '/api/json';
    }

    /**
     * Get data from json file
     * @param app Component Application
     */
    getJson( app ){

        var self = this;
        var request = new XMLHttpRequest( );
        request.open( 'GET', this.REQUEST_JSON, true );
        request.onreadystatechange = function( ){

            if( request.readyState === 4 && request.status === 200 ){

                var data = JSON.parse( request.responseText );
                data = JSON.parse( data );
                data.sort( function( a, b ){

                    return a.order - b.order;
                } );
                app.setState( {data: data } );
            }
            else if( request.readyState === 4 && request.status !== 200){

                console.log( 'get json error' );
            }
        };
        request.send( );
    }
}