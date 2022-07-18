export default function Questions(props) {
  // console.log(props.questions);
  if (Object.keys(props.questions).length === 0) {
    return <h1> NO question</h1>;
  }
  return (
    <div>
      {props.questions.software.easy.questions.map((q) => (
        <div key={q.id}>
          <h3>{q.question}</h3>
          <div>
            {q.answer.map((val) => {
              return (
                <label key={val}>
                  <input type="radio" name="software" value={val} key={val} />
                  {val}
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
