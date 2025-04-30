import { useState } from 'react'

export default function ToDoList(){
const [tasks, setTasks] = useState(["eat breakfast", "take a shower", "walk the dog"]);
const [newTask, setNewTask] = useState("");
const [backgroundColor, setBackgroundColor] = useState('red');


function handleInputChange(event){
    setNewTask(event.target.value)
}
function addTask(){

    setTasks(t => [...t, newTask]);
    setNewTask("");

}
function deleteTask(index){

    const updatedTasks = tasks.filter((_, i) => i !== index );
    setTasks(updatedTasks);

}
function completeTask(index){
    const backgroundColor = setBackgroundColor("yellow")
}


return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        
        
        <div>
            <input type='text' placeholder='Enter a task...' value={newTask} onChange={handleInputChange}></input>
            <button className='add-button' onClick={addTask}>ADD A TASK</button>


        </div>


        <ol>
            {tasks.map((task, index) => 
            
            <li key={index}> 
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={()=>deleteTask(index)}>Delete </button>

            </li>
            
            )}
        </ol>


    </div>
)

}