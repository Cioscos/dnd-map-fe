import {useNavigate} from "react-router-dom";
import './css/CreateSessionPage.css';
import {useContext, useState} from "react";
import {routesMap} from "../../../routes";
import Constant from "../../../constant/constant";
import NewDndSessionService from "../../../services/NewDndSessionService";
import {AppContext} from "../../../context/AppContext";

function CreateSessionPage() {
    const {setDndSession} = useContext(AppContext);
    const [sessionName, setSessionName] = useState('');
    const [xCoordinate, setXCoordinate] = useState('');
    const [yCoordinate, setYCoordinate] = useState('');

    const navigate = useNavigate();

    const saveUserToBackEnd = () => {

        // Crea la sessione nel BE e restituisce l'oggetto sessione
        let createNewSessionREST = NewDndSessionService(sessionName, xCoordinate+"x"+yCoordinate);
        createNewSessionREST.subscribe({
            next: (res) => {
                console.log(res)
                setDndSession(res)

                navigate(routesMap.MAP_PAGE);
            },
            error: (err) => {
                console.log(err)
            }
        });
    }

    return (
        <div className="map-device-container">
            <h1 className="title">Crea la tua sessione Privata</h1>
            <div className="form-container">
                <div>
                    <p>Nome Sessione</p>
                    <input
                        type="text"
                        value={sessionName}
                        onChange={e => setSessionName(e.target.value)}
                        placeholder="Inserisci il nome della sessione"
                    />
                </div>
                <div>
                    <p>Dimensioni Mappa</p>
                    <p>X</p>
                    <input
                        type="number"
                        min={0}
                        value={xCoordinate}
                        onChange={e => setXCoordinate(e.target.value)}
                        placeholder="Inserisci la coordinata X"
                    />
                    <p>Y</p>
                    <input
                        type="number"
                        min={0}
                        value={yCoordinate}
                        onChange={e => setYCoordinate(e.target.value)}
                        placeholder="Inserisci la coordinata Y"
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
