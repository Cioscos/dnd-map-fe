// Libs
import { useContext, useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";

// Core

// Layouts

// Pages
import HomePage from "../modules/pages/HomePage/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout/MainLayout";
import CreateSessionPage from "../modules/pages/CreateSessionPage/CreateSessionPage";
import JoinSessionPage from "../modules/pages/JoinSessionPage/JoinSessionPage";
import MapPage from "../modules/pages/MapPage/MapPage";

const appRoute = "/dnd/spa"
const routesMap = {
    HOME_PAGE: appRoute,
    CREATE_SESSION_PAGE: appRoute+"/create-session",
    JOIN_SESSION_PAGE: appRoute+"/join-session",
    MAP_PAGE: appRoute+"/map"
};

const routerInstance = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute>
            <MainLayout />
        </ProtectedRoute>,
        children: [
            {path: routesMap.HOME_PAGE, element: <HomePage />},
            {path: routesMap.CREATE_SESSION_PAGE, element: <CreateSessionPage />},
            {path: routesMap.JOIN_SESSION_PAGE, element: <JoinSessionPage />},
            {path: routesMap.MAP_PAGE, element: <MapPage />},
        ]
    }
], { basename: process.env.REACT_APP_BASENAME });

const useHeaderRoutes = () => {
    const [headerRoutesArr, setHeaderRoutesArr] = useState(genHeaderRoutesArr());

    // Detect language change in AppContext and react to it.
    useEffect(() => {
        setHeaderRoutesArr(genHeaderRoutesArr());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function genHeaderRoutesArr() {

        let headerRoutesArrOtherUser;
        return headerRoutesArrOtherUser = [
            { type: "nav-link", label: "HOME", path: "/" },
        ];

    }

    return [headerRoutesArr];
};

const indirizziFetch = {
}

export {
    routerInstance,
    routesMap,
    useHeaderRoutes,
    indirizziFetch
};
