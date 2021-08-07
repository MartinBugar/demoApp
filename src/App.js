import HeaderFunctionBased from "./components/HeaderFunctionBased";
// import HeaderClassBased from "./components/HeaderClassBased";
import { useState } from 'react';
import Tasks from "./components/Tasks";


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
            text: "Food shoping",
            day: "Feb 7th at 3:30pm",
            reminder: true,
        }
    ])
    return (
        <div className="container">
            <HeaderFunctionBased title={'Task Tracer'}/>
            {/*<HeaderClassBased/>*/}
            <Tasks tasks={tasks}/>
        </div>
    )
}

export default App;
