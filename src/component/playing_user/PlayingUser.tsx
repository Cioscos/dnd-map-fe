
import './css/PlayingUser.css'
import {useState} from "react";
import {Form, useNavigate} from "react-router-dom";
import {GithubPicker} from 'react-color';

function PlayingUser() {
    const [userName, setUserName] = useState('');
    const [sessionCode, setSessionCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [color, setColor] = useState('#000000');
    const navigate = useNavigate();

    const handleColorChange = (color) => {
        setColor(color.hex);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Check if user name is empty
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
                //navigate(routesMap.SELECT_PROVINCIA_PAGE, {state: {tipoAccreditamento});
            }
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    return (
        <div className="playing-user-container">
            <h1 className="title">You are a Playing User!</h1>
            <Form className="form-container" onSubmit={handleFormSubmit}>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div>
                    User Name
                </div>
                <div>
                    Session Code
                </div>
                <div>
                    Choose Your Color
                    <GithubPicker color={color} onChangeComplete={handleColorChange}/>
                </div>
                <button className="primary" type="submit">
                    Join Session
                </button>
            </Form>
        </div>
    );
}

export default PlayingUser;
