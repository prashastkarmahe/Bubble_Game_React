import React, { useContext, useEffect } from 'react';
import Bubble from '../Bubble/Bubble.jsx';
import gameContext from '../../context/GameContext.jsx';



const Game = () => {

  const context=useContext(gameContext);
  const {game_data, Make_Bubble}=context;

  useEffect(() => {
    Make_Bubble();
  }, []);

  var keys=0;

  return (
    <>
      {game_data.map((item) => (
        <Bubble key={keys++} val={item}></Bubble>
      ))}
    </>
  );
};

export default Game;
