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
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsList.map((q)=>{
       return  <QuestionItem 
       question={q} 
       id={q.id} prompt={q.prompt} 
       answers={q.answers} 
       correctIndex={q.correctIndex} 
       onDeleteClick={handleDeleteQuestion}/>
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
