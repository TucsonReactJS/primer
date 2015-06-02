'use strict';
import React from "react";
import RepoListItem from "./repo_list_item"

/**
 * The RepoList is a list of GitHub repositories
 */
export default
class RepoList extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {trendingUp:{},trendingDown:{}}
    }

    /**
     * http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops
     * Invoked when a component is receiving new props. This method is not called for the initial render.
     Use this as an opportunity to react to a prop transition before render() is called by updating the state using
     this.setState(). The old props can be accessed via this.props. Calling this.setState() within this function will
     not trigger an additional render.
     */
    componentWillReceiveProps( nextProps ) {
        const trendingUp = {};
        const trendingDown = {};

        //this is not efficient, but an example
        nextProps.repos.forEach(( newRepo ) => {
            //find the matching old repo
            let oldRepo = this.props.repos.filter(r => {
                return r.id === newRepo.id;
            })[0];
            //if found, compare the current star count against the old count
            if ( oldRepo ) {
                if ( newRepo.stargazers_count > oldRepo.stargazers_count ) {
                    trendingUp[newRepo.id] = newRepo;
                } else if ( newRepo.stargazers_count < oldRepo.stargazers_count ) {
                    trendingDown[newRepo.id] = newRepo;
                }
            }

        });
        //update our state trendingUp and trendingDown
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
        const repos = this.props.repos.map(( r, idx ) => {
            //are we trending in a direction?
            let trendingUp = this.state.trendingUp[r.id] !== undefined
                , trendingDown = this.state.trendingDown[r.id] !== undefined;

            //using the IDX as the key is important here, as we are tracking by their position in the set
            return <RepoListItem key={idx} repo={r} trendingUp={trendingUp} trendingDown={trendingDown}/>;

        });

        return (
            <div {...this.props} className={this.props.className + " repo-list"} style={{overflowY:"auto",height:"100vh"}}>
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
