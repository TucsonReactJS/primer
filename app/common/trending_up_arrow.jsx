'use strict';
import React from "react"

/**
 * A simple styled up arrow
 */
export default
class TrendingUpArrow extends React.Component {
    render() {

        let trendingUpStyle = {
            color: "#FF8B60"
        };
        //render content
        return (
            <span style={trendingUpStyle} className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
        );
    }
}
