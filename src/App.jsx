import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [timer, setTimer] = useState("1:00");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let interval;
    let minutes = +timer.split(":")[0];
    let seconds = +timer.split(":")[1];

    if(isStarted) {
      interval = setInterval(() => {
        if(seconds === 0) {
          if(minutes == 0 && seconds == 0) {
            console.log("bitti");
            clearInterval(interval);
            setIsStarted(false);
            return;
          }
          seconds = 59;
          minutes--;
        }

        seconds--;
        setTimer(`${minutes}:${seconds}`);
        console.log(minutes, seconds);
      }, 1000)
    }

    return () => {
      clearInterval(interval);
    }
  }, [isStarted]);

  function handlePomodoro(e) {
    setTimer(e.target.value);
  }

  return ( 
    <>
      {timer}
      <br />
      <button onClick={() => setIsStarted(!isStarted)}>
        {isStarted ? "durdur" : "başlat"}
      </button>

      <input onChange={(e) => handlePomodoro(e)} value={timer} type="text" />
    </>
  )
}

export default App
