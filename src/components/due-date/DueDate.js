import "./DueDate.css";

const DueDate = (props) => {
    return (
        <div>
            <p className="due-date">Due Date</p>
            <p className="date">{props.date.toLocaleDateString()}</p>
        </div>
    );
}

export default DueDate;