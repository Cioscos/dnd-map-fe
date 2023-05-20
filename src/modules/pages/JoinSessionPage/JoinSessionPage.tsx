
import './css/JoinSessionPage.css'
import {SetStateAction, useState} from "react";
import {Form, useNavigate} from "react-router-dom";
import {GithubPicker} from 'react-color';
import {routesMap} from "../../../routes";
import Constant from "../../../constant/constant";

function JoinSessionPage() {
    const [userName, setUserName] = useState('');
    const [sessionCode, setSessionCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [color, setColor] = useState('#000000');
    const navigate = useNavigate();

    const handleColorChange = (color: { hex: SetStateAction<string>; }) => {
        setColor(color.hex);
    };

    const joinSession = async () => {

        // Check if userName is empty
        if (!userName.trim()) {
            setErrorMessage('Please enter your name');
            return;
        }

        // Check if session code is empty
        if (!sessionCode.trim()) {
            setErrorMessage('Please enter the session code');
            return;
        }

        // Here you would send the user's name, session code and color to the backend...
        try {
            // Simulate a call to the backend...
            const response = await new Promise<any>((resolve, reject) => {
                setTimeout(() => {
                    const success = Math.random() > 0.5; // 50% chance of success
                    success ? resolve({success}) : reject({message: 'Session code or username already in use.'});
                }, 1000);
            });

            if (response.success) {
                localStorage.setItem('user', JSON.stringify({userName, sessionCode, color}));
                navigate(routesMap.MAP);
            }
        } catch (err: any) {
            setErrorMessage(err.message);
        }
    };

    return (
        <div className="playing-user-container">
            <h1 className="title">You are a Playing User!</h1>
            <Form className="form-container">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div>
                    <div>User Name</div>
                    <input
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mt-3">
                    <div>Session Code</div>
                    <input
                        type="text"
                        value={sessionCode}
                        onChange={e => setSessionCode(e.target.value)}
                        placeholder="Enter session code"
                    />
                </div>
                <div className="mt-3">
                    Choose Your Color
                    <GithubPicker color={color} onChangeComplete={handleColorChange}/>
                </div>
                <div className="mt-5">
                    <button className="btn btn-outline-primary" onClick={() => navigate(routesMap.HOME_PAGE)}>{Constant.BUTTON_LBL.INDIETRO}</button>
                    <button className="btn btn-primary mx-3"
                            onClick={() => joinSession()}>
                        {Constant.BUTTON_LBL.CONFERMA}
                    </button>
                </div>
            </Form>
        </div>
    );
}

export default JoinSessionPage;
