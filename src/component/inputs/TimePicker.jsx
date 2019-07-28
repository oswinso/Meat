import React, {useState} from 'react'
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap'

import TextInput from 'component/inputs/TextInput'
import TimePickerModal from './TimePickerModal'

const TimePicker = ({time, setTime}) => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="timepicker-container">
      <TextInput text={time} readOnly="readOnly" className="text-input text-input-time"/>
      <Dropdown className="dropdown" isOpen={open} toggle={toggle}>
        <DropdownToggle className="dropdown-toggle" color="transparent" />
        <DropdownMenu className="dropdown-menu">
          {open && <TimePickerModal date={time} setDate={setTime}/>}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default TimePicker
