import "./TaskCard.css";

const TaskCard = (props) => {
    return (
        <div className="card-wrapper">
            <div className="card-header">
                <p className="task-id">{props.data.id}</p>
                <div className="badge">
                    <p>{props.data.status}</p>
                </div>
            </div>

            <div className="card-content">
                <p>{props.data.content}</p>
            </div>

            <div className="card-footer">
                <div>
                    <p className="due-date">Due Date</p>
                    <p className="date">{props.data.dueDate.toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;