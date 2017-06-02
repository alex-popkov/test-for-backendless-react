import React from 'react';
import {injector} from 'react-services-injector';

const DummyList = () => (
    <table><tr><td>Dummy</td><td>Table</td></tr></table>
);

export default injector.connect( DummyList );
