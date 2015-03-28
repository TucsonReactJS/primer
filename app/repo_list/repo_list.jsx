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

            //Inline styles are defined with object literals in ReactJS
            //https://facebook.github.io/react/tips/inline-styles.html
            let mediaObjectStyle = {
                maxWidth: "64px"
            };
            return <li className="media" key={idx}>
                <div className="media-left">
                    <a href={r.html_url}>
                        <img className="media-object" style={mediaObjectStyle} src={r.owner.avatar_url} alt="avatar"/>
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{r.name}</h4>
                        {r.description}
                </div>
            </li>
        });

        return (
            <div {...this.props} className={this.props.className + " repo-list"}>
                <h1>ReactJS Repositories</h1>
                <ul className="media-list">
                    {repos}
                </ul>
            </div>
        );
    }

}
/**
 * Define our propTypes
 * @type {{filters: *}}
 */
RepoList.propTypes = {repos: React.PropTypes.array};
/**
 * Define the default props for this component
 * @type {{filters: {sort: string}}}
 */
RepoList.defaultProps = {repos: []};
