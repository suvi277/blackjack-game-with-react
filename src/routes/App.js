import React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter } from "react-router-dom";
import Home from './Home';
import Game from './Game';

const App = () => (
    <HashRouter basename='/'>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
        </Switch>
    </HashRouter>
)

export default App;