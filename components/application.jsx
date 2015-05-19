'use strict';
import React from "react"
import ApplicationStore from '../stores/application_store';
import {connectToStores, provideContext} from 'fluxible/addons';
import {handleHistory} from 'fluxible-router';

/**
 * The app class represents our top level component
 */
class Application extends React.Component {
    constructor( props, context ) {
        super(props, context);
        this.state = {};
    }

    componentDidUpdate( prevProps ) {
        let newProps = this.props;
        if ( newProps.ApplicationStore.pageTitle === prevProps.ApplicationStore.pageTitle ) {
            return;
        }
        document.title = newProps.ApplicationStore.pageTitle;
    }



    /**
     * http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount
     * Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call
     * setState within this method, render() will see the updated state and will be executed only once despite the
     * state change.
     */
    componentWillMount() {

    }

    /**
     * http://facebook.github.io/react/docs/component-specs.html
     * The render() method is required.
     When called, it should examine this.props and this.state and return a single child component.
     This child component can be either a virtual representation of a native DOM component (such as <div />
     or React.DOM.div()) or another composite component that you've defined yourself. You can also return null or
     false to indicate that you don't want anything rendered. Behind the scenes, React renders a <noscript> tag to
     work with our current diffing algorithm. When returning null or false, React.findDOMNode(this) will return null.
     The render() function should be pure, meaning that it does not modify component state, it returns the same result
     each time it's invoked, and it does not read from or write to the DOM or otherwise interact with the browser
     (e.g., by using setTimeout). If you need to interact with the browser, perform your work in componentDidMount()
     or the other lifecycle methods instead. Keeping render() pure makes server rendering more practical and makes
     components easier to think about.
     * @returns {XML}
     */

        render() {
            var Handler = this.props.currentRoute.get('handler');
            //render content
            return (
                <div>
                    <Handler />
                </div>
            );
        }



}

Application.contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
};

Application = connectToStores(Application, [ApplicationStore], function (stores, props) {
    return {
        ApplicationStore: stores.ApplicationStore.getState()
    };
});

Application = handleHistory(Application, {enableScroll: false});

Application = provideContext(Application);

export default Application;

