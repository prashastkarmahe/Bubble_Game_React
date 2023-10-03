import React from 'react';
import './App.css';
import UpperBox from './components/UpperBox/UpperBox';
import LowerBox from './components/LowerBox/LowerBox';
import GameState from './context/gameState.jsx'; // Use capitalized import

const App = () => {
  return (
    <>
      <GameState>
        <div className="box">
          <UpperBox />
          <LowerBox />
        </div>
      </GameState>
    </>
  );
};

export default App;