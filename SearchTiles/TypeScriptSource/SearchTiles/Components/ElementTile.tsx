﻿/// <reference path="../stores/elementtilestore.ts" />
module SearchTiles.Components {

    import ElementTileStore = Stores.ElementTileStore;
    import IElementModel = Stores.IElementModel;

    export var ElementTile = React.createClass({

        // in regular react you would use a "propTypes" declaration here

        /* propTypes = {
            tileData: IElementModel
        } */

        render() {

            // Your component now knows what the contract is with the store
            const tile: IElementModel = this.props.tileData;

            const backroundStyles = {
                backgroundColor: `hsl(${tile.Hue}, 100%, 80%)`
            };

            return (
                <div style={backroundStyles} className="elementTile">
                    <div className="elementIdentity">{tile.Identity}</div>
                    <div className="elementAbbrev">{tile.Abbreviation}</div>
                    <div className="elementName">{tile.Name}</div>
                </div>
            );
        }
    });

}