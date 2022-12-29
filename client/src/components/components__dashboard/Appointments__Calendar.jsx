import React, {useState} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

export default function Appointments__Calendar() {
  const [events, setEvents] = useState([
    {
      start: new Date(),
      end: new Date(moment().add(1, 'days')),
      title: 'Some Event'
    }
  ])
  return (
    <div className='flex flex-col overflow-hidden w-full'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500}}
      />
	  </div>
  )
}
