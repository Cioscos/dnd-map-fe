import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './css/Home.css';

function Home() {
    const history = useHistory();

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the D&D Combat Map!</h1>
            <div className="button-container">
                <Button onClick={() => history.push('/map-device')}>Map Device</Button>
                <Button onClick={() => history.push('/playing-user')}>Playing User</Button>
            </div>
        </div>
    );
}

export default Home;