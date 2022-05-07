import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem"


function QuestionList() {
  const [questionsList, setQuestionList] = useState([])

  useEffect(()=>{
fetch("http://localhost:4000/questions")
.then((r)=>r.json())
.then((questions)=> setQuestionList(questions))
  },[])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsList.map((q)=>{
       return  <QuestionItem question={q} id={q.id} prompt={q.prompt} answers={q.answers} correctIndex={q.correctIndex} />
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
