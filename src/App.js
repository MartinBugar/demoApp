import HeaderFunctionBased from "./components/HeaderFunctionBased";
// import HeaderClassBased from "./components/HeaderClassBased";
import {useState} from 'react';
import Tasks from "./components/Tasks";
import {logDOM} from "@testing-library/react";
import AddTask from "./components/AddTask";


//Function based component
const App = () => {

    //Toggle task form
    const [showAddTask, setShowAddTask] = useState(false);

    //Initials Tasks
    const [tasks, setTasks] = useState([]);

    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    //Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {id, ...task };
        setTasks([...tasks, newTask]);
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
