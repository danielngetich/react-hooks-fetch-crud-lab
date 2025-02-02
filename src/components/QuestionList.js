import React from "react";
import QuestionItem from "./QuestionItem"
function QuestionList({questions,handleDelete,setQuestions}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{Object.values(questions).map((question)=>{
        return <QuestionItem key={question.id} question={question}
         handleDelete={handleDelete}
         setQuestions={setQuestions}
         questions={questions}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;
