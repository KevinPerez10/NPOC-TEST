import React from 'react'
import Appointments__Calendar from './Appointments__Calendar'

export default function ComponentsAppointments() {
  return (
    <div className='bg-white font-poppins border-2 flex flex-col justify-between items-center px-5 md:mx-10 md:rounded-xl md:shadow-md h-fit'>
      <div className='flex flex-col md:flex-row justify-around gap-5 w-full mt-10'>
        <div className='bg-bg-dashboard px-20 py-5 flex flex-col items-center rounded-lg shadow-inner'>
          <p className=''>Appointments</p>
          <p className='text-5xl text-button-lblue'>19</p>
        </div>
        <div className='bg-bg-dashboard px-20 py-5 flex flex-col items-center rounded-lg shadow-inner'>
          <div>Cancelled</div>
          <p className='text-5xl text-button-lblue'>03</p>
        </div>
      </div>
      <div className='flex flex-col items-center mb-5 w-full mt-5'>
        <div className='px-5 py-2 m-1 mb-5 xs:px-10 bg-button-dblue bottom-0 z-10 absolute md:static text-white rounded-full transition-all md:self-start hover:cursor-pointer'>
          Edit Calendar
        </div>
        <div className='w-full flex flex-col items-center'>
          <Appointments__Calendar/>
        </div>
      </div>
    </div>
  )
}
