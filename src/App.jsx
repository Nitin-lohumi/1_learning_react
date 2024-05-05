import { useState } from 'react' 
import './App.css'
import Front from './component/Front'
import Main from './component/Main';
import Rules from './component/Rules';
function App() {
  const [isStart, SetStart]= useState(false);
  const toggleGame =()=>{
    SetStart((prop)=>!prop);
   }
  return(
   <>
  {
  isStart ?<Main/>:<Front toggle = {toggleGame}/>
  }
   </>
  )
}
export default App;
