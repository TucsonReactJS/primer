'use strict';
import React from "react";

/**
 * The RepoList is a list of GitHub repositories
 */
export default
class RepoList extends React.Component {
    constructor( props ) {
        super(props);
    }

    render() {
        //create our repo elements
        let repos = this.props.repos.map(( r, idx ) => {
            return <li key={idx}>{r.name}</li>
        });

        return (
            <div {...this.props} className={this.props.className + " repo-list"}>
                <h1>Repositories</h1>
                {repos}
            </div>
        );
    }

}

