import React from "react/addons"
export default class Ticket extends React.Component {
    constructor() {
        super();
    }

    render() {

        let style = {
            backgroundColor: this.props.color
        };
        let className = this.props.selected ? "ticket selected" : "ticket";
        return (<li className={className} style={style}><span className="label">{this.props.name}</span></li>)
    }
}