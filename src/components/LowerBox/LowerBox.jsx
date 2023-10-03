import {useState, useContext, useEffect} from 'react'
import './LowerBox.css'
import StartPage from '../StartPage/StartPage.jsx'
import Game from '../Game/Game.jsx'
import GameOver from '../GameOver/GameOver.jsx'
import gameContext from '../../context/GameContext.jsx';

const LowerBox = () => {

    const context = useContext(gameContext);
    const { isGameOver ,restartGame } = context;
  
  const [lowBoxComp,set_lowBoxComp]=useState(<StartPage startgame={startgame}/>);
  function startgame(){
    set_lowBoxComp(<Game/>)
  }

  
  function showresult(){
    set_lowBoxComp(<GameOver/>)
  }

  useEffect(() => {
    console.log("isGameOver changed:", isGameOver);
    if (isGameOver) {
      showresult();
    }else{
      //write code to again go to startpage after clicking restart
    }
  }, [isGameOver]);
  
  useEffect(() => {
    console.log("Game Restarting :", restartGame);
    if (restartGame==true) {
      set_lowBoxComp(<StartPage startgame={startgame}/>)
    }
  }, [restartGame]);


  return (
    <div className="box_lower">
        {lowBoxComp}
        {/* <StartPage/> */}
        {/* <Game /> */}
        {/* <GameOver score={1}/> */}
    </div>
  )
}

export default LowerBox