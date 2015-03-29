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

    /**
     * http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops
     * Invoked when a component is receiving new props. This method is not called for the initial render.
     Use this as an opportunity to react to a prop transition before render() is called by updating the state using
     this.setState(). The old props can be accessed via this.props. Calling this.setState() within this function will
     not trigger an additional render.
     */
    componentWillReceiveProps( nextProps ) {
        let trendingUp = {};
        let trendingDown = {};

        //this is not efficient, but an example
        nextProps.repos.forEach(( newRepo ) => {
            let oldRepo = this.props.repos.filter(r => {
                return r.id === newRepo.id;
            })[0];
            if ( oldRepo ) {
                if ( newRepo.stargazers_count > oldRepo.stargazers_count ) {
                    trendingUp[newRepo.id] = newRepo;
                } else if ( newRepo.stargazers_count < oldRepo.stargazers_count ) {
                    trendingDown[newRepo.id] = newRepo;
                }
            }

        });

        this.setState({trendingUp: trendingUp, trendingDown: trendingDown});

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
        //create our repo elements
        let repos = this.props.repos.map(( r, idx ) => {

            //Inline styles are defined with object literals in ReactJS
            //https://facebook.github.io/react/tips/inline-styles.html
            let mediaObjectStyle = {
                maxWidth: "64px"
            };
            let trendingDown, trendingUp;
            if ( this.state.trendingDown[r.id] ) {
                let trendingDownStyle = {
                    color: "#9494FF"
                };
                trendingDown = <span style={trendingDownStyle} className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
            }
            if ( this.state.trendingUp[r.id] ) {
                let trendingUpStyle = {
                    color: "#FF8B60"
                };
                trendingUp = <span style={trendingUpStyle} className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
            }
            return <li className="media" key={idx}>
                <div className="media-left">
                    <a href={r.html_url}>
                        <img className="media-object" style={mediaObjectStyle} src={r.owner.avatar_url} alt="avatar"/>
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{r.name} &nbsp;
                        <small>
                            <span className="label label-info">
                                <span className="glyphicon glyphicon-star" aria-hidden="true">{r.stargazers_count}</span>
                            </span>
                        {trendingDown}
                        {trendingUp}
                        </small>
                    </h4>
                        {r.description}
                </div>
            </li>
        });

        return (
            <div {...this.props} className={this.props.className + " repo-list"}>
                <h1>ReactJS
                    <small> {this.props.repos.length} repositories</small>
                </h1>
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
