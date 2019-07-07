import React from 'react'
import './CalendarDay.css'

const CalendarDay = ({day, index, onClick}) => {
  return (<div className="CalendarDay" onClick={onClick(index)}>{day}</div>)
}

export default CalendarDay;
