import React from 'react'

import TextInput from 'component/inputs/TextInput'
import TextArea from 'component/inputs/TextArea'
import DurationPicker from 'component/inputs/DurationPicker'

import { MeetingDetailsStore } from './MeetingDetailsStore'
import './MeetingDetailsPage.css'
import MeatButton from './MeatButton'
import moment from 'moment'
import { Redirect } from 'react-router-dom'

const MeetingDetailsPage = () => {
  const { name, description, startTime, endTime, setName, setDescription, setStartTime, setEndTime, newMeeting, postNewMeeting} = MeetingDetailsStore.useContainer()

  const isEnabled = () => {
    const nameOk = name !== ""
    const startMoment = moment(startTime, "HH:mm")
    const endMoment = moment(endTime, "HH:mm")
    const timesOk = startMoment.isBefore(endMoment)

    return nameOk && timesOk
  }

  const getMeetingUrl = () => {
    return `/meetings/${newMeeting.data.id}`
  }

  return (
    <div className="meeting-details-container">
      <div className="form-group">
        <TextInput placeholder="Name of the meat" text={name} setText={setName}/>
      </div>
      <div className="form-group">
        <TextArea placeholder="What's your meat about?" text={description} setText={setDescription} attributes={{rows: 5}}/>
      </div>
      <div className="form-group">
        <h4>What times would you like to meat between?</h4>
        <DurationPicker timeFrom={startTime} timeTo={endTime} setTimeFrom={setStartTime} setTimeTo={setEndTime}/>
      </div>
      <MeatButton enabled={isEnabled()} onClick={postNewMeeting}>Create meating</MeatButton>
      {newMeeting && newMeeting.data !== null && newMeeting.complete && !newMeeting.error && <Redirect push to={getMeetingUrl()}/>}
    </div>
  )
}

export default MeetingDetailsPage
