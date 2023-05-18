import {useNavigate} from "react-router-dom";
import './css/MapDevice.css';
import {useState} from "react";
import {routesMap} from "../../../routes";


function MapDevice() {
    const [sessionName, setSessionName] = useState('');
    const navigate = useNavigate();

    const saveUserToBackEnd = () => {

        // Here you would send the session name to the backend...
        navigate(routesMap.MAP);
    }

    return (
        <div className="map-device-container">
            <h1 className="title">You are using Map Device function!</h1>
            <div className="form-container">
                <div>
                    Session Name
                </div>
                <button className="primary" type="submit"
                onClick={() => saveUserToBackEnd()}>
                    Create Session
                </button>
            </div>
        </div>

    );
}

export default MapDevice;
