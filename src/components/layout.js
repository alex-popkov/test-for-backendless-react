import React, { Component, PropTypes } from 'react';
import {injector} from 'react-services-injector';
import { Link } from 'react-router';
import style from "../styles/layout.scss";
import View from './view';

/**
 * Layout component
 */
class Layout extends Component {

    constructor( ){

        super( );
    }

    render( ){

        var menu = this.props.data.map( function( item, index ){

            return (

                <li
                    className = "layout--menu-link"
                    key = {index}>
                    <Link
                        to = {"/" + item.id.toLowerCase( )}
                        activeClassName='active'>
                        {item.title}
                    </Link>
                </li>
            );
        });

        return <div
                className = "layout">
                <div
                    className = "layout--header">
                    <div
                        className="layout--title">
                        Test based on React
                    </div>
                    <ul
                        className = "layout--menu">
                        {menu}
                    </ul>
                </div>
                <div
                    className = "layout--view">
                    <View data = {this.props.data} />
                </div>
            </div>;
    }
}

export default injector.connect( Layout );