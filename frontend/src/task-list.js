import React from "react";
import "./task-list.css";
import './Time-Converter'
import getDateTime from "./Time-Converter";
import { Container, Row, Col } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton'
import LazyLoad from "react-lazyload";

const Spinner = () => (
  <div className="post loading">
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49d1e0"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

var tasks = [
  {
    "taskPriority": 2,
    "taskStatus": 0,
    "_id": "1",
    "taskName": "schema",
    "taskDesc": "schema creating...",
    "taskDuration": 2,
    "taskDeadline": "2020-11-18T17:27:38.000Z",
    "taskCategory": 1,
    "__v": 0
  },
  
  {
    "taskPriority": 5,
    "taskStatus": 0,
    "_id": "2",
    "taskName": "meeting",
    "taskDesc": " creating...",
    "taskDuration": 2,
    "taskDeadline": "2020-11-18T12:27:38.000Z",
    "taskCategory": 1,
    "__v": 0
  },

  {
    "taskPriority": 5,
    "taskStatus": 0,
    "_id": "3",
    "taskName": "schema",
    "taskDesc": "schema creating...",
    "taskDuration": 1.5,
    "taskDeadline": "2020-11-18T10:27:38.000Z",
    "taskCategory": 1,
    "__v": 0
  },

  
  
  {
    "taskPriority": 5,
    "taskStatus": 0,
    "_id": "4",
    "taskName": "mad",
    "taskDesc": " creating...",
    "taskDuration": 8.5,
    "taskDeadline": "2020-11-18T22:27:38.000Z",
    "taskCategory": 2,
    "__v": 0
  },
 {
  "taskPriority": 3,
  "taskStatus": 0,
  "_id": "605b9ae5282955428c892784",
  "taskName": "mad",
  "taskDesc": " creating...",
  "taskDuration": 1.5,
  "taskDeadline": "2020-11-18T22:27:38.000Z",
  "taskCategory": 2,
  "__v": 0
  },
  {
    "taskPriority": 5,
    "taskStatus": 0,
    "_id": "1",
    "taskName": "schema",
    "taskDesc": "schema creating...",
    "taskDuration": 2,
    "taskDeadline": "2020-11-18T17:27:38.000Z",
    "taskCategory": 1,
    "__v": 0
  },
  
  {
    "taskPriority": 5,
    "taskStatus": 0,
    "_id": "2",
    "taskName": "meeting",
    "taskDesc": " creating...",
    "taskDuration": 2,
    "taskDeadline": "2020-11-18T12:27:38.000Z",
    "taskCategory": 1,
    "__v": 0
  },

  {
    "taskPriority": 5,
    "taskStatus": 0,
    "_id": "3",
    "taskName": "schema",
    "taskDesc": "schema creating...",
    "taskDuration": 1.5,
    "taskDeadline": "2020-11-18T10:27:38.000Z",
    "taskCategory": 1,
    "__v": 0
  },

  
  
  {
    "taskPriority": 5,
    "taskStatus": 0,
    "_id": "4",
    "taskName": "mad",
    "taskDesc": " creating...",
    "taskDuration": 8.5,
    "taskDeadline": "2020-11-18T22:27:38.000Z",
    "taskCategory": 2,
    "__v": 0
  },
 {
  "taskPriority": 3,
  "taskStatus": 0,
  "_id": "605b9ae5282955428c892784",
  "taskName": "mad",
  "taskDesc": " creating...",
  "taskDuration": 1.5,
  "taskDeadline": "2020-11-18T22:27:38.000Z",
  "taskCategory": 2,
  "__v": 0
  },

  {
    "taskPriority": 1,
    "taskStatus": 0,
    "_id": "605c23d2db3f7b3174830f2d",
    "taskName": "mad",
    "taskDesc": " creating...",
    "taskDuration": 15,
    "taskDeadline": "2020-11-18T17:27:38.000Z",
    "taskCategory": 1,
    "__v": 0
  }
];

function getPriorityColor(priority){
  if(priority === 2){
      return "red"
  }else if(priority === 1){
      return "yellow"
  }else if(priority === 0){
      return "green"
  }

  return "gray"
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div>
      <div className="todo">
      <div
        className="priority"
          style={{ background: getPriorityColor(todo.taskPriority) }}
        >
      </div>
      <div>
      <div className="task-name"
      style={{ textDecoration: todo.taskStatus ? "line-through" : "none" }}
      >
      {todo.taskName}
      </div>
      <div className="task-btn">
        {todo.taskStatus === 0 ? (
        <a class="fa fa-circle-thin" id="mark-complete" onClick={() => completeTodo(index)}></a>
        ) : (
          <a class="fa fa-check-circle-o" id="mark-complete" onClick={() => completeTodo(index)}></a>
        )
      }
        <a class="fa fa-trash-o" id="remove-task" onClick={() => removeTodo(index)}></a>
      </div>
      </div>
      <div className="deadline" id="deadline-div"
      style={{ textDecoration: todo.taskStatus ? "line-through" : "none" }}
      >
      {getDateTime(todo.taskDeadline)}
      </div>
      </div>
  </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function getTasks(){
  return tasks;
}

function AppList() {

  const [todos, setTodos] = React.useState(tasks);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    if(newTodos[index].taskStatus === 0){
      newTodos[index].taskStatus = 1;
    }else{
      newTodos[index].taskStatus = 0;
    }
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <LazyLoad
          key={index}
          height={100}
          offset={[-100, 100]}
          placeholder={<Spinner />}
        >
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
          </LazyLoad>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default AppList;