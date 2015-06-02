import React from "react/addons"
import Tile from "./tile"

export default class TilesContainer extends React.Component {
    tick( currentTime ) {

        console.log(this.node.scrollTop);
        requestAnimationFrame(this.tick.bind(this));
    }

    componentDidMount() {
        this.node = React.findDOMNode(this.refs.container);
        requestAnimationFrame(this.tick.bind(this));
    }

    render() {

        let tiles = this.props.tiles.map(( t, idx ) => <Tile key={idx}/>)

        return (<div ref="container" style={{overflowY:"scroll",height:"100vh"}}>
            {tiles}
        </div>);
    }
}
