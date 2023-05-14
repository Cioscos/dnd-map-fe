import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MapDevice from './component/map_device/MapDevice';
import Home from './component/home/Home';
import PlayingUser from './component/playing_user/PlayingUser';
import Map from './component/map/Map'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/map-device" component={MapDevice}/>
                <Route path="/playing-user" component={PlayingUser}/>
                <Route path="/map" component={Map}/>
            </Switch>
        </Router>
    );
}

export default App;
