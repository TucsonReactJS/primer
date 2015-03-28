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
        this.props.applyFilter({sort: event.target.value});
    }

    /**
     * Handle clearing the filters
     */
    clearFilters() {
        this.props.clearFilters();
    }

    render() {
        return (
            <div {...this.props}>
                <h1>Refine search</h1>
                <form className="form">
                    <legend>Sort</legend>
                    <div className="radio">
                        <label>
                            <input type="radio" onChange={this.handleSortChange.bind(this)} name="sort" id="sort-stars" value="stars" checked={this.props.filters.sort === "stars"}/>
                            Stars
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" onChange={this.handleSortChange.bind(this)} name="sort" id="sort-forks" value="forks" checked={this.props.filters.sort === "forks"}/>
                            Forks
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" onChange={this.handleSortChange.bind(this)} name="sort" id="sort-updated" value="updated" checked={this.props.filters.sort === "updated"}/>
                            Updated
                        </label>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={this.clearFilters.bind(this)}>Reset</button>
            </div>
        );
    }

}
/**
 * Define our propTypes
 * @type {{filters: *}}
 */
RepoListFilter.propTypes = {
    filters: React.PropTypes.object,
    applyFilter: React.PropTypes.func,
    clearFilters: React.PropTypes.func
};
/**
 * Define the default props for this component
 * @type {{filters: {sort: string}}}
 */
RepoListFilter.defaultProps = {filters: {sort: "stars"}, applyFilter: noop, clearFilters: noop};


