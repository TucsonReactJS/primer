'use strict';
import React from "react";
import {noop} from "../constants";

/**
 * The RepoListFilter provides a set of configurable filters to act select
 */
export default
class RepoListFilter extends React.Component {
    constructor( props ) {
        super(props);
    }

    /**
     * Handle changing the selected sort radio
     */
    handleSortChange( event ) {
        this.props.applySort(event.target.value);
    }

    /**
     * Handle changing the minimum number of stars
     * @param event
     */
    handleMinimumChange( event ) {

        if ( this.debounce ) {
            clearTimeout(this.debounce);
        }
        let value = event.target.value;

        this.debounce = setTimeout(() => {
            this.props.applyFilter(value)
        }, 500);

    }

    /**
     * Handle clearing the filters
     */
    clearFilters() {
        this.props.clearFilters();
    }

    /**
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
     * Invoked before rendering when new props or state are being received. This method is not called for the initial
     * render or when forceUpdate is used. Use this as an opportunity to return false when you're certain that the
     * transition to the new props and state will not require a component update.
     */
    shouldComponentUpdate( nextProps, nextState ) {

        return this.props.sort !== nextProps.sort
            || this.props.stars !== nextProps.stars;
    }

    /**
     * http://facebook.github.io/react/docs/events.html#syntheticevent
     * Your event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser's
     * native event. It has the same interface as the browser's native event, including stopPropagation() and
     * preventDefault(), except the events work identically across all browsers.
     * @param event
     */
    onSubmit( event ) {
        event.preventDefault();
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
            <div {...this.props}>
                <h1>Refine search</h1>
                <form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <legend>Sort</legend>
                    <div className="radio">
                        <label>
                            <input type="radio" onChange={this.handleSortChange.bind(this)} name="sort" id="sort-stars" value="stars" checked={this.props.sort === "stars"}/>
                            Number of Stars
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" onChange={this.handleSortChange.bind(this)} name="sort" id="sort-forks" value="forks" checked={this.props.sort === "forks"}/>
                            Number of Forks
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" onChange={this.handleSortChange.bind(this)} name="sort" id="sort-updated" value="updated" checked={this.props.sort === "updated"}/>
                            Most recently Updated
                        </label>
                    </div>
                    <legend>Filter</legend>
                    <div className="form-group">
                        <label>Minimum Stars</label>
                        <input className="form-control" type="number" name="stars" onChange={this.handleMinimumChange.bind(this)} defaultValue={this.props.stars} min="0"/>
                    </div>
                    <button className="btn btn-primary" onClick={this.clearFilters.bind(this)}>Reset</button>
                </form>
            </div>
        );
    }

}
/**
 * Define our propTypes
 * @type {{filters: *}}
 */
RepoListFilter.propTypes = {
    stars: React.PropTypes.string,
    sort: React.PropTypes.string,
    applyFilter: React.PropTypes.func,
    clearFilters: React.PropTypes.func,
    applySort: React.PropTypes.func
};
/**
 * Define the default props for this component
 * @type {{filters: {sort: string}}}
 */
RepoListFilter.defaultProps = {
    sort: "stars",
    stars: "500",
    applySort: noop,
    applyFilter: noop,
    clearFilters: noop
};


