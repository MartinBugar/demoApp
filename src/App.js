import HeaderFunctionBased from "./components/HeaderFunctionBased";
// import HeaderClassBased from "./components/HeaderClassBased";
import { useState, useEffect } from 'react';
import Tasks from "./components/Tasks";
import {logDOM} from "@testing-library/react";
import AddTask from "./components/AddTask";


//Function based component
const App = () => {

    //Toggle task form
    const [showAddTask, setShowAddTask] = useState(false);

    //Initials Tasks
    const [tasks, setTasks] = useState([]);

    //Fetch tasks from the server - GET
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();
        return data;
    }

    //Fetch task from the server by id - GET
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();
        return data;
    }

    //Set tasks using useEfect
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer)
        }
        getTasks();
    }, [])

    //Delete Task from the server
    const deleteTask =  async (id) => {
        //this delete it from the server
        await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

        //this just hide it from the UI
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle reminder
    const toggleReminder = async (id) => {
        //server site
        const taskToToggle = await fetchTask(id)
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        //PUT method to the Backend
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        //UI
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
    }

    //Add task to the server
    const addTask = async (task) => {

        const res = await fetch('http://localhost:5000/tasks', {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(task)
        })

        const data = await res.json()
        setTasks([...tasks, data])

        // Adding task only for UI
        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = {id, ...task };
        // setTasks([...tasks, newTask]);
    }

    return (
        <div className="container">
            <HeaderFunctionBased title={'Task Tracer'} onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
            {/*skrateny ternarny operator bez else*/}
            {showAddTask && <AddTask onAdd={addTask} />}
            {/*<HeaderClassBased/>*/}
            {tasks.length > 0 ? (<Tasks tasks={tasks}
                                        onDelete={deleteTask}
                                        onToggle={toggleReminder}
            />) : ("No tasks to show")}
        </div>
    )
}

export default App;
