/**
 * The client JS file that brings in React and bootstraps the app into the page from the server state.
 */
import React from "react";
import App from "./app";

//put React into the global scope for chrome dev tool support
window.React = React;
//grab the app node
const mountNode = document.getElementById('app');
//render our app component into that node
React.render(<App/>, mountNode);

