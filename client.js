import React from 'react';
import app from './app';

const dehydratedState = window.App; // Sent from the server

window.React = React; // For chrome dev tool support

app.rehydrate(dehydratedState, function( err, context ) {
    if ( err ) {
        throw err;
    }
    window.context = context;
    const mountNode = document.getElementById('app');
    React.render(context.createElement(), mountNode);
});