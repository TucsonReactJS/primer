'use strict';
let React = require('react');
let FluxibleMixin = require('fluxible').FluxibleMixin;

let Home = React.createClass({
    mixins: [FluxibleMixin],
    getInitialState() {
        return {};
    },
    render() {


        //render content
        return (
            <div>

            </div>
        );
    }
});

module.exports = Home;
