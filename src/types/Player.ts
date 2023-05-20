type Player = {
    name: string,
    color: string,
    position: {
        q: number,
        r: number,
        s: number
    },
    sessionToken: string,
    movementCompleted: boolean,
    castedAttacks: [
        {
            position: {
                q: number,
                r: number,
                s: number
            },
            shape: string
        }
    ]
}

export default Player;