import React from 'react'
import moment from 'moment'

import './HourCalendar.css'

const HourDayHeader = ({day}) => {
  const dayMoment = moment(day, "YYYY-MM-DD")
  const date = dayMoment.format("D")
  const dayOfWeek = dayMoment.format("ddd").toUpperCase()
  return (
    <div className="hour-day-header">
      <div className="hour-day-header-day">{dayOfWeek}</div>
      <div className="hour-day-header-date">{date}</div>
    </div>
  )
}

export default HourDayHeader
