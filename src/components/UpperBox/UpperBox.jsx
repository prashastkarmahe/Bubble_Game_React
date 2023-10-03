import {useContext} from 'react'
import './UpperBox.css'
import gameContext from '../../context/GameContext.jsx';


const UpperBox = () => {

  const context=useContext(gameContext);
  const {hit,score,time}=context;

  return (
    <div className="box_upper">
        <div className="hit"><h2>HIT</h2><div className="small_box"><h2 className="hit_num">{hit}</h2></div></div>
        <div className="time"><h2>TIME</h2><div className="small_box"><h2 className="timer">{time}</h2></div></div>
        <div className="score"><h2>SCORE</h2><div className="small_box"><h2 className="score_txt">{score}</h2></div></div>
    </div>
  )
}

export default UpperBox