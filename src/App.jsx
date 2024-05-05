import { useState } from 'react' 
import './App.css'
import Front from './component/Front'
import Main from './component/Main';
import Rules from './component/Rules';
function App() {
  const [isStart, SetStart]= useState(false);
  const [ClickRule, SetClickRule]= useState(false);
  const [return_play,setReturn]= useState(false);
  const toggleGame =()=>{
    SetStart((prop)=>!prop);
   }
   const toggle_Rule=()=>{
    SetClickRule((prop)=>!prop);
   }
   const R_Playing =()=>{
    setReturn((prop)=>!prop);
   }
  return(
   <>
  {
  isStart ?
  (ClickRule?
  (return_play?<Main ClickOnRule={toggle_Rule}/>:<Rules return_home={R_Playing}/>)  :<Main ClickOnRule={toggle_Rule}/>)
  :
  <Front toggle = {toggleGame}/>
  }
   </>
  )
}
export default App;
