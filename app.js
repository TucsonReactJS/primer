import React from 'react';
import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';

let app = new Fluxible({
    component: Application,
    stores: [
        ApplicationStore
    ]
});

export default app;