import React from "react/addons"
import TicketList from "./ticket_list"

/**
 * Get a random integer
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomInt( min, max ) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class TicketContainer extends React.Component {
    constructor() {
        super();
        this.state = {tickets: [], toAdd: ""};
        //select sound
        this.selectSound = new Howl({
            urls: ["/sounds/blip.mp3"],
            autoplay: false,
            loop: false,
            volume: 1
        });
        this.winSound = new Howl({
            urls: ["/sounds/applause.mp3"],
            autoplay: false,
            loop: false,
            volume: 1
        });

        //countdown
        this.time = 30000;
        this.decrement = .001;
    }

    addTicket( event ) {
        event.preventDefault();
        let tickets = this.state.tickets;
        tickets.push({name: this.state.toAdd, color: randomColor(), selected: false, win: false});

        //add to the state
        this.setState({tickets, toAdd: ""});

    }

    updateValue( event ) {
        this.setState({toAdd: event.target.value});
    }

    clear() {
        this.setState({tickets: []});
    }

    selectTicket() {

        let selected = getRandomInt(0, this.state.tickets.length);
        let tickets = this.state.tickets;

        //don't run if no tickets
        if ( !tickets.length ) {
            return;
        }

        //unselect the last selected
        if ( this.lastSelected ) {

            this.lastSelected.selected = false;

        }

        //set the new values
        tickets[selected].selected = true;
        this.lastSelected = tickets[selected];

        this.selectSound.play();

        this.setState({tickets});

    }

    celebrate() {
        let tickets = this.state.tickets;
        let idx = tickets.indexOf(this.lastSelected);
        this.lastSelected.win = true;
        tickets[idx] = this.lastSelected;
        this.winSound.play();

        //update state
        this.setState({tickets});
    }

    startSelection() {

        //http://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running
        function setDeceleratingTimeout( callback, factor, times ) {
            var internalCallback = function( t, counter ) {
                return function() {
                    if ( t-- > 0 ) {
                        window.setTimeout(internalCallback, ++counter * factor);
                        callback(counter === times);
                    }
                }
            }(times, 0);

            window.setTimeout(internalCallback, factor);
        };

        setDeceleratingTimeout(( done )=> {
            if ( done ) {
                requestAnimationFrame(this.celebrate.bind(this));
            } else {

                requestAnimationFrame(this.selectTicket.bind(this));

            }

        }, 2.2, 120);

    }

    render() {
        return (<div>
            <div className="controls">
                <form onSubmit={this.addTicket.bind(this)}>
                    <input placeholder="Add attendee" className="form-control" type="text" value={this.state.toAdd}
                           onChange={this.updateValue.bind(this)}/>

                </form>
                <a className="btn btn-default" onClick={this.clear.bind(this)}>Clear</a>
                <a className="btn btn-default" onClick={this.startSelection.bind(this)}>Start</a>
                <span className="selected"></span>
            </div>

            <TicketList tickets={this.state.tickets}/>
        </div>)
    }
}
