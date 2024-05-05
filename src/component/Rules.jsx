import Button from "./Button";
function Rules({return_home}){
    function return_game(){
        
    }
    return(
        <>
     <div className="Main_1">
          <div className="score_div">
              <h1>0</h1>
            <h2>score</h2>
           </div>
           <div className="Main1_2">
             <Button/>
          </div>
      </div>
        <div className="return">
        <button className="return_to_play" onClick={return_home}>Play</button>
        </div>
        {/* {isStart ?(ClickRule?<Rules/>:<Main ClickOnRule={toggle_Rule}/>):<Front toggle ={toggleGame}/>} */}
      <div className="Main_rule">
      <div className="rule">
        <img 
       src={`./src/Dice_images/dice_1.png`} alt="dice" />
            <h2>click to dice</h2>
          <button>reset</button>
          <button>rule</button>
           </div> 
       <div className="rule_1">
      <div>
      <h1>
            how to play game 
        </h1>
        <ul>
            <li>select Any number</li>
            <li>Click on Dice image </li>
            <li> After click on dice if selected number is equals to dice number Then you will get the game  + point   </li>
            <li>If you get wrong guess then 2 point will be decreased from your score</li>
            <li><h2>☝️CLICK ON Play to Play the game</h2></li>
        </ul>
      </div>
       </div>   
      </div>
        </>
    )
}
export default Rules;