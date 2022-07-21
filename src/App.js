import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
import Questions from "./questions.json";
import timing from "./timing.json";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);

  const [questionLevel, setQuestionLevel] = useState("easy");

  let DifficultyColor = 'green';
  if (questionLevel === 'easy') {
    DifficultyColor = '#32CD32';
  } else if (questionLevel === 'medium') {
    DifficultyColor = '#DC6F6F';
  } else if (questionLevel === 'hard') {
    DifficultyColor = '#CD0000';
  }

  let scoreColor = 'lightBlue';
  let mainbg = 'white';
  let sideColor = 'white';

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
    setStopTimer(false);

    // logic for which question set will be displayed
    if (questionLevel === "easy" && totalTime < timing.easy)
      setQuestionLevel("medium");
    else if (questionLevel === "medium" && totalTime < timing.medium)
      setQuestionLevel("hard");
    else setQuestionLevel("easy");
  };

  return (
    <div style={{background : `${mainbg}`}}>
      <div className="App container" style={{ padding: "5px", background : `${sideColor}` }}>


        <div className="card" style={{ padding: "5px", background : `${sideColor}` }}>
          <div className="card-body">
            {/* 1. Header  */}
            <h1>AI Learning</h1>
            {/* 2.1 Time elapsed  */}
            {stopTimer ? (
              <h2>Total Time : {totalTime}</h2>
            ) : (
              <h2>Time Elapsed: {seconds}</h2>
            )}
          </div>
          <div class="card-group" style={{ padding: "5px" , background : `${sideColor}` }}>
            <div class="card" style={{ background: `${scoreColor}`, padding: "5px" }}>
              <div class="card-body">
                <h5 class="card-title">Score</h5>
                <p class="card-text">{score}</p>

              </div>
            </div>
            <div class="card" style={{ background: `${DifficultyColor}`, padding: "5px" }}>
              <div class="card-body" >
                <h5 class="card-title">Difficulty Level</h5>
                <p class="card-text" >{questionLevel}</p>
              </div>
            </div>
          </div>
        </div>

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
          <div className="card" style={{ padding: "5px", background : `${sideColor}` }}>
            {/* Current Question  */}
            <div className="card-body">
              <h2>
                Question: {currentQuestion + 1} out of{" "}
                {Questions[questionLevel].length}
              </h2>
              <h3 className="question-text">
                {Questions[questionLevel][currentQuestion].text}
              </h3>
            </div>

            {/* List of possible answers  */}
            <div >
            <ul className="list-group list-group-flush" style={{padding: "5px"}}>
              {Questions[questionLevel][currentQuestion].options.map((option) => {
                return (
                  <li
                  style={{background : '#7D9D9C', padding: "5px"}}
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
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
