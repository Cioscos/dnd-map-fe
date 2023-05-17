// Libs
import { useContext, useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";

// Core

// Layouts

// Pages
import HomePage from "../modules/pages/HomePage/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout/MainLayout";

const appRoute = "/dnd/spa"
const routesMap = {
    HOME_PAGE: appRoute+"/init"
};

const routerInstance = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute allowedRoles={[
            ""
        ]}>
            <MainLayout />
        </ProtectedRoute>,
        children: [
            {   path: routesMap.HOME_PAGE, element: <HomePage />,
                //path: routesMap.HOME_PAGE, element: <HomePage />
            }
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
