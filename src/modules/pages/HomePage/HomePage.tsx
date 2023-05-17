import {useNavigate} from "react-router-dom";

const navigate = useNavigate();
import './css/Home.css';

function HomePage() {

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the D&D Combat Map!</h1>
            <div className="button-container">
                <button onClick={() => navigate('/map-device')}>Map Device</button>
                <button onClick={() => navigate('/playing-user')}>Playing User</button>
            </div>
        </div>
    );
}

export default HomePage;