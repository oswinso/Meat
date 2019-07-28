import { useState } from 'react'
import { createContainer } from 'unstated-next'

export const useAvailabilityHourStore = () => {
  const [ availability, setAvailability ] = useState(new Set())
  const [ adding, setAdding ] = useState(false)
  const [ removing, setRemoving ] = useState(false)

  const addAvailability = newAvailability => {
    let newSet = new Set(availability)
    newSet.add(newAvailability)
    setAvailability(newSet)
  }

  const removeAvailability = oldAvailability => {
    let newSet = new Set(availability)
    newSet.delete(oldAvailability)
    setAvailability(newSet)
  }

  return {availability, addAvailability, removeAvailability, adding, setAdding, removing, setRemoving }
}

export const AvailabilityHourStore = createContainer(useAvailabilityHourStore)
