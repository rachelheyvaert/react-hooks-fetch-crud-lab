import React from "react";

function QuestionItem({ question, onDeleteClick, onUpdateQ }) {
  const { id, prompt, answers, correctIndex } = question;
  // console.log(answers)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

function handleDeleteClick(){
  fetch(`http://localhost:4000/questions/${question.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDeleteClick(question));
}

function handleChange(event){
  event.preventDefault()
  console.log(event.target.value)
  onUpdateQ(id, parseInt(event.target.value))
}
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
