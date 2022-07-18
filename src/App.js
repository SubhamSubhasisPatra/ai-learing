import React, { useState } from 'react';

import Questions from "./components/questions";
import Button from "./components/Button";



const questions = {
  software: {
    easy: {
      minSroce: 50000,
      questions: [
        {
          id: 1,
          question: "Python is a which language?",
          answer: [
            "compiled Language",
            "interprited Language",
            "None of the above",
            "All of the above",
          ],
          correctAns: "All of the above",
          timeToCoplete: 10000,
          likeCount: 0,
          dislikeCount: 0,
        },
        {
          id: 2,
          question:
            "What is the name of the language that is used to write the code of the web?",
          answer: ["HTML", "CSS", "Javascript", "None of the above"],
          correctAns: "Javascript",
          timeToCoplete: 10000,
          likeCount: 0,
          dislikeCount: 0,
        },
        {
          id: 3,
          question: "Who is the author of the JavaScript language?",
          answer: [
            "Brendan Eich",
            "James Gosling",
            "None of the above",
            "All of the above",
          ],
          correctAns: "Brendan Eich",
          timeToCoplete: 10000,
          likeCount: 0,
          dislikeCount: 0,
        },
      ],
    },
    medium: {
      minSroce: 50000,
      questions: [
        {
          id: 1,
          question: "Python is a which language?",
          answer: [
            "compiled Language",
            "interprited Language",
            "None of the above",
            "All of the above",
          ],
          correctAns: "All of the above",
          timeToCoplete: 10000,
          likeCount: 0,
          dislikeCount: 0,
        },
        {
          id: 2,
          question:
            "What is the name of the language that is used to write the code of the web?",
          answer: ["HTML", "CSS", "Javascript", "None of the above"],
          correctAns: "Javascript",
          timeToCoplete: 10000,
          likeCount: 0,
          dislikeCount: 0,
        },
        {
          id: 3,
          question: "Who is the author of the JavaScript language?",
          answer: [
            "Brendan Eich",
            "James Gosling",
            "None of the above",
            "All of the above",
          ],
          correctAns: "Brendan Eich",
          timeToCoplete: 10000,
          likeCount: 0,
          dislikeCount: 0,
        },
      ],
    },
  },
};





export default function App() {

  const [enteredValue, setEnteredValue] = useState();


  const formSubmitHandler = event => {
    event.preventDefault();
    console.log(enteredValue)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <Questions questions={questions} />
      </div>
      <Button type="submit">Submit Test</Button>
    </form>
  );
}
