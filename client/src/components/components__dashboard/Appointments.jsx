import React, {useState} from 'react'
import Appointments__Calendar from './Appointments__Calendar'
import Appointments__Calendar__Edit from './Appointments__Calendar__Edit'


export default function ComponentsAppointments() {
  const [openCalendar, setOpenCalendar] = useState(false)
  return (
    <div className='bg-white font-poppins border-2 flex flex-col gap-2 justify-between items-center px-5 md:mx-10 md:rounded-xl md:shadow-md h-fit'>
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
        <div onClick={() => setOpenCalendar(true)} className='px-5 py-2 m-1 mb-5 xs:px-10 bg-button-dblue bottom-0 z-10 absolute md:static text-white rounded-full transition-all md:self-start hover:cursor-pointer'>
          Edit Calendar
        </div>
        <div className='w-full flex flex-col items-center'>
          <Appointments__Calendar/>
        </div>
      </div>
      <div className='grid grid-cols-3 w-full gap-3 mb-5'>
        <div className='grid grid-cols-2 place-items-center gap-2 border-2 px-5 py-3 rounded-xl'>
          <p className='text-2xl col-span-2'>
            Inverness McKenzie
          </p>
          <p className='col-start-1 col-span-2'>
            pkzmoci@asifboot.com
          </p>
          <p className='col-start-1'>
            18 Sep 2019
          </p>
          <p>
            11:29AM
          </p>
          <div className='bg-button-dblue hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Confirm
          </div>
          <div className='bg-gray-500 hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Cancel
          </div>
        </div>
        <div className='grid grid-cols-2 place-items-center gap-2 border-2 px-5 py-3 rounded-xl'>
          <p className='text-2xl col-span-2'>
            Inverness McKenzie
          </p>
          <p className='col-start-1 col-span-2'>
            pkzmoci@asifboot.com
          </p>
          <p className='col-start-1'>
            18 Sep 2019
          </p>
          <p>
            11:29AM
          </p>
          <div className='bg-button-dblue hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Confirm
          </div>
          <div className='bg-gray-500 hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Cancel
          </div>
        </div>
        <div className='grid grid-cols-2 place-items-center gap-2 border-2 px-5 py-3 rounded-xl'>
          <p className='text-2xl col-span-2'>
            Inverness McKenzie
          </p>
          <p className='col-start-1 col-span-2'>
            pkzmoci@asifboot.com
          </p>
          <p className='col-start-1'>
            18 Sep 2019
          </p>
          <p>
            11:29AM
          </p>
          <div className='bg-button-dblue hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Confirm
          </div>
          <div className='bg-gray-500 hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Cancel
          </div>
        </div>
        <div className='grid grid-cols-2 place-items-center gap-2 border-2 px-5 py-3 rounded-xl'>
          <p className='text-2xl col-span-2'>
            Inverness McKenzie
          </p>
          <p className='col-start-1 col-span-2'>
            pkzmoci@asifboot.com
          </p>
          <p className='col-start-1'>
            18 Sep 2019
          </p>
          <p>
            11:29AM
          </p>
          <div className='bg-button-dblue hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Confirm
          </div>
          <div className='bg-gray-500 hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Cancel
          </div>
        </div><div className='grid grid-cols-2 place-items-center gap-2 border-2 px-5 py-3 rounded-xl'>
          <p className='text-2xl col-span-2'>
            Inverness McKenzie
          </p>
          <p className='col-start-1 col-span-2'>
            pkzmoci@asifboot.com
          </p>
          <p className='col-start-1'>
            18 Sep 2019
          </p>
          <p>
            11:29AM
          </p>
          <div className='bg-button-dblue hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Confirm
          </div>
          <div className='bg-gray-500 hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Cancel
          </div>
        </div>
        <div className='grid grid-cols-2 place-items-center gap-2 border-2 px-5 py-3 rounded-xl'>
          <p className='text-2xl col-span-2'>
            Inverness McKenzie
          </p>
          <p className='col-start-1 col-span-2'>
            pkzmoci@asifboot.com
          </p>
          <p className='col-start-1'>
            18 Sep 2019
          </p>
          <p>
            11:29AM
          </p>
          <div className='bg-button-dblue hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Confirm
          </div>
          <div className='bg-gray-500 hover:bg-gray-700 w-full text-center text-white px-3 py-1 rounded-full hover:cursor-pointer'>
            Cancel
          </div>
        </div>

      </div>
      <Appointments__Calendar__Edit open={openCalendar} onClose={() => setOpenCalendar(false)}/>
    </div>
  )
}
