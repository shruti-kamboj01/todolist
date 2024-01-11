import "./App.css";
import { useState } from "react";
import Task from "./components/Task";
function App() {

  const[toDoList, setToDoList] = useState([])
  const[newTask, setNewTask] = useState("")

const addTask = () => {
  const task = {
    id: toDoList.length === 0 ? 1 : toDoList[toDoList.length -1].id + 1,
 taskName:newTask,
  completed:false,
  }
 
  setToDoList([...toDoList, task]);
}

const deleteTask = (id) => {
  const newTodoList = toDoList.filter((task) => task.id !== id);

  setToDoList(newTodoList)
}

const completeTask = (id) => {
  setToDoList(toDoList.map((task) => {
      if(task.id===id){
       return {...task, completed: true}; 
      } 
      return task;
     })
     );
};


  return (
   <div className="">
       <h1 className="flex items-center flex-col mt-10 mb-20 text-5xl font-bold">To Do List</h1>
       <div className=" flex flex-row justify-center gap-x-3">
        <input onChange={e => setNewTask(e.target.value)}
          className="border-[2px] px-2 border-gray-600 rounded-md"
        />
          <button className="border-[2px] px-2 py-1 rounded-md border-gray-700 hover:bg-gray-700 hover:text-white"
          onClick={addTask}>
            Add  Task
          </button>
       </div>


       <div className="border-[2px] border-gray-700 px-4 rounded-lg mt-10 w-[50%] ml-72">
        {
          toDoList.map((task) => {
            return <Task 
              taskName= {task.taskName}
              id= {task.id}
              completed={task.completed}
              deleteTask= {deleteTask}
              completeTask={completeTask}
            />
          })
          }
       </div>
   </div>
  );
}

export default App;
