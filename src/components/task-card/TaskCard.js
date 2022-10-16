import "./TaskCard.css";

const TaskCard = (props) => {
    return (
        <div className="card-wrapper">
            <div className="card-header">
                <p className="task-id">{props.id}</p>
                <div className="badge">
                    <p>{props.status}</p>
                </div>
            </div>

            <div className="card-content">
                <p>{props.content}</p>
            </div>

            <div className="card-footer">
                <div>
                    <p className="due-date">Due Date</p>
                    <p className="date">{props.dueDate.toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;