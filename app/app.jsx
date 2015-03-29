'use strict';
import React from "react"
import RepoListContainer from "./repo_list/repo_list_container"

/**
 * The app class represents our top level component
 */
export default
class App extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {loading: false};
    }

    /**
     * http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount
     * Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call
     * setState within this method, render() will see the updated state and will be executed only once despite the
     * state change.
     */
    componentWillMount() {
        console.info("App component mounting");
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
        return (
            <div className="container-fluid">
                <div className="row">
                    <RepoListContainer className="col-md-12"/>
                </div>
            </div>
        );
    }
}

