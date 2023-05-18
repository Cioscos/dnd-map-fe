import {GridGenerator, Hex, Hexagon, HexGrid, Layout, Text} from 'react-hexgrid';
import './css/Map.css';
import {useEffect, useState} from "react";
import { RxStomp } from "@stomp/rx-stomp";
import { WebSocket } from 'ws';

function Map() {
    // Let's assume that we have 5x5 grid for simplicity
    const hexagons = GridGenerator.rectangle(10, 10);
    const [isConnected, setIsConnected] = useState(false);

    const [stompClient, setStompClient] = useState(new RxStomp());
    stompClient.configure({
        brokerURL: 'ws://91ad-93-146-168-140.ngrok-free.app/websocket',
    });

    const SessionUpdateREST= stompClient.watch({ destination: "/topic/sessionUpdate" });

    const connect = () => {
        stompClient.activate();
        SessionUpdateREST.subscribe({
            next: (res) => {
                console.log(res)
                setIsConnected(true);
            },
            error: (err) => {
                console.log(err)
            }
        })
    }

    const disconnect = () => {
        if (stompClient && isConnected) {
            stompClient.deactivate();
        }
        console.log("Disconnected");
    };

    const handleHexagonClick = (hex: Hex) => {
        if (stompClient && isConnected) {
            const position = {q: hex.q, r: hex.r}
            const player = {name: 'Cioscos', position: position, sessionToken: "Cioscos#blabla#1"}
            const message = {sessionName: 'prova_1', player: player};
            stompClient.publish({
                destination: "/session/player/move",
                body: JSON.stringify(message),
            });
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
