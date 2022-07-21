import React, { useState } from "react";

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
  const RadioInput = ({ label, value, checked, setter }) => {
    return (
      <label>
        <input
          type="radio"
          checked={checked === value}
          onChange={() => setter(value)}
        />
        <span>{label}</span>
      </label>
    );
  };

  const [gender, setGender] = useState();
  const [role, setRole] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { gender, role };
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.software.easy.questions.map((q) => {
        return (
          <div>
            <label>{q.question}</label>
            <div>
              {q.answer.map((a) => (
                <RadioInput label={a} value={a} checked={a} setter={setRole} />
              ))}
            </div>
          </div>
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
}
