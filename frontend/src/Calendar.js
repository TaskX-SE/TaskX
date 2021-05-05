import React from 'react';

import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

class CalendarClass extends React.Component {

   render() {

       return (

           <Calendar

               startAccessor="start"
               endAccessor="end"

           />

       )

   }
}
export default CalendarClass;