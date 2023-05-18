// Libs
import {createContext, useEffect, useState,} from "react";
import UserDetailsService from "../services/UserDetailsService";
import UserDetails from "../types/UserDetails";

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
}

/** Create initial empty context from interface appContextOut */
const AppContext = createContext<appContextOut>({
    userDetails: {
        cap: "",
    },
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
            }}>
                {children}
            </AppContext.Provider>
        </>
    );
};

export default AppContextProvider;
export { AppContext };