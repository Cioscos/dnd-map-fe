import React from 'react';
import {GridGenerator, Hexagon, HexGrid, Layout, Text} from 'react-hexgrid';
import './css/Map.css'; // We will create this later

function Map() {
    // Let's assume that we have 5x5 grid for simplicity
    const hexagons = GridGenerator.rectangle(10, 10);

    return (
        <div className="map">
            <h1>This is the Map!</h1>
            <HexGrid width={1000} height={800}>
                <Layout size={{x: 6, y: 6}} flat={false} spacing={1.02} origin={{x: -45, y: -40}}>
                    {
                        hexagons.map((hex, i) => (
                            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s}>
                                <Text fontSize="5" color={'#ff0000'}>{`${hex.q}-${hex.r}`}</Text>
                            </Hexagon>
                        ))
                    }
                </Layout>
            </HexGrid>
        </div>
    );
}

export default Map;
