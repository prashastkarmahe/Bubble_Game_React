import {useContext} from 'react'
import './GameOver.css'
import gameContext from '../../context/GameContext.jsx';

const GameOver = () => {
  const context = useContext(gameContext);
  const { score ,setRestartGame,restartGame,set_score} = context;
  
  const restart=()=>{
    console.log(restartGame);
    setRestartGame(true);
    set_score(0);
    console.log(restartGame);
  }

  return (
    <>
        <div className="game-over">
            <h1>Game Over</h1>
            <p>Your Score is: {score}</p>
            <button className="restart-button" onClick={restart}>Restart</button>
        </div>
    </>
  )
}

export default GameOver