import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms" component={Rooms}/>
                <Route path="/rooms/:slug" component={SingleRoom}/>
                <Route component={Error}/>
            </Switch>
        </Router>
    );
}

export default App;
