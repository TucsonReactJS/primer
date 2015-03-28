/**
 * The client JS file that brings in React and bootstraps the app into the page from the server state.
 */
import React from "react";
import App from "./app";

window.React = React; // For chrome dev tool support
let mountNode = document.getElementById('app');
React.render(<App/>, mountNode);

