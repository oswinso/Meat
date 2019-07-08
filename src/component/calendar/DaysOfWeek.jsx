import React from 'react'
import moment from 'moment'

const DaysOfWeek = () => {
  const daysOfWeek = moment.weekdaysShort().map(day => {
    return <div className="header" key={day}>{day.toUpperCase()}</div>
  })

  return <div className="calendar-daysofweek">{daysOfWeek}</div>
}

export default DaysOfWeek
