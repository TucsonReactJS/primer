'use strict';
import React from "react"
import RepoList from "./repo_list"
import request from "superagent"
import {APP_CONSTANTS} from "../constants";

/**
 * The RepoListContainer wraps the RepoList and provides
 */
export default
class RepoListContainer extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {repos: []};
    }

    componentDidMount() {

        request.get(APP_CONSTANTS.API_BASE + "search/repositories")
            .query({q: 'react'})
            .end(( err, resp ) => {
                if ( !err ) {
                    this.setState({repos: resp.body.items});
                }
            });
    }

    render() {
        return (
            <div className="repo-container">
                <RepoList repos={this.state.repos} />
            </div>
        );
    }
}

