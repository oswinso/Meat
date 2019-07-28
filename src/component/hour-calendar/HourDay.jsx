import React from 'react'

import './HourCalendar.css'
import HourDaySlotGroup from './HourDaySlotGroup'
import HourDayHeader from './HourDayHeader'

const HourDay = ({day, hours}) => {
  const cells = []
  for (let i = 0; i < hours; i++) {
    cells.push(<HourDaySlotGroup day={day} slotGroupID={i} key={i}/>)
  }
  return (
    <div className="hour-day">
      <HourDayHeader day={day}/>
      {cells}
    </div>
  )
}

export default HourDay
