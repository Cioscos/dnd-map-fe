// Libs
import {createContext, useEffect, useState,} from "react";
import UserDetailsService from "../services/UserDetailsService";
import UserDetails from "../types/UserDetails";
import DndSession from "../types/DndSession";

// Data

// Hooks

// Enums


//import LoaderComponent from "../../shared/components/LoaderComponent/LoaderComponent";
// Types
type TAppContextProviderProps = {
    children: React.ReactNode
}

// type TAppState = {
//     containerStatus: number
// }

/** Interfaccia in uscita di AppContext */
interface appContextOut {
    userDetails: UserDetails,
    dndSession: DndSession,
    setDndSession: any
}

/** Create initial empty context from interface appContextOut */
const AppContext = createContext<appContextOut>({
    userDetails: {
        cap: "",
    },
    dndSession: {
        name: "",
        players: [
            {
                name: "",
                color: "",
                position: {
                    q: 0,
                    r: 0,
                    s: 0
                },
                sessionToken: "",
                movementCompleted: true,
                castedAttacks: [
                    {
                        position: {
                            q: 0,
                            r: 0,
                            s: 0
                        },
                        shape: ""
                    }
                ]
            }
        ],
        enemies: [
            {
                name: "",
                color: "",
                position: {
                    q: 0,
                    r: 0,
                    s: 0
                },
                size: 0
            }
        ],
        entities: [
            {
                color: "",
                position: {
                    q: 0,
                    r: 0,
                    s: 0
                },
                size: 0
            }
        ]
    },
    setDndSession: function (){}
});

/**
 * Main app context
 * @param {*} props
 * @returns
 */
const AppContextProvider = ({ children }: TAppContextProviderProps) => {

    /** Recupero il parametro Token dall'url */
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("token")

    const [userDetails, setUserDetails] = useState<UserDetails>({
        cap: "",
    })

    const [dndSession, setDndSession] = useState<DndSession>({
        name: "",
        players: [
            {
                name: "",
                color: "",
                position: {
                    q: 0,
                    r: 0,
                    s: 0
                },
                sessionToken: "",
                movementCompleted: true,
                castedAttacks: [
                    {
                        position: {
                            q: 0,
                            r: 0,
                            s: 0
                        },
                        shape: ""
                    }
                ]
            }
        ],
        enemies: [
            {
                name: "",
                color: "",
                position: {
                    q: 0,
                    r: 0,
                    s: 0
                },
                size: 0
            }
        ],
        entities: [
            {
                color: "",
                position: {
                    q: 0,
                    r: 0,
                    s: 0
                },
                size: 0
            }
        ]
    })

    let userDetailsREST = UserDetailsService();

    /** Ottengo i dati dell'utente connesso  */
    useEffect(() => {
        userDetailsREST.subscribe({
            next: (res) => {
                console.log("userdetails")
                console.log(res);
                setUserDetails(res)
            },
            error: (err) =>{
                console.log(err);
            }
        });
    }, []);

    return (
        <>
            <AppContext.Provider value={{
                userDetails: userDetails,
                dndSession: dndSession,
                setDndSession: setDndSession
            }}>
                {children}
            </AppContext.Provider>
        </>
    );
};

export default AppContextProvider;
export { AppContext };