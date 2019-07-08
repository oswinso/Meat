import { useState } from 'react'
import { createContainer } from 'unstated-next'
import useMeetingEndpoint from 'component/api/CreateMeeting'

export const useMeetingDetails = () => {
  const [days, setDays] = useState(new Set())
  const [details, setDetails] = useState({ name: '', description: '' })
  const [startTime, setStartTime] = useState("00:00")
  const [endTime, setEndTime] = useState("00:00")
  const [meeting, postMeeting] = useMeetingEndpoint()

  const addDay = day => {
    let newDays = new Set(days)
    newDays.add(day)
    setDays(newDays)
  }

  const removeDay = day => {
    let newDays = new Set(days)
    newDays.delete(day)
    setDays(newDays)
  }

  const { name, description } = details

  const setName = name => {
    let newDetails = { ...details }
    newDetails.name = name
    setDetails(newDetails)
  }

  const setDescription = description => {
    let newDetails = { ...details }
    newDetails.description = description
    setDetails(newDetails)
  }

  const postNewMeeting = () => {
    postMeeting({
      days: Array.from(days),
      details,
      startTime,
      endTime
    })
  }

  return { days, name, description, details, startTime, endTime, addDay, removeDay, setDetails, setName, setDescription, setStartTime, setEndTime, meeting, postNewMeeting}
}

export const MeetingDetailsStore = createContainer(useMeetingDetails)
