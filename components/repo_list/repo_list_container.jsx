'use strict';
import React from "react"
import RepoList from "./repo_list"
import RepoListFilter from "./repo_list_filter"
import ReposStore from "../../stores/repos_store"
import getReactRepositories from "../../actions/get_repos"
import connectToStores from 'fluxible/addons/connectToStores';

/*
 * ES6 destructuring assignment
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
import {API_BASE,SORT_STARS,SORT_FORKS,SORT_UPDATED,DEFAULT_STARS_AMOUNT} from "../../constants";

/**
 * The RepoListContainer wraps the RepoList and provides
 */
class RepoListContainer extends React.Component {
    constructor( props, context ) {
        super(props, context);
        this.state = {error: false};
    }

    /**
     * Clear the current filters
     */
    clearFilters() {
        const sort = SORT_STARS;
        const numStars = DEFAULT_STARS_AMOUNT;
        this.getData(sort, numStars);
    }

    /**
     * Apply a filter to the current state
     * @param filter
     */
    applyFilter( filter ) {

        //trigger the getData only after a debounce;
        if ( this.debounce ) {
            clearTimeout(this.debounce);
        }
        this.debounce = setTimeout(() => {
            this.getData(this.props.repoStoreState.sort, filter);
        }, 500);

    }

    /**
     * http://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount
     * Invoked immediately before a component is unmounted from the DOM. Perform any necessary cleanup in this method,
     * such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.
     */
    componentWillUnmount() {
        //ensure our debounce method is cleaned up
        if ( this.debounce ) {
            clearTimeout(this.debounce);
        }
    }

    /**
     * Apply a sort to the current state
     * @param sort value
     */
    applySort( sort ) {
        this.getData(sort, this.props.repoStoreState.numberOfStars);
    }

    /**
     * Get data from our remote endpoint
     */
    getData( sort, numStars ) {
        this.context.executeAction(getReactRepositories, {sort, numStars});
    }

    /**
     * http://facebook.github.io/react/docs/component-specs.html
     * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
     * At this point in the lifecycle, the component has a DOM representation which you can access via
     * React.findDOMNode(this). If you want to integrate with other JavaScript frameworks, set timers using
     * setTimeout or setInterval, or send AJAX requests, perform those operations in this method.
     */
    componentDidMount() {
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
        let error;
        if ( this.state.error ) {
            error = <div className="col-sm-9 col-offset-3 alert alert-danger">{this.state.error}</div>
        }
        return (
            <div {...this.props}>
                <RepoListFilter
                    className="col-sm-3"
                    stars={this.props.repoStoreState.numberOfStars}
                    sort={this.props.repoStoreState.sort}
                    applySort={this.applySort.bind(this)}
                    applyFilter={this.applyFilter.bind(this)}
                    clearFilters={this.clearFilters.bind(this)}/>
                {error}
                <RepoList repos={this.props.repoStoreState.repos} className="col-sm-9"/>
            </div>
        );
    }
}
RepoListContainer.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
RepoListContainer = connectToStores(RepoListContainer, [ReposStore], function( stores, props ) {
    return {
        repoStoreState: stores.ReposStore.getState()
    };
});

export default RepoListContainer;

