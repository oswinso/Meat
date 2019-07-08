import React from 'react'

import {MeetingDetailsStore} from './MeetingDetailsStore'

import Calendar from 'component/calendar/Calendar'
import MeatButton from 'component/MeatButton'

import './PickDatePage.css'

const PickDatePage = () => {
  const {days} = MeetingDetailsStore.useContainer()

  return (
    <div className="PickDatePage-container">
      <Calendar />
      <MeatButton to="/create" enabled={days.size > 0}>Let's meat!</MeatButton>
    </div>
  )
}

export default PickDatePage
