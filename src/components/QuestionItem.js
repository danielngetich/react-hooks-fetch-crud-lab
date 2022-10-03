import React from "react";

function QuestionItem({ question,handleDelete}) {
  function handleChange(question){
    fetch(`http://localhost:4000/questions/${question/id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        correctIndex: "questions/:id"
      })
    })
    }
  const { id, prompt, answers, correctIndex } = question;
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}onChange={handleChange}>{options}</select>
      </label>
      <button onClick={()=>handleDelete(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
