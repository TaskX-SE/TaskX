import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AppList from './task-list'
import getMiliseconds from './scheduler'
import axios from 'axios';

const localizer = momentLocalizer(moment);

class Agenda extends React.Component{
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
}

render() {
    return (
<div style={{height: "100%"}}>
          <Calendar
            events={this.state.sessions}
            titleAccessor="taskName"
            startAccessor="sessionDeadline"
            endAccessor="sessionDeadline"
            views={['week']}
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
    )
 }
}

export default Agenda;