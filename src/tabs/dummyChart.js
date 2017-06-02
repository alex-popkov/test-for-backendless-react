import React from 'react';
import {injector} from 'react-services-injector';

const DummyChart = () => (
    <div className = 'chart'></div>
);

export default injector.connect( DummyChart );
