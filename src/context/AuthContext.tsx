// Libs
import { createContext, useEffect, useState } from "react";

// Hooks

// Services

// Types
type TAuthContextProviderProps = {
    children: React.ReactNode
}

type TUserAgency = {
    agencyName: string,
    badgeNumber: string,
    roles: string[],
    uid:string
}

type TUserUMC = {
    firstName: string,
    lastName: string,
    provinceSom: string,
    roles: string[],
    uid:string
}

// Local Enums

// Create initial empty context
const AuthContext = createContext<any | null>(null);

/**
 * Main app context
 * @param {*} props
 * @returns
 */
const AuthContextProvider = ({ children }: TAuthContextProviderProps) => {

    const [userState, setUserState] = useState<TUserAgency | TUserUMC>({
        firstName: "",
        lastName: "",
        provinceSom: "",
        roles: [],
        uid: ""
    });

    return (
        <AuthContext.Provider value={{
        user: userState
    }}>
    {children}
    </AuthContext.Provider>
);
};

export default AuthContextProvider;
export { AuthContext };