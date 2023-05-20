import {useNavigate} from "react-router-dom";

import './css/Home.css';
import {routesMap} from "../../../routes";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="HomePage">
            <div className="home-container">
                <h1 className="home-title">Welcome to the D&D Combat Map!</h1>
                <div className="button-container">
                    <button className="btn btn-primary" onClick={() => navigate(routesMap.CREATE_SESSION_PAGE)}>Crea sessione</button>
                    <button className="btn btn-primary" onClick={() => navigate(routesMap.JOIN_SESSION_PAGE)}>Unisciti ad una sessione</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;