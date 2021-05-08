import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AppList from './task-list'
import getMiliseconds from './scheduler'
import axios from 'axios';
import './App.css'

const localizer = momentLocalizer(moment);
// const ColoredDateCellWrapper = ({ children }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: 'lightblue',
//     },
//   });
  
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

    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);

    axios.get('http://localhost:5000/tasks/')
      .then(response => {
        this.setState({ 
          tasks: response.data
         })
      })
      .catch((error) => {
        console.log(error);
      })
      axios.get('http://localhost:5000/sessions/')
      .then(response => {
          var allSessions = response.data;
          var pushedSessions = []
         allSessions.map(currSession => {
           this.state.tasks.map(currTask => {
            //  if(currSession.taskId === currTask._id){
               currSession.sessionStartTime = moment(currSession.sessionStartTime).toDate()
               currSession.deadline = moment(currSession.deadline).toDate()
              pushedSessions.push(currSession);
            //  }
           })
         })
         this.setState({
              sessions: pushedSessions
            })
      })
      .catch((error) => {
        console.log(error);
      })
      // this.state.tasks.map(task => {
      //   axios.get('http://localhost:5000/session-by-task-id/'+task._id)
      // .then(response => {
      //   var pushedData = this.state.sessions.push(response.data);
      //   this.setState({
      //     sessions: pushedData
      //   })
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
      // })
  } 

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (
      <div className="main-container container">
        {/* <div className="row"> */}
        <div className="task-list-div col">
        <AppList/>
        </div>
      {/* <div className="calendar-div col">
          <Calendar
            events={this.state.sessions}
            titleAccessor="taskName"
            startAccessor="sessionStartTime"
            endAccessor="sessionDeadline"
            views={['month', 'week']}
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
        </div> */}
        {/* </div> */}
        </div>
    )
  }
}
export default App;