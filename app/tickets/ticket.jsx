import React from "react/addons"
export default class Ticket extends React.Component {
    constructor() {
        super();
    }

    render() {

        let className = this.props.selected ? "ticket selected" : "ticket";
        if ( this.props.win ) {
            className = className + " win";
        }
        return (<li className={className} style={this.props.style}><span className="label">{this.props.name}</span></li>)
    }
}