import "./App.css";
import { useState } from "react";

function App() {

  const[toDoList, setToDoList] = useState([])
  const[newTask, setNewTask] = useState("")

  return (
   <div>
       <h1>To Do List</h1>
       <div>
        <input onClick={(e) => {setNewTask(e.target.value)}}/>
       </div>
   </div>
  );
}

export default App;
