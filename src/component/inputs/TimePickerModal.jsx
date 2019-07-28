import React, {useState, useEffect, useRef} from 'react'

import './inputs.css'
import TextInput from 'component/inputs/TextInput'
import List from './List'

const TimePickerModal = ({date, setDate}) => {
  const [passedHour, passedMinute] = date.split(":").map(x => parseInt(x, 10))

  const [timeBuffer, setTimeBuffer] = useState(date)
  const [hour, setHour] = useState(passedHour)
  const [minute, setMinute] = useState(passedMinute)

  const textInput = useRef(null)

  useEffect(() => {
    textInput.current.focus()
  }, [])

  useEffect(() => {
    const hourString = (""+hour).padStart(2, "0")
    const minuteString = (""+minute).padStart(2, "0")
    const timeString = `${hourString}:${minuteString}`
    setTimeBuffer(timeString)
    setDate(timeString)
  }, [hour, minute, setDate])

  useEffect(() => {
    if (!timeBuffer.includes(":")) {
      return;
    }

    const [hourPart, minutePart] = timeBuffer.split(":")
    if (hourPart.length !== 2 || minutePart.length !== 2) {
      return;
    }

    const [parsedHour, parsedMinute] = [parseInt(hourPart, 10), parseInt(minutePart, 10)]
    if (!isNaN(parsedHour) && parsedHour >= 0 && parsedHour <= 23) {
      setHour(parsedHour)
    }

    if (!isNaN(parsedMinute) && parsedMinute >= 0 && parsedMinute <= 59) {
      setMinute(parsedMinute)
    }
  }, [timeBuffer])

  const hourValues = [...Array(24).keys()]
  const minuteValues = [...Array(60).keys()]

  return (
    <div className="time-picker-modal-container">
      <TextInput ref={textInput} text={timeBuffer} setText={setTimeBuffer} className="text-input text-input-hour-minute"/>
      <List className="hour-list" values={hourValues} listValue={hour} setListValue={setHour} />
      <List className="minute-list" values={minuteValues} listValue={minute} setListValue={setMinute} />
    </div>
  )
}

export default TimePickerModal
