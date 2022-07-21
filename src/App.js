import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
import Questions from "./questions.json";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);

  const [questionLevel, setQuestionLevel] = useState('easy');

  useEffect(() => {
    const ticker = setTimeout(() => setSeconds(seconds + 1), 1000);
    return () => clearTimeout(ticker);
  });

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < Questions[questionLevel].length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTotalTime(seconds);
      setStopTimer(true);
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setSeconds(0);
    setQuestionLevel('medium');
    setStopTimer(false);
  };

  return (
    <div className="App container">
      {/* 1. Header  */}
      <h1>AI Learning</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Time elapsed  */}
      {stopTimer ? (
        <h2>Total Time : {totalTime}</h2>
      ) : (
        <h2>Time Elapsed: {seconds}</h2>
      )}

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="card">
          <h1>Final Results</h1>
          <h2>
            {score} out of {Questions[questionLevel].length} correct - (
            {(score / Questions[questionLevel].length) * 100}%)
          </h2>
          <h2>Total time taken {totalTime}</h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="card">
          {/* Current Question  */}
          <div className="card-body">
            <h2>
              Question: {currentQuestion + 1} out of {Questions[questionLevel].length}
            </h2>
            <h3 className="question-text">{Questions[questionLevel][currentQuestion].text}</h3>
          </div>

          {/* List of possible answers  */}
          <ul className="list-group list-group-flush">
            {Questions[questionLevel][currentQuestion].options.map((option) => {
              return (
                <li
                  className="list-group-item"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
