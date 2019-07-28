import React from 'react'

import './HourCalendar.css'
import HourDay from './HourDay'

const HourChunk = ({chunk, hours}) => {
  const columns = chunk.map(day => {
    return <HourDay day={day} hours={hours} key={day}/>
  })
  return (
    <div className="hour-chunk">
      {columns}
    </div>
  )
}

export default HourChunk
