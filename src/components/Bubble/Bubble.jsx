import React, {useContext} from 'react'
import './Bubble.css'
import gameContext from '../../context/GameContext.jsx';

const Bubble = (props) => {

  const context=useContext(gameContext);
  const {check_hit}=context;



  return (
    <>
     <button className="bubble" onClick={()=>{check_hit(props.val)}}><h2>{props.val}</h2></button>
    </>
  )
}

export default Bubble