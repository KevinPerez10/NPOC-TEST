import RxData from '../components__records/RxData'
import React, {useState} from 'react'
import Axios from 'axios'

export default function ComponentsRecords() {
  const [openRxData, setOpenRxData] = useState(false)
  const [patientList, setPatientList] = useState([])

  const getPatients = () => {
    Axios.get('http://127.0.0.1:5174/patients').then((response) => {
    setPatientList(response.data);
    });
  }
  /*const sortPatients = () => {
    Axios.get('http://127.0.0.1:5174/sort').then((response) => {
    setPatientList(response.data);
    });
  }*/

  return (
    <div className='flex flex-col bg-white px-5 md:mx-10 md:rounded-xl shadow-md h-full'>
      <h1 className='font-gilmer py-5'>Patient Record List</h1>
      {/* Search Bar */}
      <input className='flex justify-between text-gray-400 p-3 w-fit rounded-full shadow-lg px-5 py-2 my-3'
              placeholder='Search'>
      </input>
      {/* Table */}
      <div className='overflow-auto rounded-lg shadow-md md:self-center'>
        <table className='table-auto h-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200 top-0 sticky'>
            <tr>
              <th className='text-gray-400 p-3'> No </th>
              <th className='text-gray-400 p-3'> Name </th>
              <th className='text-gray-400 p-3'> Address </th>
              <th className='text-gray-400 p-3'> Date of Appointment </th>
              <th className='text-gray-400 p-3'> Appointment Type </th>
              <th className='text-gray-400 p-3'> Phone Number </th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {patientList.map((val,key) => {
              return ( <tr><td className='p-3'>{val.patientID}</td>
              <td className='p-3'>{val.name}</td>
              <td className='p-3'>{val.address}</td>
              <td className='p-3'>{val.date}</td>
              <td className='p-3'>{val.appt_type}</td>
              <td className='p-3'>{val.phone}</td>
              </tr>
              )
            })}
          </tbody>
          <tbody className='text-center'>
            {patientList.map((val,key) => {
              return ( <tr><td className='p-3'>{val.patientID}</td>
              <td className='p-3'>{val.name}</td>
              <td className='p-3'>{val.address}</td>
              <td className='p-3'>{val.date}</td>
              <td className='p-3'>{val.appt_type}</td>
              <td className='p-3'>{val.phone}</td>
              </tr>
              )
            })}
          </tbody>
          <tbody className='text-center'>
            {patientList.map((val,key) => {
              return ( <tr><td className='p-3'>{val.patientID}</td>
              <td className='p-3'>{val.name}</td>
              <td className='p-3'>{val.address}</td>
              <td className='p-3'>{val.date}</td>
              <td className='p-3'>{val.appt_type}</td>
              <td className='p-3'>{val.phone}</td>
              </tr>
              )
            })}
          </tbody>
          <tbody className='text-center'>
            {patientList.map((val,key) => {
              return ( <tr><td className='p-3'>{val.patientID}</td>
              <td className='p-3'>{val.name}</td>
              <td className='p-3'>{val.address}</td>
              <td className='p-3'>{val.date}</td>
              <td className='p-3'>{val.appt_type}</td>
              <td className='p-3'>{val.phone}</td>
              </tr>
              )
            })}
          </tbody>
          <tbody className='text-center'>
            {patientList.map((val,key) => {
              return ( <tr><td className='p-3'>{val.patientID}</td>
              <td className='p-3'>{val.name}</td>
              <td className='p-3'>{val.address}</td>
              <td className='p-3'>{val.date}</td>
              <td className='p-3'>{val.appt_type}</td>
              <td className='p-3'>{val.phone}</td>
              </tr>
              )
            })}
          </tbody>
          <tbody className='text-center'>
            {patientList.map((val,key) => {
              return ( <tr><td className='p-3'>{val.patientID}</td>
              <td className='p-3'>{val.name}</td>
              <td className='p-3'>{val.address}</td>
              <td className='p-3'>{val.date}</td>
              <td className='p-3'>{val.appt_type}</td>
              <td className='p-3'>{val.phone}</td>
              </tr>
              )
            })}
          </tbody>
          <tbody className='text-center'>
            {patientList.map((val,key) => {
              return ( <tr><td className='p-3'>{val.patientID}</td>
              <td className='p-3'>{val.name}</td>
              <td className='p-3'>{val.address}</td>
              <td className='p-3'>{val.date}</td>
              <td className='p-3'>{val.appt_type}</td>
              <td className='p-3'>{val.phone}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className='font-gilmer mx-5 flex flex-col xs:flex-row-reverse mt-auto mb-5'>
        <button to='' onClick={() => setOpenRxData(true)} className='px-5 py-2 shadow-md xs:px-10 xs:ml-auto bg-button-dblue text-white rounded-full transition-all'>Add</button>
        <button to='' className='px-5 py-2 m-1 shadow-md xs:px-10 bg-button-dblue text-white rounded-full transition-all' onClick={getPatients}>Show</button>
      </div>
      <RxData open={openRxData} onClose={() => setOpenRxData(false)}/>
    </div>
  )
}
