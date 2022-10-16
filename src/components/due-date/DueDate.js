import "./DueDate.css";

const DueDate = (props) => {
    console.log(props);
    return (
        <p className="date">{props.date.toLocaleDateString()}</p>
    );
}

export default DueDate;