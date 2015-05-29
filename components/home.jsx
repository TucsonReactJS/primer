import React from "react/addons"
import RepoListContainer from "./repo_list/repo_list_container"

export default class Home extends React.Component {
    onClick(){
        console.log("container clicked");
    }
    render() {

        let repoListProps = {
            onClick:this.onClick.bind(this),
            style:{
                "visibility" :"visible"
            }
        };
        return (
            <div className="container-fluid">
                <div className="row">
                    <RepoListContainer {...repoListProps} className="col-md-12"/>
                </div>
            </div>
        );
    }
}
