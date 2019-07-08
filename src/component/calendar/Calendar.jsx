import React, { useState } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import './Calendar.css'

import { MeetingDetailsStore } from 'component/MeetingDetailsStore'

import DaysOfWeek from 'component/calendar/DaysOfWeek'
import CalendarDay from 'component/calendar/CalendarDay'
import PlaceholderCalendarDay from 'component/calendar/PlaceholderCalendarDay'

const Calendar = () => {
  const {days, addDay, removeDay} = MeetingDetailsStore.useContainer()

  const [month, setMonth] = useState(moment())

  const firstDayOfMonth = () => {
    return month
      .startOf('month')
      .day()
  }

  const getKey = momentObject => {
    return momentObject.format('YYYY-MM-DD')
  }

  const onClick = day => {
    const key = getKey(getDay(day))
    if (days.has(key)) {
      removeDay(key)
    } else {
      addDay(key)
    }
  }

  const setPreviousMonth = () => {
    const newMonth = month.clone()
    newMonth.add(-1, 'M')
    setMonth(newMonth)
  }

  const setNextMonth = () => {
    const newMonth = month.clone()
    newMonth.add(1, 'M')
    setMonth(newMonth)
  }

  const getDay = day => {
    return month.clone().day(day)
  }

  const isClicked = key => {
    return days.has(key)
  }

  const monthHeader = <span className="monthHeader">{month.format('MMM')}</span>
  const yearHeader = <span className="yearHeader">{month.format('YYYY')}</span>

  const offset = [...Array(firstDayOfMonth()).keys()].map(i => {
    return <PlaceholderCalendarDay key={i}/>
  })

  const dayArray = [...Array(month.daysInMonth()).keys()].map(day => day + 1)

  const calendar = dayArray.map(day => {
    const key = getKey(getDay(day))
    return <CalendarDay onClick={onClick} day={day} isPast={getDay(day).isBefore(moment())} clicked={isClicked(key)} key={day}/>
  })

  const nextArrow = <div className="nextMonth" onClick={setNextMonth}><FontAwesomeIcon className="arrow" icon={faAngleRight} /></div>
  let previousArrow;

  const previousMonth = month.clone().add(-1, 'M').endOf('month')

  if (previousMonth.isSameOrAfter(moment())) {
    previousArrow = <div className="prevMonth" onClick={setPreviousMonth}><FontAwesomeIcon className="arrow" icon={faAngleLeft} /></div>
  }

  return <div className="Calendar">{monthHeader}{yearHeader}
      <DaysOfWeek/>
      <hr className="divider"/>
      <div className="calendar-body">
        {offset}
        {calendar}
      </div>
      {previousArrow}
      {nextArrow}
    </div>
}

export default Calendar
