
import './css/JoinSessionPage.css'
import {SetStateAction, useState} from "react";
import {Form, useNavigate} from "react-router-dom";
import {GithubPicker} from 'react-color';
import {routesMap} from "../../../routes";
import Constant from "../../../constant/constant";
import UserDetailsService from "../../../services/UserDetailsService";
import AddPlayerToSessionService from "../../../services/AddPlayerToSessionService";

function JoinSessionPage() {
    const [userName, setUserName] = useState('');
    const [dndSessionName, setDndSessionName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [color, setColor] = useState('#000000');
    const navigate = useNavigate();

    const handleColorChange = (color: { hex: SetStateAction<string>; }) => {
        setColor(color.hex);
    };

    const joinSession = async () => {

        // Check if userName is empty
        if (!userName.trim()) {
            setErrorMessage('Inserisci il nome');
            return;
        }

        // Check if session code is empty
        if (!dndSessionName.trim()) {
            setErrorMessage('Inserisci il codice della Sessione');
            return;
        }

        let sessionToken = localStorage.getItem('sessionToken');
        if(sessionToken === null){
            const datetime = new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getTime();
            sessionToken = userName+'#'+datetime;

            localStorage.setItem('sessionToken', sessionToken);
        }

        /** Send the user's name, session code and color to the backend */
        let addPlayerToSessionREST = AddPlayerToSessionService(dndSessionName, {name: userName, color: color, sessionToken: sessionToken});
        addPlayerToSessionREST.subscribe({
            next: (res) => {
                console.log(res);

                localStorage.setItem('user', JSON.stringify({userName, color, sessionName: dndSessionName}));
                navigate(routesMap.MAP_PAGE);
            },
            error: (err) =>{
                console.log(err);
            }
        });

    };

    return (
        <div className="playing-user-container">
            <h1 className="title">Unisciti ad una Sessione!</h1>
            <Form className="form-container">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div>
                    <div>Inserisci il tuo nome</div>
                    <input
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Nome"
                    />
                </div>
                <div className="mt-3">
                    <div>Inserisci il codice sessione</div>
                    <input
                        type="text"
                        value={dndSessionName}
                        onChange={e => setDndSessionName(e.target.value)}
                        placeholder="Codice sessione"
                    />
                </div>
                <div className="mt-3">
                    <div className="mb-2">Scegli un colore</div>
                    <GithubPicker color={color} onChangeComplete={handleColorChange}/>
                </div>
                <div className="mt-5">
                    <button className="btn btn-outline-primary" onClick={() => navigate(routesMap.HOME_PAGE)}>{Constant.BUTTON_LBL.INDIETRO}</button>
                    <button className="btn btn-primary mx-3"
                            onClick={() => joinSession()}>
                        {Constant.BUTTON_LBL.UNISCITI}
                    </button>
                </div>
            </Form>
        </div>
    );
}

export default JoinSessionPage;
