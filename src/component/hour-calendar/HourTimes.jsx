import React, { useState } from 'react'
import moment from 'moment'

import './HourCalendar.css'

const HourTimes = ({start, hours}) => {
  let startClone = start.clone()
  let hourLabels = []
  for (let i = 0; i < hours; i++) {
    const label = startClone.format("h a")
    hourLabels.push(<div className="hour-label" key={i}>{label}</div>)
    startClone.add(1, "h")
  }

  return (
    <div className="hour-times">
      {hourLabels}
    </div>
  )
}

export default HourTimes
