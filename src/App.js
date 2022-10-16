import logo from './logo.svg';
import './App.css';
import TaskCard from './components/task-card/TaskCard';

function App() {
  const details = [
    {
      id: "T-1",
      status: "To do",
      content: "1. Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 22)
    },

    {
      id: "T-2",
      status: "To do",
      content: "1. Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 22)
    },

    {
      id: "T-3",
      status: "To do",
      content: "1. Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 22)
    },
  ];

  return ( 
    <div className="app-container">
      <TaskCard data={details[0]} />
      <TaskCard data={details[1]} />
      <TaskCard data={details[2]} />
    </div>
  );
}

export default App;
