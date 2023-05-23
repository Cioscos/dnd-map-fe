import Player from "./Player";

type DndSession = {
    name: string,
    players: Player[],
    enemies: [
        {
            name: string,
            color: string,
            position: {
                q: number,
                r: number,
                s: number
            },
            size: number
        }
    ],
    entities: [
        {
            color: string,
            position: {
                q: number,
                r: number,
                s: number
            },
            size: number
        }
    ]
}

export default DndSession;