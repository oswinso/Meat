import React, { useEffect } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import './HourCalendar.css'

import { AvailabilityHourStore } from './AvailabilityHourStore'
import { MouseStatusStore } from '../MouseStatusStore'
import HourChunk from './HourChunk'
import HourTimes from './HourTimes'

function splitEvenly(array, size) {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const HourCalendar = ({dates, startTime, endTime}) => {
  const [chunk, setChunk] = React.useState(0)
  const chunkedDays = splitEvenly(dates, 7);
  const currentChunk = chunkedDays[chunk]

  const start = moment(startTime, "H:m");
  const end = moment(endTime, "H:m");

  const duration = moment.duration(end.diff(start))
  const hours = Math.ceil(duration.asHours())

  const setPrevious = () => {
    setChunk(chunk - 1)
  }

  const setNext = () => {
    setChunk(chunk + 1)
  }

  const previousArrow = <div className="hour-calendar-prev-arrow" onClick={setPrevious}><FontAwesomeIcon className="arrow" icon={faAngleLeft} /></div>
  const nextArrow = <div className="hour-calendar-next-arrow" onClick={setNext}><FontAwesomeIcon className="arrow" icon={faAngleRight} /></div>

  return (
    <div className="hour-calendar">
      {chunk > 0 && previousArrow}
      <HourTimes start={start} hours={hours} />
      <AvailabilityHourStore.Provider>
        <MouseStatusStore.Provider>
          <HourChunk chunk={currentChunk} hours={hours} />
        </MouseStatusStore.Provider>
      </AvailabilityHourStore.Provider>
      {chunk < chunkedDays.length - 1 && nextArrow}
    </div>
  )
}

export default HourCalendar
