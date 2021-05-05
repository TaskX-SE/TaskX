import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import list from './events'
import AppList from './task-list'
import schedule from './scheduler'
import axios from 'axios';

const localizer = momentLocalizer(moment);

class App extends React.Component {
  
  constructor(props){  
    super(props);
    let sessionArr = []
  // const sessionsArr = schedule(tasksArr);
    this.state = {
         tasks: [],
         sessions: [] 
      }  
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tasks/')
      .then(response => {
        this.setState({ 
          tasks: response.data,
         })
      })
      .catch((error) => {
        console.log(error);
      })
      this.state.tasks.map(task => {
        axios.get('http://localhost:5000/session-by-task-id/'+task._id)
      .then(response => {
        var pushedData = this.state.sessions.push(response.data);
        this.setState({
          sessions: pushedData
        })
      })
      .catch((error) => {
        console.log(error);
      })
      })
  } 

  render() {

    return (
      <div className="main-container container">
        <div className="row">
        <div className="task-list-div col">
        <AppList/>
        </div>
      <div className="calendar-div col" style={{ height: '500px', width: '650px' }}>
          <Calendar
            events={this.state.sessions}
            titleAccessor="taskName"
            startAccessor="taskDeadline"
            endAccessor="taskDeadline"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
        </div>
        </div>
    )
  }
}
export default App;