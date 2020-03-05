import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Game from './Game';

const App = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
    </Switch>
)

export default App;