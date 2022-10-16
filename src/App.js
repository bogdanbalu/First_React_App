import logo from './logo.svg';
import './App.css';
import TaskCard from './components/task-card/TaskCard';

function App() {
  const result = [];
  const data = [
    {
      id: "T-1",
      status: "To do",
      content: "1. Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 22)
    },
    {
      id: "T-2",
      status: "In Progress",
      content: "2. Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 23)
    },
    {
      id: "T-3",
      status: "Completed",
      content: "3. Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 24)
    }
  ];

  return ( 
    <div className="app-container">
      <TaskCard 
        id={data[0].id}
        status={data[0].status}
        content={data[0].content}
        dueDate={data[0].dueDate}
      />

      <TaskCard 
        id={data[1].id}
        status={data[1].status}
        content={data[1].content}
        dueDate={data[1].dueDate}
      />

      <TaskCard 
        id={data[2].id}
        status={data[2].status}
        content={data[2].content}
        dueDate={data[2].dueDate}
      />
    </div>
  );
}

export default App;
