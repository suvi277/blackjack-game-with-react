import React from 'react';
import GameLayout from '../containers/GameLayout/GameLayout';
import StatsLayout from '../containers/StatsLayout/StatsLayout';
import PlayArea from '../containers/PlayArea/PlayArea';

const Game = () => (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <StatsLayout/>
                <GameLayout />
                <PlayArea/>
            </div>
        </div>
    </div>
);

export default Game;