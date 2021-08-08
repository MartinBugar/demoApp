const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <task>Task</task>
                <input type="text" placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <task>Day & Time</task>
                <input type="text" placeholder="Add Day & Time"/>
            </div>
            <div className="form-control form-control-check">
                <task>Set Reminder</task>
                <input type="checkbox" />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask;