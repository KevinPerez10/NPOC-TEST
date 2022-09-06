import React from 'react'
import {Link} from 'react-router-dom'

export default function ComponentsRecords() {
  return (
    <div className='flex flex-col bg-white px-5 mx-5 md:mx-10 rounded-xl shadow-md h-full'>
      <h1 className='font-gilmer py-5'>Patient Record List</h1>
      <input className='flex justify-between text-gray-400 p-3 w-fit rounded-full shadow-lg px-5 py-2 my-3'
              placeholder='Search'>
      </input>

      <div className='overflow-auto rounded-lg shadow-md md:self-center'>
        <table className='table-auto h-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200 top-0 sticky'>
            <tr>
              <th className='text-gray-400 p-3'> No </th>
              <th className='text-gray-400 p-3'> Name </th>
              <th className='text-gray-400 p-3'> Email </th>
              <th className='text-gray-400 p-3'> Date of Appointment </th>
              <th className='text-gray-400 p-3'> Consultation </th>
              <th className='text-gray-400 p-3'> Phone Number </th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <td className='p-3'>101</td>
              <td className='p-3'>Inverness Mckenzie</td>
              <td className='p-3'>pkzmoci@asifboot.com</td>
              <td className='p-3'>24.May.20</td>
              <td className='p-3'>Refraction</td>
              <td className='p-3'>09812673819</td>
            </tr>
            <tr>
              <td className='p-3'>101</td>
              <td className='p-3'>Inverness Mckenzie</td>
              <td className='p-3'>pkzmoci@asifboot.com</td>
              <td className='p-3'>24.May.20</td>
              <td className='p-3'>Refraction</td>
              <td className='p-3'>09812673819</td>
            </tr>
            <tr>
              <td className='p-3'>101</td>
              <td className='p-3'>Inverness Mckenzie</td>
              <td className='p-3'>pkzmoci@asifboot.com</td>
              <td className='p-3'>24.May.20</td>
              <td className='p-3'>Refraction</td>
              <td className='p-3'>09812673819</td>
            </tr>
            <tr>
              <td className='p-3'>101</td>
              <td className='p-3'>Inverness Mckenzie</td>
              <td className='p-3'>pkzmoci@asifboot.com</td>
              <td className='p-3'>24.May.20</td>
              <td className='p-3'>Refraction</td>
              <td className='p-3'>09812673819</td>
            </tr>
            <tr>
              <td className='p-3'>101</td>
              <td className='p-3'>Inverness Mckenzie</td>
              <td className='p-3'>pkzmoci@asifboot.com</td>
              <td className='p-3'>24.May.20</td>
              <td className='p-3'>Refraction</td>
              <td className='p-3'>09812673819</td>
            </tr>
            <tr>
              <td className='p-3'>101</td>
              <td className='p-3'>Inverness Mckenzie</td>
              <td className='p-3'>pkzmoci@asifboot.com</td>
              <td className='p-3'>24.May.20</td>
              <td className='p-3'>Refraction</td>
              <td className='p-3'>09812673819</td>
            </tr>
            <tr>
              <td className='p-3'>101</td>
              <td className='p-3'>Inverness Mckenzie</td>
              <td className='p-3'>pkzmoci@asifboot.com</td>
              <td className='p-3'>24.May.20</td>
              <td className='p-3'>Refraction</td>
              <td className='p-3'>09812673819</td>
            </tr>
            <tr>
              <td className='p-3'>101</td>
              <td className='p-3'>Inverness Mckenzie</td>
              <td className='p-3'>pkzmoci@asifboot.com</td>
              <td className='p-3'>24.May.20</td>
              <td className='p-3'>Refraction</td>
              <td className='p-3'>09812673819</td>
            </tr>
            <tr>
              <td className='p-3'>101</td>
              <td className='p-3'>Inverness Mckenzie</td>
              <td className='p-3'>pkzmoci@asifboot.com</td>
              <td className='p-3'>24.May.20</td>
              <td className='p-3'>Refraction</td>
              <td className='p-3'>09812673819</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='font-gilmer mx-5 my-5 flex flex-col xs:flex-row-reverse'>
        <Link to='RxData' className='px-5 py-2 m-1 shadow-md xs:px-10 xs:ml-auto bg-button-dblue text-white rounded-full transition-all'>Add</Link>
        <Link to='' className='px-5 py-2 m-1 shadow-md xs:px-10 bg-button-dblue text-white rounded-full transition-all'>Edit</Link>
        <Link to='' className='px-5 py-2 m-1 shadow-md xs:px-10 bg-white text-red-500 rounded-full transition-all'>Delete</Link>
      </div>

    </div>
  )
}
