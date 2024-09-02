import React from 'react';
import { Switch, Route } from "react-router-dom";
import DataSensor from './pages/DataSensor';
import HomePage from './pages/HomePage';
import ActionHistory from './pages/ActionHistory';
import Profile from './pages/Profile';


const Main = (props) => (
    <Switch>
        <Route exact path="/" component={HomePage} />;
        <Route path="/datasensor" component={DataSensor} />;
        <Route path="/actionhistory" component={ActionHistory} />;
        <Route path="/profile" component={Profile} />;
    </Switch>
)

export default Main;