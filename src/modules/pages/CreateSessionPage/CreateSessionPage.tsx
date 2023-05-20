import {useNavigate} from "react-router-dom";
import './css/CreateSessionPage.css';
import {useState} from "react";
import {routesMap} from "../../../routes";
import Constant from "../../../constant/constant";


function CreateSessionPage() {
    const [sessionName, setSessionName] = useState('');
    const navigate = useNavigate();

    const saveUserToBackEnd = () => {

        // Here you would send the session name to the backend...
        navigate(routesMap.MAP_PAGE);
    }

    return (
        <div className="map-device-container">
            <h1 className="title">Crea la tua sessione Privata</h1>
            <div className="form-container">
                <div>
                    <p>Session Name</p>
                    <input
                        type="text"
                        value={sessionName}
                        onChange={e => setSessionName(e.target.value)}
                        placeholder="Enter session name"
                    />
                </div>
                <div className="mt-3">
                    <button className="btn btn-outline-primary" onClick={() => navigate(routesMap.HOME_PAGE)}>{Constant.BUTTON_LBL.INDIETRO}</button>
                    <button className="btn btn-primary mx-3"
                    onClick={() => saveUserToBackEnd()}>
                        {Constant.BUTTON_LBL.CREATE_SESSION}
                    </button>
                </div>
            </div>
        </div>

    );
}

export default CreateSessionPage;
