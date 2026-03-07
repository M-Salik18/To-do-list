import React,{useState} from "react"
function toDoList(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleinputChange(event){
     //   setNewTask(event.target.value)
    }

function addTask(){
}

function deleteTask(index){
}


    function moveTaskup(index){
    }

    function moveTaskDown(index){
    }


    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <input type="text" 
                value={newTask} 
                onChange={handleinputChange} 
                placeholder="Add a new task"
                />
            <button 
                onClick={addTask} 
                className="add-button">
                    Add
            </button>
            <ol>    
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskup(index)}>Up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                ))} 
            </ol>
        </div>
    )
}