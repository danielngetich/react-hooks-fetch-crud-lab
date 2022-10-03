import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
const[questions,setQuestions]=useState([])
useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then(res=>res.json())
  .then((data)=>{setQuestions(data)})
},[])
function handleDelete(question){
  fetch(`http://localhost:4000/questions/${question.id}`,{
    method:"DELETE",
  }).then(res=>res.json())
  .then(()=>console.log("deleted"))
}
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions} 
      handleDelete={handleDelete}/>}
    </main>
  );
}

export default App;
