import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import {GithubPicker} from 'react-color';
import './css/PlayingUser.css'

function PlayingUser() {
    const [userName, setUserName] = useState('');
    const [sessionCode, setSessionCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [color, setColor] = useState('#000000');
    const history = useHistory();

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
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    const success = Math.random() > 0.5; // 50% chance of success
                    success ? resolve({success}) : reject({message: 'Session code or username already in use.'});
                }, 1000);
            });

            if (response.success) {
                localStorage.setItem('user', JSON.stringify({userName, sessionCode, color}));
                history.push('/map');
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
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Session Code</Form.Label>
                    <Form.Control
                        type="text"
                        value={sessionCode}
                        onChange={e => setSessionCode(e.target.value)}
                        placeholder="Enter session code"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Choose Your Color</Form.Label>
                    <GithubPicker color={color} onChangeComplete={handleColorChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Join Session
                </Button>
            </Form>
        </div>
    );
}

export default PlayingUser;
