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
    }
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

