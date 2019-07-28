import React from 'react'

import { MeetingDetailsStore } from './MeetingDetailsStore'

import Calendar from 'component/calendar/Calendar'
import MeatButton from 'component/button/MeatButton'

import './PickDatePage.css'

const PickDatePage = () => {
  const { days, addDay, removeDay } = MeetingDetailsStore.useContainer()

  return (
    <div className="PickDatePage-container">
      <Calendar days={days} addDay={addDay} removeDay={removeDay}/>
      <MeatButton to="/create" enabled={days.size > 0}>Let's meat!</MeatButton>
    </div>
  )
}

export default PickDatePage
