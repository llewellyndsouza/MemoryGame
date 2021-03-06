import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game"

function App() {
  let [currentScore, setCurrentScore] = useState(0);
  let [highScore, setHighScore] = useState(0);

  const increaseScore = () => {
    setCurrentScore(currentScore+1)
    if(currentScore+1>highScore) setHighScore(currentScore+1);
  }

  const resetScore = () => {
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore} />
      <Game increaseScore={increaseScore} resetScore={resetScore}/>
    </div>
  );
}

export default App;
