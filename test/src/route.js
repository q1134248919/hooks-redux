import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './test';
import Nice from  './high/n'


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>   
            <Route exact path="/nice" component={Nice}/> 
        </Switch>
    </HashRouter>
);


export default BasicRoute;