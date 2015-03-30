'use strict';
import React from "react";
import TrendingDownArrow from "../common/trending_down_arrow"
import TrendingUpArrow from "../common/trending_up_arrow"

/**
 * The RepoList is a list of GitHub repositories
 */
export default
class RepoListItem extends React.Component {
    constructor( props ) {
        super(props);
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

        //Inline styles are defined with object literals in ReactJS
        //https://facebook.github.io/react/tips/inline-styles.html
        let mediaObjectStyle = {
            maxWidth: "64px"
        };

        //are we trending in a direction?
        let trending;
        if ( this.props.trendingDown ) {
            trending = <TrendingDownArrow/>;
        }
        if ( this.props.trendingUp ) {
            trending = <TrendingUpArrow/>;
        }

        return (<li className="media">
            <div className="media-left">
                <a href={this.props.repo.html_url}>
                    <img className="media-object" style={mediaObjectStyle} src={this.props.repo.owner.avatar_url} alt="avatar"/>
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{this.props.repo.name} &nbsp;
                    <small>
                        <span className="label label-info">
                            <span className="glyphicon glyphicon-star" aria-hidden="true">{this.props.repo.stargazers_count}</span>
                        </span>
                        {trending}
                    </small>
                </h4>
                {this.props.repo.description}
            </div>
        </li>);

    }

}
/**
 * Define our propTypes
 * @type {{filters: *}}
 */
RepoListItem.propTypes = {
    repo: React.PropTypes.object,
    trendingUp: React.PropTypes.bool,
    trendingDown: React.PropTypes.bool
};
/**
 * Define the default props for this component
 * @type {{filters: {sort: string}}}
 */
RepoListItem.defaultProps = {
    repo: {
        description: "",
        name: "",
        html_url: "",
        avatar_url: "",
        stargazers_count: 0
    },
    trendingUp: false,
    trendingDown: false
};
