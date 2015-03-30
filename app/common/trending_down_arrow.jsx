'use strict';
import React from "react"

/**
 * A simple styled down arrow
 */
export default
class TrendingDownArrow extends React.Component {
    render() {

        let trendingDownStyle = {
            color: "#9494FF"
        };
        //render content
        return (
            <span style={trendingDownStyle} className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
        );
    }
}
