import React from "react";

function QuestionItem({ question,handleDelete,setQuestions,questions}) {
  function handleChange(id,correctIndex){
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({correctIndex})
    }).then(res=>res.json())
    .then((patchQuiz)=>{
      const newQuestions=questions.map((quz)=>{
        if (quz.id===patchQuiz){
          return patchQuiz
        }else return quz
      })
      setQuestions(newQuestions)
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
