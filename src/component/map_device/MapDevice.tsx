import {useHistory} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import './css/MapDevice.css';
import {useState} from "react";


function MapDevice() {
    const [sessionName, setSessionName] = useState('');
    const history = useHistory();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Here you would send the session name to the backend...
        history.push('/map');
    };

    return (
        <div className="map-device-container">
            <h1 className="title">You are using Map Device function!</h1>
            <Form className="form-container" onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Session Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={sessionName}
                        onChange={e => setSessionName(e.target.value)}
                        placeholder="Enter session name"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Session
                </Button>
            </Form>
        </div>

    );
}

export default MapDevice;
