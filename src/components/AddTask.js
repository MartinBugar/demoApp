import {useState} from "react";

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("Please add a task")
            return
        }

        onAdd({text, day, reminder})

        setText("");
        setDay("");
        setReminder("");
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>

            <div className="form-control">
                <task>Task</task>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <task>Day & Time</task>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <task>Set Reminder</task>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask;