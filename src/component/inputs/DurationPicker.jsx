import React from 'react'

import './inputs.css'
import TimePicker from 'component/inputs/TimePicker'

const DurationPicker = ({timeFrom, timeTo, setTimeFrom, setTimeTo}) => {

  return (
    <div className="duration-picker-container">
      <TimePicker time={timeFrom} setTime={setTimeFrom}/>
        <div className="duration-separator"> to </div>
      <TimePicker time={timeTo} setTime={setTimeTo}/>
    </div>
  )
}

export default DurationPicker
