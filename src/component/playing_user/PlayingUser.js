import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import './css/PlayingUser.css'

function PlayingUser() {
    const [userName, setUserName] = useState('');
    const [sessionCode, setSessionCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleFormSubmit = (event) => {
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

        // Here you would send the user's name and session code to the backend...
        history.push('/map');
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
                <Button variant="primary" type="submit">
                    Join Session
                </Button>
            </Form>
        </div>
    );
}

export default PlayingUser;
