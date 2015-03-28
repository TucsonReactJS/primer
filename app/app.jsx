'use strict';
import React from "react"
import RepoListContainer from "./repo_list/repo_list_container"

export default class App extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {count: 0};
    }
    render() {
        return (
            <RepoListContainer/>
        );
    }
}

