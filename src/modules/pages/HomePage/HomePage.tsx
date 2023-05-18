import {useNavigate} from "react-router-dom";

import './css/Home.css';
import {routesMap} from "../../../routes";

function HomePage() {
    const navigate = useNavigate();

    console.log("SEI QUI")

    return (
        <div className="HomePage">
            <div className="home-container">
                <h1 className="home-title">Welcome to the D&D Combat Map!</h1>
                <div className="button-container">
                    <button onClick={() => navigate(routesMap.MAP_DEVICE)}>Map Device</button>
                    <button onClick={() => navigate(routesMap.PLAYING_USER)}>Playing User</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;