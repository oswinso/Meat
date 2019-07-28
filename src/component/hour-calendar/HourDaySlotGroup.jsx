import React, { useEffect } from 'react'
import { AvailabilityHourStore } from './AvailabilityHourStore'
import { MouseStatusStore } from '../MouseStatusStore'

import HourDaySlot from './HourDaySlot'

// TODO: Perhaps this can't be memoized?
const HourDaySlotGroup = React.memo(({ day, slotGroupID }) => {
  const { setAdding, setRemoving } = AvailabilityHourStore.useContainer()
  const down = MouseStatusStore.useContainer()

  const getKey = slotID => {
    return `${day} ${slotGroupID} ${slotID}`
  }

  useEffect(() => {
    if (!down) {
      setAdding(false)
      setRemoving(false)
    }
  }, [down])

  return (
    <div className="hour-day-slot-group">
      <HourDaySlot setKey={getKey(0)}/>
      <HourDaySlot setKey={getKey(1)}/>
    </div>
  )
})

export default HourDaySlotGroup
