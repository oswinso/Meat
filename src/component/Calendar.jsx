import React from 'react'
import './Calendar.css'

import CalendarDay from './CalendarDay'

const Calendar = () => {
  const onClick = index => {
    console.log(index);
  }
  return <CalendarDay onClick={onClick} day={1} index={1}/>
}

export default Calendar;
