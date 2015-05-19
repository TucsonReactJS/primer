import React from "react/addons"
import RepoListContainer from "./repo_list/repo_list_container"

export default class Home extends React.Component {
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
