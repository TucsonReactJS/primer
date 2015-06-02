import React from "react/addons"
import TilesContainer from "./tiles/tiles_container"

export default class Tiles extends React.Component {
    render() {

        let tiles = [];
        for(let i = 0;i<100;i++) {
            tiles.push({});
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <TilesContainer tiles={tiles} className="col-md-12"/>
                </div>
            </div>
        );
    }
}
