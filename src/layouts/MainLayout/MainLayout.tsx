// Libs
import { useEffect, useState } from "react";
import "./MainLayout.scss";
import HomePage from "../../modules/pages/HomePage/HomePage";
import Map from "../../modules/pages/MapPage/Map";
import {Outlet} from "react-router-dom";

// Core

// Components

/**
 * Reusable Layout Page, which is the parent component rendered of all pages under the `/` routes.
 * @returns {JSX.Element}
 */
const MainLayout = () => {

    const genFooterRoutes = (): { label: string, path: string }[] => {
        return [
            //{ label: LAYOUT_TEXT.FOOTER_ROUTE_LBL_PRIVACY_POLICY, path: "/" },
        ];
    };

    const [state, setState] = useState({
        footerRoutesArr: genFooterRoutes()
    });

    // Detect language change in AppContext and react to it.
    useEffect(() => {
        setState((oldState) => {
            const newState = { ...oldState };
            newState.footerRoutesArr = genFooterRoutes();
            return newState;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="MainLayout">
            <Outlet />
        </div>
);
};

export default MainLayout;