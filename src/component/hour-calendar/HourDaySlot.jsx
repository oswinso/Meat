import React, { useEffect } from 'react'
import { AvailabilityHourStore } from './AvailabilityHourStore'
import { MouseStatusStore } from '../MouseStatusStore'

// TODO: Perhaps this can't be memoized?
const HourDaySlot = React.memo(({ setKey }) => {
  const { availability, addAvailability, removeAvailability, adding, setAdding, removing, setRemoving } = AvailabilityHourStore.useContainer()
  const down = MouseStatusStore.useContainer()

  const mouseOver = () => {
    if (down) {
      let currentlyAdding = adding
      let currentlyRemoving = removing
      if (!adding && !removing) {
        const contains = availability.has(setKey)

        if (contains) {
          setRemoving(true)
          currentlyRemoving = true
        } else {
          setAdding(true)
          currentlyAdding = true
        }
      }
      if (currentlyAdding) {
        addAvailability(setKey)
      }
      if (currentlyRemoving) {
        removeAvailability(setKey)
      }
    }
  }

  const onMouseDown = () => {
    const contains = availability.has(setKey)

    if (contains) {
      removeAvailability(setKey)
      setRemoving(true)
    } else {
      addAvailability(setKey)
      setAdding(true)
    }
  }

  console.log(availability)

  return <div className="hour-day-slot" onMouseOver={() => mouseOver(0)} onMouseDown={() => onMouseDown(0)}/>
})

export default HourDaySlot
