import { useState } from 'react'
import { createContainer } from 'unstated-next'
import useMeetingEndpoint from 'component/api/MeetingEndpoint'
import useAvailabilityEndpoint from './api/AvailabilityEndpoint'

export const useMeetingAvailability = () => {
  const { meeting, getMeeting } = useMeetingEndpoint()
  const [ editing, setEditing ] = useState(false)
  const [ times, setTimes ] = useState([])
  const { newAvailability, postAvailability } = useAvailabilityEndpoint()

  return { meeting, getMeeting, editing, setEditing, times, setTimes }
}

export const MeetingAvailabilityStore = createContainer(useMeetingAvailability)
