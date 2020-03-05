import React from 'react';
import { Link } from 'react-router-dom';
import './BeginGame.scss';

const BeginGame = (props) => {
  return (
    <div className="start-center">
      <h1>Black Jack</h1>
      <Link className="button primary-button" to="/game">New Game</Link>
    </div>
  );
}

export default BeginGame;
