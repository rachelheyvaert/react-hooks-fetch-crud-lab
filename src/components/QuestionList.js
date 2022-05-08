import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem"


function QuestionList() {
  const [questionsList, setQuestionList] = useState([])

  useEffect(()=>{
fetch("http://localhost:4000/questions")
.then((r)=>r.json())
.then((questions)=> setQuestionList(questions))
  },[])

  function handleDeleteQuestion(deletedQ){
const updatedQuestionList = questionsList.filter((question)=> question.id !== deletedQ.id)
 setQuestionList(updatedQuestionList)
}


function handleUpdateQ(id, correctIndex){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex
      }),
    })
      .then((r) => r.json())
      .then((updatedQ) => {
  const updatedQuestionList = questionsList.map((question)=>{
    if(question.id === updatedQ.id){
      return updatedQ;
    } else {
      return question
    }
  })
setQuestionList(updatedQuestionList)
})
}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsList.map((q)=>{
            console.log(q.answers)
       return  <QuestionItem 
       question={q} 
       id={q.id} prompt={q.prompt} 
       answers={q.answers} 
       correctIndex={q.correctIndex} 
       onDeleteClick={handleDeleteQuestion}
       onUpdateQ={handleUpdateQ} 
      />
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
