import { useState } from "react";
import Button from "./Button";
function Main({ClickOnRule}){
  const [score,setScore]=useState(0);
  const[currentDice,SetCurrentDice]=useState(1);
  const [selectednumber,setSelectNumber]=useState();
  const [error,setError] =useState('');
  const[reset,setReset]=useState(false);
  // const [ClickRule, SetClickRule]= useState(false);
  const genrateNumber =  (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  };
  const roleDice=()=>{
    if(!selectednumber) {
      setError(alert("please select any number "));
      return 
    }
   setError();
   const randomNumber= genrateNumber(1,7);
   SetCurrentDice((prev)=>randomNumber);
   if(selectednumber===randomNumber){
      setScore(prev=> prev+randomNumber);
   }
   else{
    setScore(prev=>prev-2)
   }
   if(score>11){
    alert("you win the game");
    ScoreReset();
   }
   else if(score<-8){
    alert("you lose the game");
    ScoreReset();
   }
  }
  const ScoreReset=()=>{
    setReset(()=>{
      setScore(0);
      SetCurrentDice(1);
      setSelectNumber();
    })
  }
    return (
     <>
     
      <div className="Main_1">
        <div className="score_div">
              <h1>{score}</h1>
            <h2>score</h2>
        </div>
        <div className="Main1_2">

         <Button selectednumber={selectednumber} 
                   setSelectNumber={setSelectNumber}
         />
          </div>
      </div>
      <div className="Main_2">
       <img  onClick={roleDice}
       src={`./src/Dice_images/dice_${currentDice}.png`} alt="dice" />
            <h2>click to dice</h2>
          <button onClick={ScoreReset}>reset</button>
          <button onClick={ClickOnRule}>rule</button>
      </div>
     </>
    )
}
export default Main;