import "./TaskCard.css";

const TaskCard = () => {
    const taskId = "T-2";
    const taskStatus = "Todo";
    const taskContent = "Create a Design System for Enum Workspace.";
    const taskDueDate = "Due Date";
    const taskDate = new Date(2022, 5, 23);

    return (
        <div className="card-wrapper">
            <div className="card-header">
                <p className="task-id">{taskId}</p>
                <div className="badge">
                    <p>{taskStatus}</p>
                </div>
            </div>

            <div className="card-content">
                <p>{taskContent}</p>
            </div>

            <div className="card-footer">
                <div>
                    <p className="due-date">{taskDueDate}</p>
                    <p className="date">{taskDate.toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;