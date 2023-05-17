import React, {useEffect, useState} from 'react';
import {GridGenerator, Hexagon, HexGrid, Layout, Text} from 'react-hexgrid';
import './css/Map.css';
import SockJS from 'sockjs-client';

function Map() {
    // Let's assume that we have 5x5 grid for simplicity
    const hexagons = GridGenerator.rectangle(10, 10);
    let stompClient = undefined;
    const [isConnected, setIsConnected] = useState(false);

    const connect = () => {
        const socket = new SockJS('http://localhost:8080/websocket');
        var Stomp = require('stompjs')
        stompClient = Stomp.over(socket);

        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            setIsConnected(true);
            subscribeToUpdates();
        });
    }

    const subscribeToUpdates = () => {
        if (stompClient && isConnected) {
            stompClient.subscribe('/topic/sessionUpdate', function (messageOutput) {
                console.log('Received: ', messageOutput.body);
            });
        }
    }

    const disconnect = () => {
        if (stompClient && stompClient.connected) {
            stompClient.disconnect();
        }
        console.log("Disconnected");
    };

    const handleHexagonClick = (hex) => {
        if (stompClient && stompClient.connected && isConnected) {
            const position = {q: hex.q, r: hex.r}
            const player = {name: 'Cioscos', position: position, sessionToken: "Cioscos#blabla#1"}
            const message = {sessionName: 'prova_1', player: player};
            stompClient.send("/session/player/move", {}, JSON.stringify(message));
        }
    }

    useEffect(() => {
        connect();

        return () => {
            disconnect();
        };
    },);

    return (
        <div className="map">
            <h1>This is the Map!</h1>
            <HexGrid width={1000} height={800}>
                <Layout size={{x: 6, y: 6}} flat={false} spacing={1.02} origin={{x: -45, y: -40}}>
                    {
                        hexagons.map((hex, i) => (
                            <Hexagon
                                key={i}
                                q={hex.q}
                                r={hex.r}
                                s={hex.s}
                                onClick={() => handleHexagonClick(hex)}
                            >
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
