import React from 'react';
import {injector} from 'react-services-injector';

const DummyList = () => (
    <ul>
        <li>
           Dummy
        </li>
        <li>
            List
        </li>
    </ul>
);

export default injector.connect( DummyList );
