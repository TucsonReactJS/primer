'use strict';
import React from "react";
import TrendingDownArrow from "../common/trending_down_arrow"
import TrendingUpArrow from "../common/trending_up_arrow"

/**
 * The RepoList is a list of GitHub repositories
 */
export default
class RepoListItem extends React.Component {

    static defaultProps

    constructor( props ) {
        super(props);
    }

    /**
     * http://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount
     * Invoked immediately before a component is unmounted from the DOM. Perform any necessary cleanup in this method,
     * such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.
     */
    componentWillUnmount() {

        //ensure our animation is cleaned up
        if ( this.animation ) {
            this.animation = null;
        }

    }

    /**
     * https://facebook.github.io/react/docs/component-specs.html#updating-componentwillupdate
     * Invoked immediately before rendering when new props or state are being received. This method is not called for
     * the initial render. Use this as an opportunity to perform preparation before an update occurs.
     * @param nextProps
     * @param nextState
     */
    componentWillUpdate( nextProps, nextState ) {
        if ( nextProps.repo.id !== this.props.repo.id ) {
           // const el = React.findDOMNode(this);
           /* this.animation = snabbt(el, {
                position: [5000, 0, 0],
                duration: 150
            });*/
        }

    }

    /**
     *https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
     * Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the
     * initial render. Use this as an opportunity to operate on the DOM when the component has been updated.
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate( prevProps, prevState ) {

        if ( prevProps.repo.id !== this.props.repo.id ) {
            /*this.animation.snabbt({
                position: [0, 0, 0],
                easing: 'easeOut'
            });*/

        }

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
        const mediaObjectStyle = {
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
 * Define our prop types
 * @type {{repo: *, trendingUp: *, trendingDown: *}}
 */
RepoListItem.propTypes = {
    repo: React.PropTypes.object,
    trendingUp: React.PropTypes.bool,
    trendingDown: React.PropTypes.bool
};
/**
 * Default props
 * @type {{repo: {description: string, name: string, html_url: string, avatar_url: string, stargazers_count: number}, trendingUp: boolean, trendingDown: boolean}}
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
