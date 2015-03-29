'use strict';
import React from "react"
import RepoList from "./repo_list"
import RepoListFilter from "./repo_list_filter"
import request from "superagent"
import {APP_CONSTANTS} from "../constants";

/**
 * The RepoListContainer wraps the RepoList and provides
 */
export default
class RepoListContainer extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {repos: props.repos, sort: props.sort, stars: props.stars};
    }

    /**
     * Clear the current filters
     */
    clearFilters() {
        let sort = RepoListContainer.defaultProps.sort;
        let stars = RepoListContainer.defaultProps.stars;
        this.setState({sort: sort, stars: stars}, this.getData);
    }

    /**
     * Apply a filter to the current state
     * @param filter
     */
    applyFilter( filter ) {
        this.setState({stars: filter}, this.getData);
    }

    /**
     * Apply a sort to the current state
     * @param sort value
     */
    applySort( sort ) {
        this.setState({sort: sort}, this.getData);
    }

    /**
     * Get data from our remote endpoint
     */
    getData() {
        request.get(APP_CONSTANTS.API_BASE + "search/repositories")
            .query({q: `react ${'stars:>=' + this.state.stars}`})
            .query({sort: this.state.sort})
            .end(( err, resp ) => {

                if ( !err ) {
                    this.setState({repos: resp.body.items, error: null});
                } else {
                    this.setState({error: resp.body.message});
                }
            });
    }

    /**
     * http://facebook.github.io/react/docs/component-specs.html
     * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
     * At this point in the lifecycle, the component has a DOM representation which you can access via
     * React.findDOMNode(this). If you want to integrate with other JavaScript frameworks, set timers using
     * setTimeout or setInterval, or send AJAX requests, perform those operations in this method.
     */
    componentDidMount() {
        this.getData();
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
            error = <div className="col-xs-9 col-offset-3 alert alert-danger">{this.state.error}</div>
        }
        return (
            <div {...this.props}>
                <RepoListFilter className="col-xs-3" stars={this.state.stars} sort={this.state.sort} applySort={this.applySort.bind(this)} applyFilter={this.applyFilter.bind(this)} clearFilters={this.clearFilters.bind(this)} />
                 {error}
                <RepoList repos={this.state.repos} className="col-xs-9" />
            </div>
        );
    }
}
/**
 * Define our propTypes
 * @type {{filters: *}}
 */
RepoListContainer.propTypes = {repos: React.PropTypes.array, filters: React.PropTypes.object};
/**
 * Define the default props for this component
 * @type {{filters: {sort: string}}}
 */
RepoListContainer.defaultProps = {repos: [], sort: "stars", stars: "500"};

