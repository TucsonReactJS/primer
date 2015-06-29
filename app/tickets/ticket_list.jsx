import React from "react/addons"
import Ticket from "./ticket"

export default class TicketList extends React.Component {
    constructor() {
        super();
    }

    render() {
        let style = {
            width: Math.max((100 / this.props.tickets.length), 25) + "%"
        }
        let tickets = this.props.tickets.map(( t, idx ) => <Ticket style={style} win={t.win} name={t.name} key={idx}
                                                                   color={t.color}
                                                                   selected={t.selected}/>)

        return (<ul className="ticket-list">{tickets}</ul>);
    }
}
