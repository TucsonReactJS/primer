import React from "react/addons"
export default class Tile extends React.Component {
    render() {
        let tileStyle = {
            width: "33%",
            float: "left",
            border: "1px solid gray",
            marginBottom: "5px",
            marginLeft: "5px",
            height: "33vh"
        }
        return (<div style={tileStyle}>
            Tile
        </div>);
    }
}
