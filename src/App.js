import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
function App() {
const[timer,setTimer]=useState(0);
const [isRunning,setIsrunning]=useState(false)

useEffect(()=>{
  let timerId;
  if(isRunning)
{
 timerId=setInterval(()=>{
setTimer((prevTimer)=>prevTimer+1);
 },1000); 


}

return ()=>{
  clearInterval(timerId)
}
}
,[isRunning]);



const formatTime=(secs)=>{
let mins=Math.floor(secs/60)
let remainingsec= secs%60;
return `${mins}: ${ remainingsec <10 ? "0":""}${remainingsec}`
}
const startstop=()=>{
  setIsrunning(!isRunning)
}
const reset=()=>{
  setTimer(0);
  setIsrunning(false)
}

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time:{formatTime(timer)}</p>
      <button  onClick={startstop}>{isRunning?"Stop":"Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
