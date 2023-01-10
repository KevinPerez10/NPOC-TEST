
import React, {useState, useEffect} from 'react'
import AddRxData from '../components__records/AddRxData'
import PatientHistory from '../components__records/PatientHistory'
import Axios from 'axios'
import { useRef } from 'react'

export default function ComponentsRecords() {
  const [openAddRxData, setOpenAddRxData] = useState(false)
  const [openPatientHistory, setOpenPatientHistory] = useState(false)
  const [patientList, setPatientList] = useState([])
  const tableRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null)
  useEffect(() => {
    Axios.get('http://127.0.0.1:5174/patients').then((response) => {
    setPatientList(response.data);
    });
  }, []);
  const getPatients = () => {
    Axios.get('http://127.0.0.1:5174/patients').then((response) => {
    setPatientList(response.data);
    });
  }

  //table click
  useEffect(() => {
    if(tableRef.current){
    tableRef.current.onclick = function(event) {
    var target = event.target;
    while (target && target.tagName !== "TR") {
        target = target.parentNode;
    }
    if (target) {
        var cells = target.getElementsByTagName("td");
            var id = cells[0].innerHTML;
            setSelectedId(id);
    }
    }
  }
  }, [patientList,setSelectedId])
  

  return (
    <div className='flex flex-col bg-white px-5 md:mx-10 md:rounded-xl shadow-md h-full'>
      <h1 className='font-gilmer py-5'>Patient Record List</h1>
      {/* Search Bar */}
      <input className='flex justify-between text-gray-400 p-3 w-fit rounded-full shadow-lg px-5 py-2 my-3'
              placeholder='Search'>
      </input>
      {/* Table */}
      <div className='overflow-auto rounded-lg w-full shadow-md md:self-center'>
        <table className='table-auto w-full h-full' ref={tableRef}>
          <thead className='bg-gray-50 border-b-2 border-gray-200 top-0 sticky'>
            <tr>
              <th className='text-gray-400 p-3'> No </th>
              <th className='text-gray-400 p-3'> Name </th>
              <th className='text-gray-400 p-3'> Age </th>
              <th className='text-gray-400 p-3'> Address </th>
              <th className='text-gray-400 p-3'> Date of Appointment </th>
              <th className='text-gray-400 p-3'> Appointment Type </th>
              <th className='text-gray-400 p-3'> Phone Number </th>
            </tr>
          </thead>
          <tbody
            className='text-center'
            onClick={() => setOpenPatientHistory(true)}
            >
            {patientList.map((val,key) => {
              return (
                <tr className='transition-all hover:cursor-pointer hover:text-white hover:bg-button-lblue'>
                  <td className='p-3'>{val.patientID}</td>
                  <td className='p-3'>{val.name}</td>
                  <td className='p-3'>{val.age}</td>
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

      <div className='font-gilmer mx-5 flex flex-col xs:flex-row-reverse pt-5 mt-auto mb-5'>

        <button to='' onClick={() => setOpenAddRxData(true)} className='px-5 py-2 hover:bg-gray-700 shadow-md xs:px-10 xs:ml-auto bg-button-dblue text-white rounded-full transition-all'>Add</button>
        <button to='' className='px-5 py-2 m-1 hover:bg-gray-700 shadow-md xs:px-10 bg-button-dblue text-white rounded-full transition-all' onClick= {()=>{getPatients();}}>Show</button>
      </div>
      <AddRxData open={openAddRxData} onClose={() => setOpenAddRxData(false)}/>
      <PatientHistory  selectedId={selectedId} openPatientHistory={openPatientHistory} onClosePatientHistory={() => setOpenPatientHistory(false)}/>
    </div>
  )
}
