import React from 'react'
import './CalendarDay.css'

const CalendarDay = ({ day, isPast, clicked, onClick }) => {
  return (<div className={`CalendarDay ${!isPast && clicked ? 'Clicked' : ''} ${isPast ? 'disabled-day' : 'enabled-day'}`}
               onClick={() => isPast ? () => {} : onClick(day)}>{day}</div>)
}

export default CalendarDay
