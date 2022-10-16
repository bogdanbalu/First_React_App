import "./TaskCard.css";
import Badge from "../badge/Badge";
import DueDate from "../due-date/DueDate";

const TaskCard = (props) => {
    return (
        <div className="card-wrapper">
            <div className="card-header">
                <p className="task-id">{props.data.id}</p>
                <Badge status={props.data.status} />
            </div>

            <div className="card-content">
                <p>{props.data.content}</p>
            </div>

            <div className="card-footer">
                <DueDate date={props.data.dueDate}/>
            </div>
        </div>
    );
}

export default TaskCard;