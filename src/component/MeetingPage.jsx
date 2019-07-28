import React, { useEffect } from 'react'

import './MeetingPage.css'
import HourCalendar from 'component/hour-calendar/HourCalendar'
import { MeetingAvailabilityStore } from './MeetingAvailabilityStore'

const MeetingPage = ({match}) => {
  const { meeting, getMeeting } = MeetingAvailabilityStore.useContainer()
  const meetingID = match.params.meetingID

  useEffect(() => {
    getMeeting(meetingID);
  }, [meetingID])

  const successfulGet = !meeting.error && meeting.complete;

  const [dates, startTime, endTime] = (() => {
    if (successfulGet) {
      const data = meeting.data
      return [data.dates.split(",").map(date => date.trim()), data.startTime, data.endTime]
    } else {
      return [null, null, null]
    }
  })()

  return (
    <div className="meeting-page-container">
      {successfulGet && <HourCalendar dates={dates} startTime={startTime} endTime={endTime} />}
    </div>
  )
}

export default MeetingPage
