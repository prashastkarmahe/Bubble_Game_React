import { useContext,useEffect } from 'react';
import './StartPage.css';
import gameContext from '../../context/GameContext.jsx';

const StartPage = (props) => {

  const context = useContext(gameContext);
  const { get_time ,restartGame,setRestartGame,setGameOver,set_score} = context;

  const handleStartClick = () => {
    const selectedValue = document.getElementById('game-time').value;
    get_time(selectedValue); 
    props.startgame();
  };

  useEffect(() => {
    console.log("Game Restarting :", restartGame);
    if (restartGame) {
      setRestartGame(false);
      setGameOver(false);
    }
  }, [restartGame,setGameOver]);
  

  return (
    <div className="start_box">
      <div className="game_title">Welcome To Bubble Game</div>
      <div className="game_start">
        <div className="input-container">
          <label htmlFor="game-time">Select Game Time:</label>
          <select id="game-time">
            <option value="10">10 seconds</option>
            <option value="20">20 seconds</option>
            <option value="30">30 seconds</option>
            <option value="40">40 seconds</option>
            <option value="50">50 seconds</option>
            <option value="60">60 seconds</option>
          </select>
        </div>
        <button className="start-button" onClick={handleStartClick}>
          Start
        </button>
      </div>
    </div>
  );
};

export default StartPage;
