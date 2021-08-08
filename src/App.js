import HeaderFunctionBased from "./components/HeaderFunctionBased";
// import HeaderClassBased from "./components/HeaderClassBased";
import {useState} from 'react';
import Tasks from "./components/Tasks";
import {logDOM} from "@testing-library/react";
import AddTask from "./components/AddTask";


//Function based component
const App = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting at school",
            day: "Feb 6th at 1:30pm",
            reminder: true,
        },
        {
            id: 3,
            text: "Food shopping",
            day: "Feb 7th at 3:30pm",
            reminder: true,
        }
    ])

    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    return (
        <div className="container">
            <HeaderFunctionBased title={'Task Tracer'}/>
            <AddTask />
            {/*<HeaderClassBased/>*/}
            {tasks.length > 0 ? (<Tasks tasks={tasks}
                                        onDelete={deleteTask}
                                        onToggle={toggleReminder}
            />) : ("No tasks to show")}
        </div>
    )
}

export default App;
