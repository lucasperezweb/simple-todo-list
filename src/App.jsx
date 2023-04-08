import { useState } from 'react'
import { Task } from './Task'
import './App.css'

export const App = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const handleSubmit = () => {
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    return (<div className="app">
        <h1>TO DO LIST 📝</h1>
        <input className='newTask' type='textarea' value={newTask} placeholder="Escribe una tarea..." onChange={(event) => setNewTask(event.target.value)} />
        <button className='button' onClick={handleSubmit}>Añadir tarea</button>
        { tasks.map((task, index) => <Task key={`task-${index}`}>{task}</Task>) }
    </div>)
}