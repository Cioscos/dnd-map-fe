import React from 'react';
import {GridGenerator, Hexagon, HexGrid, Layout} from 'react-hexgrid';
import './css/Map.css'; // We will create this later

function Map() {
    // Let's assume that we have 5x5 grid for simplicity
    const hexagons = GridGenerator.rectangle(20, 40);

    return (
        <div className="map">
            <h1>This is the Map!</h1>
            <HexGrid width={800} height={600}>
                <Layout size={{x: 1000, y: 800}} flat={false} spacing={1.02} origin={{x: -45, y: -15}}>
                    {
                        hexagons.map((hex, i) => (
                            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s}/>
                        ))
                    }
                </Layout>
            </HexGrid>
        </div>
    );

}

export default Map;
