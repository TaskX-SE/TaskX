import React, { useState, useEffect } from "react";
import "./task-list.css";
// import './Time-Converter'
import getDateTime from "./Time-Converter";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { Container, Row, Col } from 'react-bootstrap';
// import ToggleButton from 'react-bootstrap/ToggleButton'
import LazyLoad from "react-lazyload";
import TaskForm from "./TaskForm";
import { Search } from "@material-ui/icons";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import PageHeader from "../../components/PageHeader";
import { makeStyles, InputAdornment } from '@material-ui/core';
import Controls from "./components/controls/Controls";
// import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "./components/Popup";
import * as taskService from "./services/taskService";
import * as sessionService from "./services/sessionService";
import schedule from './scheduler'
var mongoose = require('mongoose');
const axios = require('axios').default;

const localizer = momentLocalizer(moment);


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))


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

function dialog({eventObj,open,handleClose}){
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{eventObj.taskName}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {eventObj.sessionDeadline}
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

function Todo({ todo, index, completeTodo, removeTodo, openInPopup }) {
  return (
    <div>
      <div className="todo">
      <div
        className="priority" onClick={() => openInPopup(todo)}
          style={{ background: getPriorityColor(todo.taskPriority) }}
        >
      </div>
      <div>
      <div className="task-name" onClick={() => openInPopup(todo)}
      style={{ textDecoration: todo.taskStatus ? "line-through" : "none" }}
      >
      {todo.taskName}
      </div>

      <div className="deadline" id="deadline-div" onClick={() => openInPopup(todo)}
      style={{ textDecoration: todo.taskStatus ? "line-through" : "none" }}
      >
      {getDateTime(todo.taskDeadline)}
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
      </div>
  </div>
  );
}

function AppList() {

  const classes = useStyles();
    const [taskForEdit, setTaskForEdit] = useState(null)
    const [tasks, setTasks] = useState([])
    const [sessions, setSessions] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(async () => {
      const data = await axios.get(
        'http://localhost:5000/tasks/',
        {
        method: 'get',
        headers: {
              'Content-Type': 'application/json'
            }
      }).then(function(result) {
        return result;
      })
      .catch(function(error) {
        console.log(error);
      });
      setTasks(data.data);

      const dataSessions = await axios.get(
        'http://localhost:5000/sessions/',
        {
        method: 'get',
        headers: {
              'Content-Type': 'application/json'
            }
      }).then(function(result) {
        return result;
      })
      .catch(function(error) {
        console.log(error);
      });

      if(dataSessions.length>1){
      dataSessions.map(currSession=>{
        currSession.sessionStartTime = new Date(currSession.sessionStartTime)  // moment(currSession.sessionStartTime).toDate()
        currSession.deadline = new Date(currSession.deadline) // moment(currSession.deadline).toDate()
      })
      setSessions(dataSessions);

    }else{
      dataSessions.sessionStartTime = new Date(dataSessions.sessionStartTime) // moment(dataSessions.sessionStartTime).toDate()
      dataSessions.deadline = new Date(dataSessions.deadline) // moment(dataSessions.deadline).toDate()
      setSessions(dataSessions.data);
    }
      // setSessions(dataSessions.data);
    }, [])

    // useEffect(async () => {
      
    // }, [])

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.taskName.toLowerCase().includes(target.value.toLowerCase()))
            }
        })
    }

  //   const openSession = e => {
  //     alert(e.target)
  // }

    const addOrEdit = (todo, resetForm) => {
        if (todo._id === "0"){

          todo._id = new mongoose.Types.ObjectId().toString();

            taskService.insertTask(todo)
            // const response = axios.get(
            //   'http://localhost:5000/tasks/get-latest-task/',
            //   {
            //   method: 'get',
            //   headers: {
            //         'Content-Type': 'application/json'
            //       }
            // }).then(data=>{return data;}).catch(err=>{console.log(err)})

            addTodo(todo);
    }
        else{
            taskService.updateTask(todo)
            updateTodo(todo);
        }
        resetForm()
        setTaskForEdit(null)
        setOpenPopup(false)
        
        // const data = taskService.getTasks().then(result=> {return result;}).catch(err => console.log(err))
        // setTasks(data)
      
    }

    const getTasksList = () => {
      return filterFn.fn(tasks)
  }

    const openInPopup = item => {
        setTaskForEdit(item)
        setOpenPopup(true)
    }

  // const [todos, setTodos] = React.useState(tasks);

  const addTodo = todo => {

    tasks.map(currTodo => {
      let retrieved = []
      let data = sessionService.getSessionByTaskId(currTodo._id).then(result=>{
        return result;
      }).catch(err=>{console.log(err)});

      console.log("data: "+data)
      retrieved = data

      if(retrieved.length > 1){
      retrieved.map(session => {
        sessionService.deleteSession(session._id);
      })
    }else if(retrieved.length === 1){
      sessionService.deleteSession(retrieved._id);
    }
    })

    // const newTask = taskService.getLatestTask();

    const newTodos = [...tasks, todo];

    let generatedSessions = schedule(newTodos);

    console.log(generatedSessions);
        generatedSessions.map(session =>{
          console.log(session.taskId)
        sessionService.createSession(session)
      })
    

    setTasks(newTodos);
    setSessions(generatedSessions);
  };

  function getIndexById(id){

    let index = 0
    tasks.map(task => {
      if(task._id === id){
        console.log("index: "+index);
        return index;
      }
      index+=1
      return -1;
    })
  };

  const updateTodo = todo => {
    const newTodos = [...tasks];

    newTodos.map(currTodo => {
      let retrieved = []
      let data = sessionService.getSessionByTaskId(currTodo._id).then(result=>{
        return result;
      }).catch(err=>{console.log(err)});

      console.log("data: "+data)
      retrieved = data

      if(retrieved.length > 1){
      retrieved.map(session => {
        sessionService.deleteSession(session._id);
      })
    }else if(retrieved.length === 1){
      sessionService.deleteSession(retrieved._id);
    }
    })

    let index = 0;
    let i = 0;
    tasks.map(task => {
      if(task._id === todo._id){
        i = index;
      }
      index+=1
    });
    newTodos[i] = todo;

    let generatedSessions = schedule(newTodos)
        generatedSessions.map(session =>{
        sessionService.createSession(session)
      })

    setTasks(newTodos);
    setSessions(generatedSessions);
  };

  const completeTodo = index => {
    const newTodos = [...tasks];

    newTodos.map(currTodo => {
      let retrieved = []
      let data = sessionService.getSessionByTaskId(currTodo._id).then(result=>{
        return result;
      }).catch(err=>{console.log(err)});

      console.log("data: "+data)
      retrieved = data

      if(retrieved.length > 1){
      retrieved.map(session => {
        sessionService.deleteSession(session._id);
      })

    }else if(retrieved.length == 1){
      sessionService.deleteSession(retrieved._id);
    }

    })

    if(newTodos[index].taskStatus === 0){
      newTodos[index].taskStatus = 1;
    }else{
      newTodos[index].taskStatus = 0;
    }

    taskService.updateTaskById(newTodos[index]._id, newTodos[index]).then(res=>{setTasks(newTodos)}).catch(err=>{console.log(err)})
    
    let generatedSessions = schedule(newTodos)
        generatedSessions.map(session =>{
        sessionService.createSession(session)
      })

      setSessions(generatedSessions);
  };

  const removeTodo = index => {
    const newTodos = [...tasks];
    let refactoredSessions = []

    newTodos.map(currTodo => {
      let retrieved = []
      let data = sessionService.getSessionByTaskId(currTodo._id).then(result=>{
        return result;
      }).catch(err=>{console.log(err)});

      console.log("data: "+data)
      retrieved = data

      if(retrieved.length > 1){
      retrieved.map(session => {
        sessionService.deleteSession(session._id);
      })
      refactoredSessions = sessions.filter( ( el ) => !retrieved.includes( el ) );

    }else if(retrieved.length === 1){
      sessionService.deleteSession(retrieved._id);
      refactoredSessions = sessions.filter( ( el ) => !retrieved.includes( el ) );
    }
    })

    setSessions(refactoredSessions);

    taskService.deleteTask(newTodos[index]._id)
    .then(res=>{
      newTodos.splice(index, 1);
      setTasks(newTodos);
    })
    .catch(err=>{
      console.log(err)
    })
    
  };

  return (
    <div className="app">
      <div className="row">
      <div className="center col-lg-5 col-sm-12 col-md-12 col-xl-5">
      <div className="todo-list">
      <Controls.Input
                        label="Search"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <br/>
      <Controls.Button class="add-btn-material"
        text="Add Task"
        variant="outlined"
        startIcon={<AddIcon />}
        className={classes.newButton}
        onClick={() => { setOpenPopup(true); setTaskForEdit(null); }}
                    />
        <div className="scroll">
        {
        getTasksList().map((todo, index) => (
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
            openInPopup={openInPopup}
          />
          </LazyLoad>
        ))}
        </div>
      </div>
      </div>
      <Popup
        title={ (taskForEdit? "Edit":"Create") + " Task"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
        <TaskForm
          taskForEdit={taskForEdit}
          addOrEdit={addOrEdit} />
          </Popup>
          <div className="center col-lg-7 col-sm-12 col-md-12 col-xl-7">
          <div className="calendar-div col" style={{height: '100%', width: '100%'}}>
          <Calendar
            events={sessions}
            titleAccessor="taskName"
            startAccessor="sessionStartTime"
            endAccessor="sessionDeadline"
            onSelectEvent={event => {
              // dialog({event,open, handleClose})
              // setOpen(true)
          }}
            views={['month']}
            // components={{
            //   timeSlotWrapper: ColoredDateCellWrapper,
            // }}
            eventPropGetter={event => {


              const backgroundColor = '#605c5b';

              return { style: { backgroundColor } };

          }}
            formats={{weekdayFormat: (date, culture, localizer) => localizer.format(date, 'dddd', culture)}}
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppList;