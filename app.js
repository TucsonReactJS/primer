import React from 'react';
import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/application_store';
import RouteStore from './stores/route_store';
import PageStore from './stores/page_store';
import ReposStore from './stores/repos_store';

let app = new Fluxible({
    component: Application,
    stores: [
        RouteStore,
        PageStore,
        ApplicationStore,
        ReposStore
    ]
});

export default app;