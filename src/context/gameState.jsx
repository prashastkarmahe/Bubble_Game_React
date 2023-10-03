import { useState, useEffect } from 'react';
import GameContext from './GameContext.jsx';

const GameState = (props) => {
  const [game_data, set_gamedata] = useState([]);
  const [hit, set_hit] = useState(0);
  const [score, set_score] = useState(0);
  const [time, set_time] = useState(0);
  const [isGameOver,setGameOver] = useState(false);
  const [restartGame,setRestartGame]=useState(false);
  let timer;

  function Make_Bubble() {
    let newdata = [];
    for (var i = 0; i < 128; i++) {
      var x = Math.random() * 10;
      newdata.push(Math.floor(x));
    }
    set_gamedata(newdata);
    var newhit = Math.floor(Math.random() * 10);
    set_hit(newhit);
  }

  function check_hit(num) {
    if (num === hit) {
      console.log("good");
      set_score(score + 10);
      Make_Bubble();
    } else if (score > 0) {
      set_score(score - 10);
    }
  }

  function get_time(t) {
    set_time(t);
  }

  function runTimer() {
    timer = setInterval(function () {
      console.log(time);
      console.log(isGameOver);
      if (time > 1) {
        set_time((prevTime) => prevTime - 1);
      } else if(time==1) {
        set_time(0);
        setGameOver(true);
        clearInterval(timer);
      }
    }, 1000);
  }

  useEffect(() => {
    if (time > 0) { 
      runTimer();
    } else {
      clearInterval(timer); 
    }
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <GameContext.Provider value={{ game_data, Make_Bubble, check_hit, hit, score, time, get_time, isGameOver,setGameOver ,restartGame,setRestartGame,set_score}}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
